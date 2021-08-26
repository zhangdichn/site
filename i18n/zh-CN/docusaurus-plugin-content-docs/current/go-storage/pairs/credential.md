`credential` is used to carry credential data to connect the service.

## Supported Operation

- NewServicer
- NewStorager

## Format

`credential` including two parts: `protocol` and `value` which devided by `:`.

## Supported Protocols

We support following `credential` protocols.

### hmac

`hmac` has two values: `access_key` and `secret_key`.

format: `hmac:<access_key>:<secret_key>` example: `hmac:example_access_key:example_secret_key`

### apikey

`apikey` has one value: `api_key`.

format: `apikey:<api_key>` example: `apikey:example_api_key`

### file

`file` has one value: `file_path`, service will decide how to use this file.

format: `file:<file_path>` example: `file:/path/to/file`

### env

`env` has no values, service will read credential from runtime environment.

format: `env` example: `env`

### base64

`base64` has one value: `base64`, storage service like gcs will take token files as input, we provide base64 protocol so that user can pass token binary data directly.

format: `base64:<base64_content>` example: `base64:exmaple_base64_content`

### basic

`basic` has two values: `user` and `password`

format: `basic:<user>:<password>` example: `basic:example_user:example_password`
