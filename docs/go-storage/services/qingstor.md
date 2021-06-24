[QingStor Object Storage](https://www.qingcloud.com/products/qingstor/)

## Project

<https://github.com/beyondstorage/go-service-qingstor>

## Configure

### Servicer

#### Available Pairs

| Name | Required | Comments |
| ---- | -------- | -------- |
| [credential](go-storage/pairs/credential.md) | Y | only support `hmac` protocol |
| [endpoint](go-storage/pairs/endpoint.md) | Y | |

#### Examples

Init servicer (see [this page](go-storage/operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
	_ "github.com/beyondstorage/go-service-qingstor/v3"
	"github.com/beyondstorage/go-storage/v4/services"
)

srv, err := services.NewServicerFromString("qingstor://?credential=hmac:access_key_id:secret_access_key&endpoint=https:qingstor.com")
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

Init storager (see [this page](go-storage/operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
	_ "github.com/beyondstorage/go-service-qingstor/v3"
	"github.com/beyondstorage/go-storage/v4/services"
)

store, err := services.NewStoragerFromString("qingstor://<bucket_name>/path/to/workdir?credential=hmac:access_key_id:secret_access_key&endpoint=https:qingstor.com")
if err != nil {
    log.Fatalf("qingstor new service: %v", err)
}
```

## Implementation

This service implements following interfaces:

- [Servicer](../operations/servicer/index.md)

- [Storager](../operations/storager/index.md)

- [Appender](../operations/appender/index.md)

- [Copier](../operations/copy.md)

- [Fetcher](../operations/fetch.md)

- [Mover](../operations/move.md)

- [Multiparter](../operations/multiparter/index.md)

- [Reacher](../operations/reach.md)

## Pairs

### Server-Side Encryption (SSE)

Qingstor support server-side encryption with customer-provided encryption keys.

Refer to https://docs.qingcloud.com/qingstor/api/common/encryption.html for more details.
#### Encrypt Object

| Name                            | Comments                                                     |
| ------------------------------- | ------------------------------------------------------------ |
| `encryption_customer_algorithm` | the encryption algorithm. Only AES256 is supported now.      |
| `encryption_customer_key`       | the customer-provided encryption key. For AES256 keys, the plaintext must be 32 bytes long. |

##### Supported Operations

- [Read](../operations/storager/read.md)
- [Write](../operations/storager/write.md)
- [Copy](../operations/copy.md)
- [CreateMultipart](../operations/multiparter/create_multipart.md)
- [WriteMultipart](../operations/multiparter/write_multipart.md)

#### Copy Encrypted Object

| Name                                        | Comments                                                     |
| ------------------------------------------- | ------------------------------------------------------------ |
| `copy_source_encryption_customer_algorithm` | the encryption algorithm for the source object. Only AES256 is supported now. |
| `copy_source_encryption_customer_key`       | the customer-provided encryption key for the source object. For AES256 keys, the plaintext must be 32 bytes long. |
| `copy_source_encryption_customer_key_md5`   | the MD5 of the customer-provided key for the source object.  |

##### Supported Operations

- [Copy](../operations/copy.md)
