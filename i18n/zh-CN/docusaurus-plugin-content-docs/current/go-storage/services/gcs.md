[Google Cloud Storage](https://cloud.google.com/storage/)

## Config

### Servicer

| Name                                         | Required | Comments                                                                                                                  |
| -------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| [credential](go-storage/pairs/credential.md) | Y        | support `base64` and `file` protocol: `base64` is the base64 of token content, `file` is the absolute path to token file. |

### Storager

| Name                                     | Required | Comments                |
| ---------------------------------------- | -------- | ----------------------- |
| [name](go-storage/pairs/name.md)         | Y        | bucket name             |
| [work_dir](go-storage/pairs/work_dir.md) | N        | work dir                |
| `project`                                | Y        | google cloud project id |

## Example

Init servicer

```yaml
credential: file:<absolute_path_to_token_file>
```

Init storager

```yaml
credential: file:<absolute_path_to_token_file>
name: <bucket_name>
work_dir: /<work_dir>
project: <google_cloud_project_id>
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

| Name           | Comments                                                                                                                      |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------- |
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
