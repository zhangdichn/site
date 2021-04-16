[Aliyun Object Storage](https://www.aliyun.com/product/oss)

## Config

### Servicer

| Name                                         | Required | Comments                     |
| -------------------------------------------- | -------- | ---------------------------- |
| [credential](go-storage/pairs/credential.md) | Y        | only support `hmac` protocol |
| [endpoint](go-storage/pairs/endpoint.md)     | Y        |                              |

### Storager

| Name                                     | Required | Comments    |
| ---------------------------------------- | -------- | ----------- |
| [name](go-storage/pairs/name.md)         | Y        | bucket name |
| [work_dir](go-storage/pairs/work_dir.md) | N        | work dir    |

## Example

Init servicer

```yaml
credential: hmac:<access_key>:<secret_key>
endpoint: https:<location>.aliyuncs.com
```

Init storager

```yaml
credential: hmac:<access_key>:<secret_key>
endpoint: https:<location>.aliyuncs.com
name: <bucket_name>
work_dir: /<work_dir>
location: <bucket_location>
```
