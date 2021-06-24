[UPYUN Storage Service](https://www.upyun.com/products/file-storage)

## Project

<https://github.com/beyondstorage/go-service-uss>

## Config

### Storager

| Name | Required | Comments |
| ---- | -------- | -------- |
| [credential](go-storage/pairs/credential.md) | Y | only support `hmac` protocol |
| [name](go-storage/pairs/name.md) | Y | bucket name |
| [work_dir](go-storage/pairs/work_dir.md) | N | work dir |
| [endpoint](go-storage/pairs/endpoint.md) | Y | specific domain to access this storager |

## Example

Init storager (see [this page](go-storage/operations/index.md) for details)

```go
import (
	_ "github.com/beyondstorage/go-service-uss/v3"
	"github.com/beyondstorage/go-storage/v4/services"
)

store, err := services.NewStoragerFromString("uss://<bucket_name>/<work_dir>?credential=hmac:<account_name>:<account_key>&endpoint=https:<domain>")
```

## Implementation

This service implements following interfaces:

- [Storager](../operations/storager/index.md)