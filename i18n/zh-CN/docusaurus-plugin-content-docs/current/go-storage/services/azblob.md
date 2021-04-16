[Azure Blob storage](https://docs.microsoft.com/en-us/azure/storage/blobs/)

## Config

### Servicer

| Name                                         | Required | Comments                     |
| -------------------------------------------- | -------- | ---------------------------- |
| [credential](go-storage/pairs/credential.md) | Y        | only support `hmac` protocol |
| [endpoint](go-storage/pairs/endpoint.md)     | Y        | endpoint provided by azure   |

### Storager

| Name                                     | Required | Comments    |
| ---------------------------------------- | -------- | ----------- |
| [name](go-storage/pairs/name.md)         | Y        | bucket name |
| [work_dir](go-storage/pairs/work_dir.md) | N        | work dir    |

## Example

Init servicer

```yaml
credential: hmac:<account_name>:<account_key>
endpoint: https:<account_name>.<endpoint_suffix>
```

Init storager

```yaml
credential: hmac:<account_name>:<account_key>
endpoint: https:<account_name>.<endpoint_suffix>
name: <container_name>
work_dir: /<work_dir>
```
