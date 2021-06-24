[Google Cloud Storage](https://cloud.google.com/storage/)

## Project

<https://github.com/beyondstorage/go-service-gcs>

## Config

### Servicer

#### Available Pairs

| Name | Required | Comments |
| ---- | -------- | -------- |
| [credential](go-storage/pairs/credential.md) | Y | support `base64` and `file` protocol: `base64` is the base64 of token content, `file` is the absolute path to token file. |

#### Examples

Init servicer (see [this page](go-storage/operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
	_ "github.com/beyondstorage/go-service-gcs/v3"
	"github.com/beyondstorage/go-storage/v4/services"
)

srv, err := services.NewServicerFromString("gcs://?credential=file:<absolute_path_to_token_file>")
if err != nil {
    log.Fatalf("gcs new service: %v", err)
}
```

### Storager

#### Available Pairs

| Name | Required | Comments |
| ---- | -------- | -------- |
| [name](go-storage/pairs/name.md) | Y | bucket name |
| [work_dir](go-storage/pairs/work_dir.md) | N | work dir |
| `project` | Y | google cloud project id |

#### Examples

Init storager (see [this page](go-storage/operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
	_ "github.com/beyondstorage/go-service-gcs/v3"
	"github.com/beyondstorage/go-storage/v4/services"
)

store, err := services.NewStoragerFromString("gcs://<bucket_name>/<work_dir>?credential=file:<absolute_path_to_token_file>&project=<google_cloud_project_id>")
if err != nil {
    log.Fatalf("gcs new service: %v", err)
}
```

## Implementation

This service implements following interfaces:

- [Servicer](../operations/servicer/index.md)

- [Storager](../operations/storager/index.md)

## Pairs

### Server-Side Encryption (SSE)

Google Cloud Storage supports three options for Server-Side Encryption:

- Google-managed encryption keys: This is the default behaviour, no setup or configuration required.
- Customer-managed encryption keys: You can add a default KMS key to a bucket, then the objects in the bucket are encrypted/decrepted automatically. You can also encrypt an individual object with a Cloud KMS key.
- Customer-supplied encryption keys

Refer to https://cloud.google.com/storage/docs/encryption for more details.

#### Customer-managed encryption keys

| Name           | Comments                                                     |
| -------------- | ------------------------------------------------------------ |
| `kms_key_name` | the Cloud KMS key resource. For example, `projects/my-pet-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key`. |

##### Supported Operations

- [Write](../operations/storager/write.md)

#### Customer-supplied encryption keys

| Name             | Comments                               |
| ---------------- | -------------------------------------- |
| `encryption_key` | a 32-byte customer-provided AES256 key |

##### Supported Operations

- [Read](../operations/storager/read.md)
- [Write](../operations/storager/write.md)
