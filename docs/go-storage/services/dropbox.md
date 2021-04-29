[Dropbox](https://www.dropbox.com)

## Config

### Storager

| Name | Required | Comments |
| ---- | -------- | -------- |
| [credential](go-storage/pairs/credential.md) | Y | only support `api_key` protocol |
| [work_dir](go-storage/pairs/work_dir.md) | N | work dir |

## Implementation

This service implements following interfaces:

- [Storager](../operations/storager/index.md)

- [Appender](../operations/appender/index.md)