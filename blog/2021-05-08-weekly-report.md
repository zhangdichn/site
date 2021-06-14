---
title: "2021-18 Weekly Report"
author: "Prnyself"
author_url: "https://github.com/Prnyself"
tags: [updates, weekly-report]
---

Hello everyone, here is the weekly report for [BeyondStorage](https://beyondstorage.io), range from 2021-05-06 to 2021-05-08.

Due to the [International Workers' Day](https://en.wikipedia.org/wiki/International_Workers%27_Day), we only have three
workdays this week. However, we still made lots of effort and managed to get some results.

<!--truncate-->

## Library

### Appender Support

`Appender` is used to append content to the tail of file.

This week, [@JinnyYi] finished implement appender support
in [Implement Appender Support](https://github.com/beyondstorage/go-storage/issues/529). Great work!

### Idempotent Storager Delete Operation

We use `Delete` to handle all object delete operations, but their behavior is not unified and well-defined.

So [@Xuanwo] made a
proposal: [GSP-46: Idempotent Storager Delete Operation](https://github.com/beyondstorage/specs/blob/master/rfcs/46-idempotent-delete.md)
for this, and [@JinnyYi] is now leading the implementation.

For more details, please refer
to [Implement GSP-46: Idempotent Storager Delete Operation](https://github.com/beyondstorage/go-storage/issues/554).

### Additional Error Specification

In this week, [@xxchan] has finished his first
proposal: [GSP-47: Additional Error Specification](https://github.com/beyondstorage/specs/blob/master/rfcs/47-additional-error-specification.md)
in our team! Congratulations!

After a study of our existing implementations in different services, [@xxchan] did a great job for this proposal, which
is designed to offer users unified experience when handle errors with [go-storage].

For more details, please refer
to [Implement GSP-47: Additional Error Specification](https://github.com/beyondstorage/go-storage/issues/558).

### Service Registry Support

For now, every service implement the function like:

```go
func New(pairs ...typ.Pair) (typ.Servicer, typ.Storager, error) {}
func NewServicer(ps ...types.Pair) (types.Servicer, error) {}
func NewStorager(ps ...types.Pair) (types.Storager, error) {}
```

Users need to handle types by themselves.

So [@Xuanwo] made a
proposal: [GSP-48: Service Registry](https://github.com/beyondstorage/specs/blob/master/rfcs/48-service-registry.md)
to refactor the functions which make it easier to init a `Storager`.

The proposal is still a draft and not implemented yet.

### Add CreateDir Operation

Applications need the ability to create a directory, and for now we did not offer a unified way to handle this.

So [@Xuanwo] made a
proposal: [GSP-49: Add CreateDir Operation](https://github.com/beyondstorage/specs/blob/master/rfcs/49-add-create-dir-operation.md)
to allow user create a directory in the same way.

The [`Direr` interface](https://github.com/beyondstorage/go-storage/blob/master/types/operation.generated.go#L166) has been
added in [go-storage], and more implementations in different services is now **help wanted**. You are welcome to make
your own PR for this.

For more details, please refer
to [Implement GSP-49 Add CreateDir Operation](https://github.com/beyondstorage/go-storage/issues/560).

## Community

### Summer 2021 of Open Source Promotion Plan

So far, over 30 students have shown their interest in our projects. You are welcome to keep an eye on our
forum: <https://forum.beyondstorage.io/>, where all event-related announcements will be posted.

For more details, please refer to <https://beyondstorage.io/community/events/ospp-summer-2021>.

---

[go-storage]: https://github.com/beyondstorage/go-storage

[go-integration-test]: https://github.com/beyondstorage/go-integration-test

[@JinnyYi]: https://github.com/JinnyYi

[@Xuanwo]: https://github.com/Xuanwo

[@xxchan]: https://github.com/xxchan