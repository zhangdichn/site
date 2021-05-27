[qiniu kodo](https://www.qiniu.com/products/kodo)

## Project

<https://github.com/beyondstorage/go-service-kodo>

## Config

### Servicer

| Name | Required | Comments |
| ---- | -------- | -------- |
| [credential](go-storage/pairs/credential.md) | Y | only support `hmac` protocol |

### Storager

| Name | Required | Comments |
| ---- | -------- | -------- |
| [name](go-storage/pairs/name.md) | Y | bucket name |
| [work_dir](go-storage/pairs/work_dir.md) | N | work dir |
| [endpoint](go-storage/pairs/endpoint.md) | Y | specific domain to access this storager |

## Example

Init servicer

```yaml
credential: hmac:<access_key>:<secret_key>
```

Init storager

```yaml
credential: hmac:<access_key>:<secret_key>
name: <bucket_name>
work_dir: /<work_dir>
endpoint: http:<domain>
```

## Implementation

This service implements following interfaces:

- [Servicer](../operations/servicer/index.md)

- [Storager](../operations/storager/index.md)