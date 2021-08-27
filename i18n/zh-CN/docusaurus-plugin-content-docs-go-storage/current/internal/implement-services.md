---
title: Implement Services
---

## Step-by-Step guide

Firstly, click [Use this template](https://github.com/beyondstorage/go-service-example/generate) to generate a new project.

Secondly, change `name` in `service.toml`, also update package names in the same directory.

Thirdly, execute `make build` to generate and build project.

As `make build` succeed, your project has been set up, please read following documents to know more about on how to implement a service.

## Specs

`service.toml` is core of our services: `go-storage` provides a code generator  `definitions` to generate code that based on `service.toml`. We will use this config file to declare our service name, ability and limitations. We will use this config file to declare our service name, ability and limitations.

The simplest config looks like following:

```toml
name = "example"

[namespace.storage]

[namespace.storage.op.list]
optional = ["list_mode"]

[namespace.storage.op.read]
optional = ["offset", "io_callback", "size"]

[namespace.storage.op.write]
optional = ["content_md5", "content_type", "io_callback"]
```

For more information, please refer to [Specs](specs.md)

## Tips

### endpoint

[go-storage][] provides a global pair [Endpoint](../pairs/endpoint.md) to carry endpoint related configuration.

We can add endpoint support in `new` operations:

```toml
[namespace.service.new]
required = ["endpoint"]
```

If our service has a default endpoint, we can set `endpoint` as an optional value. In this way, our service need to set default when user don't pass endpoint. In this way, our service need to set default when user don't pass endpoint.

```toml
[namespace.service.new]
optional = ["endpoint"]
```

If our service only implement `Storager`, we can add endpoint support in storage's `new` operation directly:

```toml
[namespace.storage.new]
required = ["endpoint"]
```

### credential

[go-storage][] provides a global pair [Credential](../pairs/credential.md) to carry credential related configuration.

We can add credential support in `new` operations:

```toml
[namespace.service.new]
required = ["credential"]
```

If our service only implement `Storager`, we can add endpoint support in storage's `new` operation directly:

```toml
[namespace.storage.new]
required = ["credential"]
```

### iowrap

[go-storage][] provides an [iowrap](https://pkg.go.dev/github.com/beyondstorage/go-storage/v4/pkg/iowrap) package. We can use the `CallbackifyReader`, `LimitedReadCloser` and so on directly instead of implementing by ourselves. We can use the `CallbackifyReader`, `LimitedReadCloser` and so on directly instead of implementing by ourselves.

### content md5

[go-storage][] encourage user to calculate the hash by themselves, so we need to disable any kind of auto content md5 check to prevent unintended reader content consumption.

Reference: [S3DisableContentMD5Validation in go-service-s3](https://github.com/beyondstorage/go-service-s3/pull/88#discussion_r631847842)

[go-storage]: https://github.com/beyondstorage/go-storage