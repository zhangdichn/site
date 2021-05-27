Local file system

## Project

<https://github.com/beyondstorage/go-service-fs>

## Config

### Storager

| Name                                     | Required | Comments |
| ---------------------------------------- | -------- | -------- |
| [work_dir](go-storage/pairs/work_dir.md) | N        | work dir |

## Example

Init storager

```yaml
work_dir: /<work_dir>
```

## Implementation

This service implements following interfaces:

- [Storager](../operations/storager/index.md)
- [Copier](../operations/copy.md)
- [Mover](../operations/move.md)
- [Appender](../operations/appender/index.md)
