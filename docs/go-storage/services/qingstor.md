[QingStor Object Storage](https://www.qingcloud.com/products/qingstor/)

## Configure

### Servicer

#### Available Pairs

| Name | Required | Comments |
| ---- | -------- | -------- |
| [credential](go-storage/pairs/credential.md) | Y | only support `hmac` protocol |
| [endpoint](go-storage/pairs/endpoint.md) | Y | |

#### Examples

```go
service, err := qingstor.NewServicer(
    pairs.WithCredential("hmac:access_key_id:secret_access_key"),
    pairs.WithEndpoint("https:qingstor.com"),
)
if err != nil {
    log.Fatalf("qingstor new service: %v", err)
}
```

### Storager

#### Available Pairs

| Name | Required | Comments |
| ---- | -------- | -------- |
| [name](go-storage/pairs/name.md) | Y | bucket name |
| [work_dir](go-storage/pairs/work_dir.md) | N | work dir |

#### Examples

```go
service, err := qingstor.NewStorager(
    pairs.WithCredential("hmac:access_key_id:secret_access_key"),
    pairs.WithEndpoint("https:qingstor.com"),
    pairs.WithName("bucket_name"),
    pairs.WithWorkDir("/path/to/workdir"),
)
if err != nil {
    log.Fatalf("qingstor new service: %v", err)
}
```

## Pairs
