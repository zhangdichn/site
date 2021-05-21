[Tencent Cloud Object Storage](https://cloud.tencent.com/product/cos)

## Config

### Servicer

| Name                                         | Required | Comments                     |
| -------------------------------------------- | -------- | ---------------------------- |
| [credential](go-storage/pairs/credential.md) | Y        | only support `hmac` protocol |


### Storager

| Name                                     | Required | Comments    |
| ---------------------------------------- | -------- | ----------- |
| [name](go-storage/pairs/name.md)         | Y        | bucket name |
| [work_dir](go-storage/pairs/work_dir.md) | N        | work dir    |
| [location](go-storage/pairs/location.md) | Y        | location    |

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

## Implementation

This service implements following interfaces:

- [Servicer](../operations/servicer/index.md)

- [Storager](../operations/storager/index.md)

- [Multiparter](../operations/multiparter/index.md)

## Pairs

### Server-Side Encryption (SSE)

COS supports three options for Server-Side Encryption:

- Server-Side Encryption with COS-Managed Keys (SSE-COS)
- Server-Side Encryption with Customer Master Keys (CMKs) Stored in Key Management Service (SSE-KMS)
- Server-Side Encryption with Customer-Provided Keys (SSE-C)

Refer to https://cloud.tencent.com/document/product/436/18145 for more details.

#### SSE-COS

| Name                     | Comments                                          |
| ------------------------ | ------------------------------------------------- |
| `server-side-encryption` | the encryption algorithm. It should be `AES256` . |

##### Supported Operations

- [CreateMultipart](../operations/multiparter/create_multipart.md)
- [Write](../operations/storager/write.md)

#### SSE-KMS

| Name                                    | Comments                                                                                                                                                                                                                  |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `server-side-encryption`                | the server-side encryption algorithm used. It should be `cos/kms` .                                                                                                                                                       |
| `server-side-encryption-cos-kms-key-id` | specify the ID of the customer managed CMK used to protect the data                                                                                                                                                       |
| `server-side-encryption-context`        | an optional set of key-value pairs that can contain additional contextual information about the data. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs. |

##### Supported Operations

- [CreateMultipart](../operations/multiparter/create_multipart.md)
- [Write](../operations/storager/write.md)

#### SSE-C

Server-Side Encryption with Customer-Provided Keys

| Name                                        | Comments                                                                                |
| ------------------------------------------- | --------------------------------------------------------------------------------------- |
| `server-side-encryption-customer-algorithm` | Use this header to specify the encryption algorithm. The header value must be "AES256". |
| `server-side-encryption-customer-key`       | a 32-byte customer-provided AES256 key                                                  |

##### Supported Operations

- [CreateMultipart](../operations/multiparter/create_multipart.md)
- [Read](../operations/storager/read.md)
- [Stat](../operations/storager/stat.md)
- [Write](../operations/storager/write.md)
