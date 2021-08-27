# profile

BeyondCTL 支持多个配置方案，以便我们能够在不同的服务之间快速切换。

```shell
NAME:
   beyondctl profile - manage profile in config file

USAGE:
   beyondctl profile command [command options] [arguments...]

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

## 添加新配置文件

我们可以使用 `beyondctl profile add` 来通过连接字符串添加新配置文件。

```shell
beyondctl profile add example s3://<bucketname>/path?credential=hmac:<access_key>:<secret_key>&endpoint=https:<example.com>&location=<region>
```

> 要了解更多关于连接字符串的信息，请参阅 [连接字符串文档](/docs/go-storage/operations/index)。

此外, BeyondCTL 支持通过环境变量 `BEYOND_CTL_PROFILE_<name>` 添加临时配置文件:

```shell
BEYOND_CTL_PROFILE_EXAMPLE=s3://<bucketname>/path?credential=hmac:<access_key>:<secret_key>&endpoint=https:<example.com>&location=<region> beyondctl cp test.mp4 example:/test.mp4
```

这个配置将不会被持久化在配置文件中，适合在容器或者 CI/CD 的环境下使用。

## 列出配置文件

我们可以使用 `beyondctl profile list` 来列出已经添加的配置文件。

```shell
beyondctl profile list
```

## 删除配置文件

我们可以使用 `beyondctl profile remove` 来删除指定的配置文件。

```shell
beyondctl profile remove example
```
