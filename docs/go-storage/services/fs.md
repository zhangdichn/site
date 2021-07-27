Local file system

## Project

<https://github.com/beyondstorage/go-service-fs>

## Config

### Storager

#### Available Pairs

| Name | Required | Comments |
| ---- | -------- | -------- |
| [work_dir](../pairs/work_dir.md) | N | work dir |

#### Examples

Init storager (see [this page](../operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
	_ "github.com/beyondstorage/go-service-fs/v3"
	"github.com/beyondstorage/go-storage/v4/services"
)

store, err := services.NewStoragerFromString("fs:///<work_dir>")
if err != nil {
    log.Fatalf("fs new service: %v", err)
}
```

## Implementation

This service implements following interfaces:

- [Storager](../operations/storager/index.md)
- [Copier](../operations/copy.md)
- [Mover](../operations/move.md)
- [Appender](../operations/appender/index.md)
