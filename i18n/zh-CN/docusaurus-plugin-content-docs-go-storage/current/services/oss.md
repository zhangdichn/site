[Aliyun Object Storage](https://www.aliyun.com/product/oss)

## Project

<https://github.com/beyondstorage/go-service-oss>

## Config

### Servicer

#### Available Pairs

| Name                                 | Required | Comments                     |
| ------------------------------------ | -------- | ---------------------------- |
| [credential](../pairs/credential.md) | Y        | only support `hmac` protocol |
| [endpoint](../pairs/endpoint.md)     | Y        |                              |

#### 示例

Init servicer (see [this page](../operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
    _ "github.com/beyondstorage/go-service-oss/v3"
    "github.com/beyondstorage/go-storage/v4/services"
)

srv, err := services.NewServicerFromString("oss://?credential=hmac:<account_name>:<account_key>&endpoint=https:<location>.aliyuncs.com")
if err != nil {
    log.Fatalf("oss new service: %v", err)
}
```

### Storager

#### Available Pairs

| Name                             | Required | Comments    |
| -------------------------------- | -------- | ----------- |
| [name](../pairs/name.md)         | Y        | bucket name |
| [work_dir](../pairs/work_dir.md) | N        | work dir    |

#### 示例

Init storager (see [this page](../operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
    _ "github.com/beyondstorage/go-service-oss/v3"
    "github.com/beyondstorage/go-storage/v4/services"
)

store, err := services.NewStoragerFromString("oss://<container_name>/<work_dir>?credential=hmac:<account_name>:<account_key>&endpoint=https:<location>.aliyuncs.com")
if err != nil {
    log.Fatalf("oss new service: %v", err)
}
```

## Implementation

This service implements following interfaces:

- [Servicer](../operations/servicer/index.md)

- [Storager](../operations/storager/index.md)

- [Appender](../operations/appender/index.md)

- [Multiparter](../operations/multiparter/index.md)

## Pairs

### Server-Side Encryption (SSE)

Aliyun Object Storage supports two options for Server-Side Encryption:

- Server-side encryption by using Key Management Service (SSE-KMS)
- Server-side encryption by using OSS-managed keys (SSE-OSS)

*Note: there exists inconsistency between the two OSS docs. And take care if you want to use the SM4 algorithm. And take care if you want to use the SM4 algorithm.*

For Chinese users, refer to https://help.aliyun.com/document_detail/31871.html for details.

For global users, refer to https://www.alibabacloud.com/help/doc-detail/31871.htm for details, and double-check whether the SM4 algorithm can be used.

#### SSE-KMS

| Name                            | Comments                                                                                                                                                |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `server_side_encryption`        | specifies the encryption algorithm. specifies the encryption algorithm. It should be `KMS`                                                              |
| `server_side_data_encryption`   | specifies the encryption algorithm when server_side_encryption is `KMS`. Can only be set to `SM4`. If this is not set, AES256 algorithm will be used. |
| `server-side-encryption-key-id` | specifies the ID of the customer managed CMK used to protect the data                                                                                   |

##### Supported Operations

- [CreateAppend](../operations/appender/create_append.md)
- [CreateMultipart](../operations/multiparter/create_multipart.md)
- [Write](../operations/storager/write.md)

#### SSE-OSS

| Name                     | Comments                                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------------------- |
| `server_side_encryption` | specifies the encryption algorithm. specifies the encryption algorithm. It should be `AES256` or `SM4`. |

##### Supported Operations

- [CreateAppend](../operations/appender/create_append.md)
- [CreateMultipart](../operations/multiparter/create_multipart.md)
- [Write](../operations/storager/write.md)
