---
title: Iterator
---

## Introduction

`Iterator` is an important part of go-storage APIs. All `List`-alike operations will return a storage-typed `Iterator`. In this document, we will describe exactly how it is implemented and how to use it.

> We will use `Storager.List` and `ObjectIterator` for example, other iterator should be similar.

## Usage

`ObjectIterator` provides two public APIs:

```go
func (it *ObjectIterator) Next() (object *Object, err error)
func (it *ObjectIterator) ContinuationToken() string
```

`Next()` will return an object or an error.

- When the error is `nil`, the Object MUST be valid.
- When there are no more objects, `ObjectIterator` will return an `IteratorDone` error.

So the most common case will be:

```go
it, err := store.List("path/to/example")
if err != nil {
   return
}
for {
   o, err := it.Next()
   if err != nil && errors.Is(err, IteratorDone) {
      break
    }
    if err != nil {
       return err
    }
    // handle object.
}
```

`ContinuationToken()` will return a token that reflects the current internal state of the iterator. We can use this token to create the same iterator so that we can resume an iteration.

- The token defined by services and SHOULD be fetched from the iterator
- The token is meaningless outside list operations.

So the most common case will be:

```go
// Fetch token from the iterator and save to file or other places.
token := it.ContinuationToken()

// Use this token to construct new iterator.
nit, err := store.List("path/to/example", pairs.WithContinuationToken(token))
if err != nil {
   return err
}
```

## Internal Implementation

All iterators are generated via our code generator under `internal/cmd/iterator`. In this section, we care more about the internal logic of iterator and ignore the code generate.

`ObjectIterator` will hold the following things:

- an `ObjectPage` which carries the current object page. Every page includes the current status and a slice of objects to be consumed.
- a `NextObjectFunc` which used to fetch next object page.
- Other flags to mark the internal status.

```go
type NextObjectFunc func(ctx context.Context, page *ObjectPage) error

type ObjectPage struct {
   Status Continuable
   Data   []*Object
}

type ObjectIterator struct {
   ctx  context.Context
   next NextObjectFunc

   index int
   done  bool

   o ObjectPage
}
```

So the logic is simple:

- `ObjectIterator` will call `NextObjectFunc` to fetch new `ObjectPage`
- When `NextObjectFunc` returns `IteratorDone`, `ObjectIterator` will not call `NextObjectFunc` anymore.
- `ObjectIterator` will return an Object in `ObjectPage` everytime user calls `Next()`
- `ObjectIterator` will return `IteratorDone` if no more objects.

```go
func (it *ObjectIterator) Next() (object *Object, err error) {
   // Consume Data via index.
   if it.index < len(it.o.Data) {
      it.index++
      return it.o.Data[it.index-1], nil
   }
   // Return IterateDone if iterator is already done.
   if it.done {
      return nil, IterateDone
   }

   // Reset buf before call next.
   it.o.Data = it.o.Data[:0]

   err = it.next(it.ctx, &it.o)
   if err != nil && !errors.Is(err, IterateDone) {
      return nil, fmt.Errorf("iterator next failed: %w", err)
   }
   // Make iterator to done so that we will not fetch from upstream anymore.
   if err != nil {
      it.done = true
   }
   // Return IterateDone directly if we don't have any data.
   if len(it.o.Data) == 0 {
      return nil, IterateDone
   }
   // Return the first object.
   it.index = 1
   return it.o.Data[0], nil
}
```

## How to implement NextObjectFunc?

Implement `NextObjectFunc` is the most complex thing in implement `Storager.List`. We will provide an example and explain why we should do this.

```go
type objectPageStatus struct {
   delimiter string
   maxKeys   int64
   prefix    string
}

func (s *Storage) list(ctx context.Context, path string, opt pairStorageList) (oi *ObjectIterator, err error) {
   input := &objectPageStatus{
      maxKeys: 200,
      prefix:  s.getAbsPath(path),
   }
   
   var nextFn NextObjectFunc

   switch {
   case opt.ListMode.IsDir():
      input.delimiter = "/"
      nextFn = s.nextObjectPageByDir
   default:
      return nil, services.ListModeInvalidError{Actual: opt.ListMode}
   }

   return NewObjectIterator(ctx, nextFn, input), nil
}

func (s *Storage) nextObjectPageByDir(ctx context.Context, page *ObjectPage) error {
   input := page.Status.(*objectPageStatus)

   // construct API input via objectPageStatus.
   ...

   // Send API call only once.
   output, err := s.service.ListObjectsV2WithContext(ctx, listInput)
   if err != nil {
      return err
   }

   // Handle and parse output to object
   ...

   // Return IterateDone when this is no more data.
   if !aws.BoolValue(output.IsTruncated) {
      return IterateDone
   }

   input.continuationToken = *output.NextContinuationToken
   return nil
}
```

- We can use `objectPageStatus` to store the status that is used to send API calls.
- `List` has different `ListMode`, we need to support `ListModeDir` as least.
- In `nextObjectPageByDir`:
  - Don't use the `for` loop, our iterator already handles it.
  - Don't read the whole list, this will consume too much memory.
    - We can specify a `limit` when the service API supports.
  - Don't store returned slices in `objectPageStatus`, handle and parse them directly to `page.Data`.
  - Return `IterateDone` when this is no more data.
