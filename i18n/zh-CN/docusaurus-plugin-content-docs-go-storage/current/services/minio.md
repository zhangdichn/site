[MinIO](https://min.io)

## Project

<https://github.com/beyondstorage/go-service-minio>

## Config

### Servicer

#### Available Pairs

| Name                                 | Required | Comments                                |
| ------------------------------------ | -------- | --------------------------------------- |
| [credential](../pairs/credential.md) | Y        | only support `hmac` protocol            |
| [endpoint](../pairs/endpoint.md)     | Y        | specific domain to access this storager |

#### 示例

Init servicer (see [this page](../operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
    _ "github.com/beyondstorage/go-service-minio"
    "github.com/beyondstorage/go-storage/v4/services"
)

srv, err := services.NewServicerFromString("minio://?credential=hmac:<access_key>:<secret_key>&endpoint=https:<host>:<port>")
if err != nil {
    log.Fatalf("minio new service: %v", err)
}
```

### Storager

#### Available Pairs

| Name                             | Required | Comments    |
| -------------------------------- | -------- | ----------- |
| [name](../pairs/name.md)         | Y        | bucket name |
| [work_dir](../pairs/work_dir.md) | N        | work dir    |

## 示例

Init storager (see [this page](../operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
    _ "github.com/beyondstorage/go-service-minio"
    "github.com/beyondstorage/go-storage/v4/services"
)

store, err := services.NewStoragerFromString("minio://<bucket_name>/<work_dir>?credential=hmac:<access_key>:<secret_key>&endpoint=https:<host>:<port>")
if err != nil {
    log.Fatalf("minio new storager: %v", err)
}
```

## Implementation

This service implements following interfaces:

- [Servicer](../operations/servicer/index.md)

- [Storager](../operations/storager/index.md)

- [Copier](../operations/copy.md)

- [Reacher](../operations/reach.md)
