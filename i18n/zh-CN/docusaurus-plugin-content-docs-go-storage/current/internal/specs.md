---
title: Specs
---

[specs][] is core of our services:

- `fields.toml` defines all fields that we can use in our APIs.
- `operations.toml` defines our APIs.
- `pairs.toml` defines all global pairs that we support.
- `info_object_meta.toml` defines all object metadata.
- `info_storage_meta.toml` defines all storage metadata.
- `service.toml` defines a service's name, ability and limitations.

[go-storage][] provides a code generator [definitions][] to generate code using [specs][].

## Operation

[definitions][] uses `fields.toml` and `operations.toml` to generate our public APIs.

```toml
[storager.op.read]
description = "will read the file's data."
params      = ["path", "w"]
pairs       = ["size", "offset", "io_callback"]
results     = ["n"]
```

will become

```go
type Storager interface {
    ...

    // Read will read the file's data.
    type Storager interface {
    ...

    // Read will read the file's data.
    Read(path string, w io.Writer, pairs ...Pair) (n int64, err error)
    // ReadWithContext will read the file's data.
    ReadWithContext(ctx context.Context, path string, w io.Writer, pairs ...Pair) (n int64, err error)

    ...

    mustEmbedUnimplementedStorager()
}
    ReadWithContext(ctx context.Context, path string, w io.Writer, pairs ...Pair) (n int64, err error)

    ...

    mustEmbedUnimplementedStorager()
}
```

All supported fields are following:

- `description`: This operation's description.
- `params`: This operation's params
- `results`: This operation's returning value
- `pairs`: Required pair for this operation, all service should support.
- `local`: Mark this operation as a local function, [definitions][] will not add `context` and `err` for this function.
- `object_mode`: Object mode check for this operation (Introduced in [GSP-61](https://github.com/beyondstorage/specs/blob/master/rfcs/61-add-object-mode-check-for-operations.md))

## Pair

`Pair` is the input argument for operations:

```go
func Read(path string, w io.Writer, pairs ...Pair) (n int64, err error) {}
```

[go-storage][] provides `pairs.WithXxx` to support strong typed pair:

```go
func WithContentType(v string) Pair {
    return Pair{
        Key:   "content_type",
        Value: v,
    }
}
```

We have two kind of pairs:

- `Global Pair`: defined in [specs](https://github.com/beyondstorage/specs/blob/master/definitions/pairs.toml), could be used in all services.
- `System Pair`: defined in `service.toml`, could only be used in current service.

All supported fields are following:

- `type`: corresponding type of this pair
- `description`: description for this pair, supports multiple lines.

Example of adding global pair:

```toml
[size]
type = "int64"
description = "specify size for this request, storage will only read limited content data"
```

Example of adding system pair:

```toml
[pairs.force_path_style]
type = "bool"
description = "see http://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html for Amazon S3: Virtual Hosting of Buckets"
```

## Info

`Info` is the returning information from services:

- Storage related info carried in `StorageMeta`
- Object related info carried in `Object`

[go-storage][] provides `GetXxx` and `MustGetXxxx` to support strong typed info:

```go
func (o *Object) GetContentLength() (int64, bool) {}

func (o *Object) MustGetContentLength() int64 {}
```

We have two kind of info:

- `Global Info`: defined in [specs](https://github.com/beyondstorage/specs/blob/master/definitions), could be used in all services.
- `System Info`: defined in `service.toml`, could only be used in current service.

All supported fields are following:

- `type`: corresponding type of this pair.
- `export`: whether this info should be exported.
- `description`: description for this pair, supports multiple lines.

Example of adding global info for storage metadata:

```toml
[name]
type = "string"
export = true
```

Example of adding system pair for object metadata:

```toml
[infos.object.meta.storage-class]
type = "string"
```

## Service

[definitions][] will use `service.toml` to generate service code. The full example of `service.toml` looks like following: The full example of `service.toml` looks like following:

```toml
name = "s3"

[namespace.service.new]
required = ["credential"]

[namespace.service.op.create]
required = ["location"]

[namespace.storage]
implement = ["multiparter"]

[namespace.storage.new]
required = ["location", "name"]

[namespace.storage.op.read]
optional = ["offset", "io_callback", "size"]

[pairs.force_path_style]
type = "bool"
description = "see http://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html for Amazon S3: Virtual Hosting of Buckets"

[infos.object.meta.storage-class]
type = "string"
```

### `name`

```toml
name = "s3"
```

The name of current service, should be unique.

### `namespace`

[go-storage][] has two namespace: `service` and `storage`.

`namespace` COULD implement extra interfaces:

```toml
[namespace.storage]
implement = ["multiparter"]
```

We should also add related `UnimplementedMultiparter` stub into our `Storage` struct.

`namespace` MUST add `new` section to describe how to initiate this namespace:

```toml
[namespace.service.new]
required = ["credential"]
optional = ["endpoint"]
```

This section contains two fields:

- `required`: Required pairs for initialization
- `optional`: Optional pairs for initialization (could have default value)

`namespace` MAY declare pairs for specific operations:

```toml
[namespace.storage.op.read]
optional = ["offset", "io_callback", "size"]
```

This section contains two fields:

- `required`: Required pairs for initialization
- `optional`: Optional pairs for initialization (could have default value)

:::info Operations could have required pairs, all service should support.

For example, `Read` operation has `["size", "offset", "io_callback"]`, all service should support those pairs, or their need to add convert functions:

```go
func (s *Storage) convertWriteStorageClass(v string) (string, bool) {
    return "", true
}
```
:::

### `pairs`

```toml
[pairs.force_path_style]
type = "bool"
description = "see http://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html for Amazon S3: Virtual Hosting of Buckets"
```
System pairs, name should be `snack_case`

### `infos`

```toml
[infos.object.meta.storage-class]
type = "string"
```

System infos, name should be `kebab-case`

[specs]: https://github.com/beyondstorage/specs
[go-storage]: https://github.com/beyondstorage/go-storage
[definitions]: https://github.com/beyondstorage/go-storage/tree/master/cmd/definitions