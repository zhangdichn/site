[FTP](https://datatracker.ietf.org/doc/html/rfc959)

## Project

<https://github.com/beyondstorage/go-service-ftp>

## Config

### Storager

#### Available Pairs

| Name                                 | Required | Comments                                                                    |
| ------------------------------------ | -------- | --------------------------------------------------------------------------- |
| [credential](../pairs/credential.md) | N        | only support `basic` protocol, using `basic:anonymous:anonymous` as default |
| [endpoint](../pairs/endpoint.md)     | N        | ftp server url, using `127.0.0.1` as default                                |
| [work_dir](../pairs/work_dir.md)     | N        | work dir                                                                    |

## 示例

Init storager (see [this page](../operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
    _ "github.com/beyondstorage/go-service-ftp"
    ps "github.com/beyondstorage/go-storage/v4/pairs"
    "github.com/beyondstorage/go-storage/v4/services"
)

store, err := services.NewStoragerFromString("ftp://<work_dir>?credential=basic:<user>:<password>&endpoint=tcp:<host>:<port>")
if err != nil {
    log.Fatalf("ftp new storager: %v", err)
}

// New storager from pair
store , err:= services.NewStorager("ftp",
    ps.WithWorkDir("<path>"),
    ps.WithCredential("basic:<user>:<password>"),
    ps.WithEndpoint("tcp:<host>:<port>"),
)
if err != nil {
    log.Fatalf("ftp new storager: %v", err)
}
```

## Implementation

This service implements following interfaces:

- [Storager](../operations/storager/index.md)
