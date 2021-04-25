[Azure Blob storage](https://docs.microsoft.com/en-us/azure/storage/blobs/)

## Config

### Servicer

| Name | Required | Comments |
| ---- | -------- | -------- |
| [credential](go-storage/pairs/credential.md) | Y | only support `hmac` protocol |
| [endpoint](go-storage/pairs/endpoint.md) | Y | endpoint provided by azure |

### Storager

| Name | Required | Comments |
| ---- | -------- | -------- |
| [name](go-storage/pairs/name.md) | Y | bucket name |
| [work_dir](go-storage/pairs/work_dir.md) | N | work dir |

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

## Pairs

### Server-Side Encryption (SSE)

Azure Blob storage supports three options for Server-Side Encryption:

- Microsoft-managed keys: This is default behaviour, needs no configuration.
- Customer-managed keys: Configure customer-managed keys for the storage account, and then data will always be protected.
- Customer-provided keys

Refer to https://docs.microsoft.com/en-us/azure/storage/common/storage-service-encryption for more details.

#### Customer-provided keys

| Name               | Comments                                                     |
| ------------------ | ------------------------------------------------------------ |
| `encryption_key`   | the 32-byte customer-provided AES256 key                     |
| `encryption_scope` | Specifies the name of the encryption scope. See https://docs.microsoft.com/en-us/azure/storage/blobs/encryption-scope-overview for details. |

##### Supported Operations

- [Read](../operations/storager/read.md)
- [Stat](../operations/storager/stat.md)
- [Write](../operations/storager/write.md)
