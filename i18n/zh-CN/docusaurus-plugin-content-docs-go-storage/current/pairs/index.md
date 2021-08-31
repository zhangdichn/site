---
title: 介绍
sidebar_position: 1
---

`Pair` is a core idea in `go-storage`, which used to carry optional arguments.

There are two kinds of `Pair`:

- Global Pair: Defined in [specs](https://github.com/beyondstorage/specs/blob/master/definitions/pairs.toml), shared across all services.
- System Pair: Defined in service's `service.toml` pairs section, only available in current service.

## Available Pairs

We will document all global pair here and leave system pairs in service's documents.

- [content_md5](./content_md5/)
- [content_type](./content_type/)
- [continuation_token](./continuation_token/)
- [credential](./credential/)
- [endpoint](./endpoint/)
- [expire](./expire/)
- [interceptor](./interceptor/)
- [list_mode](./list_mode/)
- [location](./location/)
- [name](./name/)
- [offset](./offset/)
- [pair_policy](./pair_policy/)
- [multipart_id](./multipart_id/)
- [io_callback](./io_callback/)
- [size](./size/)
- [work_dir](./work_dir/)

## Default Pairs

`go-storage` provides a mechanism to allow user pass default pairs for every operation during `NewServicer` and `NewStorager`.

Any service that supports this mechanism will generate system pairs called  `DefaultServicePairs` and `DefaultStoragePairs`:

```go
type DefaultStoragePairs struct {
    CompleteMultipart []Pair
    Create            []Pair
    CreateMultipart   []Pair
    Delete            []Pair
    List              []Pair
    ListMultipart     []Pair
    Metadata          []Pair
    Read              []Pair
    Stat              []Pair
    Write             []Pair
    WriteMultipart    []Pair
}

func WithDefaultStoragePairs(v DefaultStoragePairs) Pair {
    return Pair{
        Key:   pairDefaultStoragePairs,
        Value: v,
    }
}
```

User can use pass default pairs like this:

```go
store, err := s3.NewStorager(
    s3.WithDefaultStoragePairs(s3.DefaultStoragePairs{
        Write: []types.Pair{
            s3.WithStorageClass("STANDARD_IA"),
        },
    }),
)
```

As in example, every call to `Write` will specify the `storage_class` to `STANDARD_IA`.