# profile

BeyondCTL support multiple profiles so that we can switch between different services quickly.

```shell
NAME:
   beyondctl profile - manage profile in config file

USAGE:
   beyondctl profile command [command options] [arguments...]

COMMANDS:
   add      add profile [name] [connection_string]
   list     list profiles
   remove   remove profile [name]
   help, h  Shows a list of commands or help for one command

OPTIONS:
   --help, -h  show help (default: false)
```

## Add new profile

We can use `beyondctl profile add` to add new profiles via connection string.

```shell
beyondctl profile add example s3://<bucketname>/path?credential=hmac:<access_key>:<secret_key>&endpoint=https:<example.com>&location=<region>
```

> To know more about connection string, please refer to [connection string docs](/docs/go-storage/operations/index).

Also, BeyondCTL supports add temporary profiles via env `BEYOND_CTL_PROFILE_<name>`:

```shell
BEYOND_CTL_PROFILE_EXAMPLE=s3://<bucketname>/path?credential=hmac:<access_key>:<secret_key>&endpoint=https:<example.com>&location=<region> beyondctl cp test.mp4 example:/test.mp4
```

The profile will not be persisted in config file which is suitable for running inside container or CI/CD.

## List profiles

We can use `beyondctl profile list` to list profiles that already added.

```shell
beyondctl profile list
```

## Remove profile

We can use `beyondctl profile remove` to remove specified profile.

```shell
beyondctl profile remove example
```
