---
title: Handling Errors
---

`go-storage` returns errors that satisfy the Go `error` interface type. The most basic form of error handling looks similar to the following example: The most basic form of error handling looks similar to the following example:

```go
if err != nil {
    log.Printf("error: %s", err.Error())
    // Handle error
    return
}
```

Of course, we can do more. Our goal is: Our goal is:

- Let users know where and why an error happens: rich contextual information
- Let users handle error gracefully: identifiable and unified error codes

## Error Codes and Fine-grained Error Types

Simply put, we defined a finite set of error codes and all errors returned by the public APIs of `go-storage` will have an error code. You can use [errors.Is](https://golang.org/pkg/errors/#Is) to check the error code and handle the error correspondingly. You can use [errors.Is](https://golang.org/pkg/errors/#Is) to check the error code and handle the error correspondingly.

The error codes can be either globally shared by all services (defined in [go-storage/services/error.go](https://github.com/beyondstorage/go-storage/blob/master/services/error.go)), or service-specific (defined in `go-service-*/error.go`).

An error code can have a more fine-grained internal classification: it can have 0, 1 or more related error `struct` types, which have fields carrying contextual information. And you can use [errors.As](https://golang.org/pkg/errors/#As) to handle them specially. And you can use [errors.As](https://golang.org/pkg/errors/#As) to handle them specially.

:::caution

In `errors.As(originErr, &targetErr)`, the type of `targetErr` should be the `struct` value type instead of pointer type.

:::

### Example of Using Error Codes and Fine-grained Error Types

```go 
import (
    s3 "github.com/beyondstorage/go-service-s3"
    "github.com/beyondstorage/go-storage/v4/pairs"
    "github.com/beyondstorage/go-storage/v4/services"
)

// ...

store, err := services.NewStorager("s3", 
    pairs.WithCredential(os.Getenv("STORAGE_S3_CREDENTIAL")),
    pairs.WithEndpoint(os.Getenv("STORAGE_S3_ENDPOINT")),
    // ...
import (
    s3 "github.com/beyondstorage/go-service-s3"
    "github.com/beyondstorage/go-storage/v4/pairs"
    "github.com/beyondstorage/go-storage/v4/services"
)

// ...

store, err := services.NewStorager("s3", 
    pairs.WithCredential(os.Getenv("STORAGE_S3_CREDENTIAL")),
    pairs.WithEndpoint(os.Getenv("STORAGE_S3_ENDPOINT")),
    // ...
)
if err != nil {
    if errors.Is(initErr, services.ErrServiceNotRegistered) {
        // handle ErrServiceNotRegistered
        return
    }
    // handle error
    return
}

n, err := store.Read(path, &buf)
if err != nil {
    if errors.Is(err, services.ErrServiceInternal) {
        // handle ErrServiceInternal
        // (global error)
        return
    }
    if errors.Is(err, services.ErrRequestThrottled) {
        // handle ErrRequestThrottled
        // (global error)
        return
    }
    if errors.Is(err, services.ErrObjectNotExist) {
        // handle ErrObjectNotExist 
        // (global error)
        return
    }
    if errors.Is(err, s3.ErrServerSideEncryptionCustomerKeyInvalid) {
        // handle ErrServerSideEncryptionCustomerKeyInvalid
        // (s3-specific error)
        return
    }
    if errors.Is(err, services.ErrRestrictionDissatisfied) {
        // You can also using errors.As outside, without checking the error code
        var e services.MetadataUnrecognizedError
        if errors.As(err, &e) {
            // handle MetadataUnrecognizedError
            return
        }
        // handle ErrRestrictionDissatisfied
        return
    }
    // handle error
    return
}
```

### List of Global Error Codes

There's a `ErrUnexpected` for uncovered cases.

#### Client-side Errors

| Error Code                   | Fine-grained Error Type                                       |
| ---------------------------- | ------------------------------------------------------------- |
| `ErrCapabilityInsufficient`  | `MetadataUnrecognizedError`<br />`PairUnsupportedError` |
| `ErrRestrictionDissatisfied` | `PairRequiredError`                                           |
| `ErrServiceNotRegistered`    | N/A                                                           |
| `ErrObjectModeInvalid`       | `ObjectModeInvalidError`                                      |
| `ErrListModeInvalid`         | `ListModeInvalidError`                                        |

#### Server-side Errors

| Error Code            | Fine-grained Error Type |
| --------------------- | ----------------------- |
| `ErrObjectNotExist`   | N/A                     |
| `ErrPermissionDenied` | N/A                     |
| `ErrServiceInternal`  | N/A                     |
| `ErrRequestThrottled` | N/A                     |

## Top-level Errors

:::info

Note: Usually using error codes and fine-grained error `struct`s is enough and you don't have to know the content in this section.

:::

Actually there's some top-level errors wrapping the error codes and fine-grained error types, and they are the actual error types returned in `go-storage`. The figure below shows the structure: The figure below shows the structure:

![](https://raw.githubusercontent.com/beyondstorage/specs/master/rfcs/47/new.png)

- `InitError`: returned by `NewServicer` and `NewStorager`
- `ServiceError`: returned by the methods of `Servicer`
- `StorageError`: returned by the methods of `Storager`

You can use [errors.As](https://golang.org/pkg/errors/#As) to convert errors into top-level error types and retrieve the fields you are interested in, just like handling fine-grained error `struct`s.
