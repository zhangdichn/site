---
title: Object Lazy Stat
---

## 介绍

We use `types.NewObject(client, done)` to create a new object with client in services.

```go
func NewObject(client Storager, done bool) *Object
```

**Parameters**

client - the client in which `Object` is alive.

done - marks whether `stat` for the object has been performed. `true` indicates `stat` has been performed, we don't need to `stat` for this object anymore.

**Return**

An `Object` pointer points to the object carries all object metadata.

`Object` carries all the object metadata, including the client in which the object alive, global metadata for object, service defined metadata, user defined metadata. And it supports `get/set` functions. Also, all the metadata could be got by `stat` internal.

## Lazy Stat Strategy

`Lazy Stat` strategy is to avoid `stat` too many times. It's used to fetch data from the remote when required and no matter `stat` success or not, it will be executed exactly once.

Refer to sync.Once, variable `done` is introduced to mark the execution state of `stat`. `sync.Mutex` and `sync.atomic` are used to ensure read `done` in a thread-safe way.

To get a certain object metadata from an `Object` instance, `stat` belongs to `Object` will be called first. `stat` calls the function `Stat` belongs to the `client` in `Object` if the `stat` is being called for the first time for this instance of `Object`. In other words, given var `object Object`, if `object.stat()` is called multiple times, only the first call will invoke `object.client.Stat()`.

## Instructions

We should set `done` to `true` if all the metadata is known or there's no more knowable metadata when calling `types.NewObject(s, done)`. Otherwise, `done` should be set `false`, so that `stat` will be called while get a certain object metadata.

**示例**

- For `Create`:
  - To create a normal object without any api call, we should call `types.NewObject(client, false)` to allow the user to fetch data from the remote as only path and object mode are known to us when creating the object.
  - To create a multipart object, we should call `types.NewObject(client, true)` as there's no more information for the object except the path, object mode and multipartId.
- For `CreateDir`:
  - For the native supported services like `dropbox`, only path and object mode are known if `mkdir` success, so we should call `types.NewObject(client, false)` to get the new object.
  - For object storage services like `s3`, we could add `/` at the end of the path to simulate directory and get the object metadata from the output of `PutObject`, so we should call `types.NewObject(client, true)` to create the new object.