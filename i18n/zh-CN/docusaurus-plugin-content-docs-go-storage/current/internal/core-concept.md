---
title: Core Concept
---

`go-storage` is built upon the abstraction like the following:

```plain
                           +-------------+
                           |   Service   |
                           +------+------+
                                  |
               +------------------+------------------+
               |                  |                  |
        +------v------+    +------v------+    +------v------+
        |   Storage   |    |   Storage   |    |   Storage   |
        +-------------+    +------+------+    +-------------+
                                  |
      +-------------+-------------+-------------+-------------+
      |             |             |             |             |
+-----v----+  +-----v----+  +-----v----+  +-----v----+  +-----v----+
|  Object  |  |  Object  |  |  Object  |  |  Object  |  |  Object  |
+----------+  +----------+  +----------+  +----------+  +----------+
```

## Service

[`Servicer`](../operations/servicer/index.md) is the interface used to maintain the storages.

## Storage

[`Storager`](../operations/storager/index.md) is the interface used to maintain the objects.

## Object

`Object` represents an Object under `Storage`.

The Object could have different modes:

- `ModeRead`: Object with `ModeRead` can be read from.
- `ModeDir`: Object with `ModeDir` will be treated as a directory.
- `ModeAppend`: Object with `ModeAppend` can be used to append data.
- ...

And the object could carry metadata like `size`, `path`, `content_type` and so on. We will discuss them in section [Object Metadata](#object-metadata). We will discuss them in section [Object Metadata](#object-metadata).

## Operation

`Operation` represents an action that we could take for a service or storage, it's the public APIs we exposed to users.

## Pair

`Pair` is the argument we used in our `Operation`.

We have two types of pair:

- Global: The global shared pairs, defined in [pairs.toml](https://github.com/beyondstorage/specs/blob/master/definitions/pairs.toml).
- System:  The system pair that only valid inside service, defined in `service.toml`.

## Info

`Info` represents information that we could retrieve from service, storage, or objects.

For now, we support the following type of information.

### Storage Metadata

`Storage Metadata` is the metadata that we can retrieve from storage, for example, `work_dir`, `location`, `name`, and so on.

We have two types of storage metadata:

- Global: The global shared storage metadata, defined in [info_storage_meta.toml](https://github.com/beyondstorage/specs/blob/master/definitions/info_storage_meta.toml).
- System: The system metadata that only valid inside service, defined in `service.toml`.

### Object Metadata

`Object Metadata` is the metadata that we can retrieve from an object, for example, `size`, `last_modified`, `storage_class`, and so on.

We have three types of storage metadata:

- Global: The global shared object metadata, defined in [info_object_meta.toml](https://github.com/beyondstorage/specs/blob/master/definitions/info_object_meta.toml).
- System: The system metadata that only valid inside the current service, defined in `service.toml`.
- User: The user metadata that is defined by users, we store them in a `map[string]string` without any modification.
