[Tencent Cloud Object Storage](https://cloud.tencent.com/product/cos)

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
| [location](go-storage/pairs/location.md) | Y | location|

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
location: <bucket_location>
```
