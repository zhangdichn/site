# cp

BeyondCTL support copy dirs and files between storage services.

> CopyDir support is under development, see our [tracking issue](https://github.com/beyondstorage/beyond-ctl/issues/3) to know more.

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
   --help, -h                   show help (default: false)
```

For example:

```shell
beyondctl cp test.mp4 example:/test.mp4
```

## Speed up via Multipart

BeyondCTL supports speed up the copy procedure via [Multipart](/docs/go-storage/operations/multiparter/index).

By default, BeyondCTL will switch to `multipart` method while the source file is larger than 1 GiB. We can specify the threshold by `--multipart-threshold`:

For example, we can reduce the threshold to `100MiB` to enforce beyondctl use multipart method once file is larger than `100MiB`.

```shell
beyondctl cp --multipart-threshold=100MiB test.mp4 example:/test.mp4
```

## Speed limit

Sometimes, we don't want beyondctl use too many resources. We can limit the read or write speed via `--read-speed-limit` or `--write-speed-limit`.

For example, we can limit the global read speed to 1 MiB.

```shell
beyondctl cp --read-speed-limit=1MiB test.mp4 example:/test.mp4
```

## Control concurrency via Workers

BeyondCTL support concurrency copy be default. We can control the concurrent workers by `--workers`.

By default, we will have `4` workers.

We can increase the workers number to `10` via:

```shell
beyondctl cp --workers=10 test.mp4 example:/test.mp4
```
