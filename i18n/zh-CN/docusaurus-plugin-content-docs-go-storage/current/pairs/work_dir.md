`work_dir` is used to specific the working directory for storager.

## Supported Operation

- NewServicer
- NewStorager

## Behavior

- `work_dir` must be absolute path according the service.
- If user inputs a relative path, we will treat it's relative to `work_dir`.
- If user inputs an absolute path, we will treat it as an absolute path instead of relative to `work_dir`.
