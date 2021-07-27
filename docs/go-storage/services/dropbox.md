[Dropbox](https://www.dropbox.com)

## Project

<https://github.com/beyondstorage/go-service-dropbox>

## Config

### Storager

#### Available Pairs

| Name | Required | Comments |
| ---- | -------- | -------- |
| [credential](../pairs/credential.md) | Y | only support `api_key` protocol |
| [work_dir](../pairs/work_dir.md) | N | work dir |

#### Examples

Init storager (see [this page](../operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
	_ "github.com/beyondstorage/go-service-dropbox/v3"
	"github.com/beyondstorage/go-storage/v4/services"
)

store, err := services.NewStoragerFromString("dropbox:///<work_dir>?credential=hmac:<account_name>:<account_key>")
if err != nil {
    log.Fatalf("dropbox new service: %v", err)
}
```

## Implementation

This service implements following interfaces:

- [Storager](../operations/storager/index.md)

- [Appender](../operations/appender/index.md)
