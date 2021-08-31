---
title: 介绍
sidebar_position: 1
---

Operation means a single action that we can do on a storage service.

![](/docs/go-storage/operations/operations.png)

## Servicer

[servicer](servicer/index.md) is used to maintain the storage service.

We use `Servicer` to create/delete/get/list storages.

## Storager

[storager](storager/index.md) is the interface for storage service.

We use `Storager` to maintain objects.

## How to initialize a Servicer/Storager?

We have connection string support.

The format of the connection string is (optional parts marked by squared brackets):

`<type>://[<name>][<work_dir>][?key1=value1&...&keyN=valueN]`

- name: storage name, e.g., bucket name. MUST NOT contain / MUST NOT contain /
- work_dir: For object storage, it is prefix; for fs, it is directory path. MUST start with / for every storage services. MUST start with / for every storage services.
- For the `key=value` pairs:
  - If `=value` is missing, we just ignore the pair. But `key=` means a pair with a blank value. But `key=` means a pair with a blank value.
  - The `key` is the pair name defined in `toml` and the format SHOULD be exactly the same.
- If their are multiple pairs with the same key, the first one will be picked.

So a valid connection string could be:

- `s3://bucket_name`
- `s3://bucket_name/prefix`
- `s3://?credential=hmac:xxxx:xxxx&endpoint=http:s3.us-east-2.amazonaws.com`
- `s3://bucket_name/prefix?credential=hmac:xxxx:xxxx&endpoint=http:s3.us-east-2.amazonaws.com`
- `fs://`
- `fs:///tmp`

For more details, take a look at [GSP-90](https://github.com/beyondstorage/specs/blob/master/rfcs/90-re-support-initialization-via-connection-string.md).

:::caution

To use a service, do not forget to import the corresponding `go-service-*` package so that the service can be registered in the `init` function.

:::

```go
import (
    _ "github.com/beyondstorage/go-service-fs/v3"
    "github.com/beyondstorage/go-storage/v4/services"
)

store, err := services.NewStoragerFromString("fs:///tmp")
```

### Initialize directly with pairs

Alternatively, you can initialize directly with pairs, if you want to

- use a complex pair that connection string doesn't support yet or is not convenient to write by hand
- construct pairs from your config format without transforming into the connection string format
- reduce the overheads of parsing the connection string

```go
import (
    _ "github.com/beyondstorage/go-service-fs/v3"
    "github.com/beyondstorage/go-storage/v4/pairs"
    "github.com/beyondstorage/go-storage/v4/services"
)

store, err := services.NewStorager("fs", pairs.WithWorkDir("/tmp"))
```
