[Aliyun Object Storage](https://www.aliyun.com/product/oss)

## Config

### Servicer

| Name | Required | Comments |
| ---- | -------- | -------- |
| [credential](go-storage/pairs/credential.md) | Y | only support `hmac` protocol |
| [endpoint](go-storage/pairs/endpoint.md) | Y | |

### Storager

| Name | Required | Comments |
| ---- | -------- | -------- |
| [name](go-storage/pairs/name.md) | Y | bucket name |
| [work_dir](go-storage/pairs/work_dir.md) | N | work dir |

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

## Implementation

This service implements following interfaces:

- [Servicer](../operations/servicer/index.md)

- [Storager](../operations/storager/index.md)

- [Appender](../operations/appender/index.md)

## Pairs

### Server-Side Encryption (SSE)

Aliyun Object Storage supports two options for Server-Side Encryption:

- Server-side encryption by using Key Management Service (SSE-KMS)
- Server-side encryption by using OSS-managed keys (SSE-OSS)

*Note: there exists inconsistency between the two OSS docs. And take care if you want to use the SM4 algorithm.*

For Chinese users, refer to https://help.aliyun.com/document_detail/31871.html for details.

For global users, refer to https://www.alibabacloud.com/help/doc-detail/31871.htm for details, and double-check whether the SM4 algorithm can be used.

#### SSE-KMS

| Name                            | Comments                                                     |
| ------------------------------- | ------------------------------------------------------------ |
| `server_side_encryption`        | specifies the encryption algorithm. It should be `KMS`       |
| `server_side_data_encryption`   | specifies the encryption algorithm when server_side_encryption is `KMS`. Can only be set to `SM4`. If this is not set, AES256 algorithm will be used. |
| `server-side-encryption-key-id` | specifies the ID of the customer managed CMK used to protect the data |

##### Supported Operations

- [Write](../operations/storager/write.md)
- [CreateAppend](../operations/appender/create_append.md)

#### SSE-OSS

| Name                     | Comments                                                     |
| ------------------------ | ------------------------------------------------------------ |
| `server_side_encryption` | specifies the encryption algorithm. It should be `AES256` or `SM4`. |

##### Supported Operations

- [Write](../operations/storager/write.md)
- [CreateAppend](../operations/appender/create_append.md)