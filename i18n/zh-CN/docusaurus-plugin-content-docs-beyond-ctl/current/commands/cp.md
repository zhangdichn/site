# cp

BeyondCTL 支持在存储服务之间复制文件和文件夹。

> CopyDir 支持正在开发中，请查看我们的 [跟踪问题](https://github.com/beyondstorage/beyond-ctl/issues/3) 了解更多信息。

```shell
NAME:
   beyondctl cp - copy file from source storager to target storager

USAGE:
   beyondctl cp [command options] [source] [target]

OPTIONS:
   --multipart-threshold value  Specify multipart threshold. If source file size is larger than this value, beyondctl will use multipart method to copy file. (default: 1GB) [$BEYOND_CTL_MULTIPART_THRESHOLD]
   --workers value              Specify the workers number (default: 4) [$BEYOND_CTL_WORKERS]
   --read-speed-limit value     Specify speed limit for read I/O operations, for example, 1MB, 10mb, 3GiB. [$BEYOND_CTL_READ_SPEED_LIMIT]
   --write-speed-limit value    Specify speed limit for write I/O operations, for example, 1MB, 10mb, 3GiB. [$BEYOND_CTL_WRITE_SPEED_LIMIT]
   --help, -h                   show help (default: false) If source file size is larger than this value, beyondctl will use multipart method to copy file. (default: 1GB) [$BEYOND_CTL_MULTIPART_THRESHOLD]
   --workers value              Specify the workers number (default: 4) [$BEYOND_CTL_WORKERS]
   --read-speed-limit value     Specify speed limit for read I/O operations, for example, 1MB, 10mb, 3GiB. [$BEYOND_CTL_READ_SPEED_LIMIT]
   --write-speed-limit value    Specify speed limit for write I/O operations, for example, 1MB, 10mb, 3GiB. [$BEYOND_CTL_WRITE_SPEED_LIMIT]
   --help, -h                   show help (default: false)
```

例如：

```shell
beyondctl cp test.mp4 example:/test.mp4
```

## 通过分段上传加速复制

BeyondCTL 支持通过 [Multipart](/docs/go-storage/operations/multiparter/index) 加快复制过程。

By default, BeyondCTL will switch to `multipart` method while the source file is larger than 1 GiB. We can specify the threshold by `--multipart-threshold`: 我们可以通过 `--multipart-directly` 指定阈值：

例如， 我们可以将阈值降低为 `100MB`  以强制 beyondctl 为大于 `100MB` 的文件使用分段上传。

```shell
beyondctl cp --multipart-threshold=100MiB test.mp4 example:/test.mp4
```

## 速度限制

有时，我们不想要 beyondctl 使用太多资源。 我们可以通过 `--read-speedlimit` 或 `--rardspeedlimit` 来限制读取或写入速度。

例如，我们可以将全局读取速度限制为 1 MiB。

```shell
beyondctl cp --read-speed-limit=1MiB test.mp4 example:/test.mp4
```

## 限制并发数量

BeyondCTL 默认采取并发的方式复制文件。 我们可以通过 `--workers` 控制并行数量。

默认情况下，我们将有 `4` 工作者。

我们可以将工人人数增加到 `10`：

```shell
beyondctl cp --workers=10 test.mp4 example:/test.mp4
```
