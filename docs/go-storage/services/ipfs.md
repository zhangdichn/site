[InterPlanetary File System(IPFS)](https://ipfs.io/)

## Project

<https://github.com/beyondstorage/go-service-ipfs>

## Config

### Storager

#### Available Pairs

| Name | Required | Comments |
| ---- | -------- | -------- |
| [endpoint](go-storage/pairs/endpoint.md) | Y | endpoint |
| [work_dir](go-storage/pairs/work_dir.md) | N | work dir |

#### Examples

Init storager (see [this page](go-storage/operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
	_ "github.com/beyondstorage/go-service-ipfs"
	"github.com/beyondstorage/go-storage/v4/services"
)

store, err := services.NewStoragerFromString("ipfs:///<work_dir>?endpoint=<ipfs_http_api_endpoint>") // endpoint example: http:127.0.0.1:5001
if err != nil {
    log.Fatalf("ipfs new service: %v", err)
}

```

## Implementation

This service implements following interfaces:

- [Storager](../operations/storager/index.md)

- [Copier](../operations/copy.md)

- [Mover](../operations/move.md)
