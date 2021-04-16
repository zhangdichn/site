[Google Cloud Storage](https://cloud.google.com/storage/)

## Config

### Servicer

| Name | Required | Comments |
| ---- | -------- | -------- |
| [credential](go-storage/pairs/credential.md) | Y | support `base64` and `file` protocol: `base64` is the base64 of token content, `file` is the absolute path to token file. |

### Storager

| Name | Required | Comments |
| ---- | -------- | -------- |
| [name](go-storage/pairs/name.md) | Y | bucket name |
| [work_dir](go-storage/pairs/work_dir.md) | N | work dir |
| `project` | Y | google cloud project id |

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
