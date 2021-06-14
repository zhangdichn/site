---
title: "2021-23 Weekly Report"
author: "Prnyself"
author_url: "https://github.com/Prnyself"
tags: [updates, weekly-report]
---

Hello everyone, here is the weekly report for [BeyondStorage](https://beyondstorage.io), range from 2021-06-07 to 2021-06-11.

<!--truncate-->

## Application

### New UI Design

This week we have finalised the new UI design, including the main colours and page styles. 

Thanks for our designer, check the [draft](https://www.figma.com/file/xSri76AIgzMUA3Gxs11GO0/Data-Migration-UI-Design?node-id=4%3A180)
and feel free to express your idea or advice.   

## Library

### Go-storage v4.1.0 Released

The new version v4.1.0 of [go-storage] was [released](https://github.com/beyondstorage/go-storage/releases/tag/v4.1.0) at 2021-06-08, in which we:
```
Added:
    cmd/definitions: Implement GSP-87 Feature Gates (#586)
    cmd/definitions: Implement GSP-93 Add ObjectMode Pair (#592)
Fixed:
    cmd/definitions: Fix storage features not generated (#588)
```

For more, we introduced our project to developers at this Wednesday, here is [the slides](https://docs.google.com/presentation/d/13Wm4d4OqO0WJ9Y0ZZ7NsjvfLqDilSkGX94qc1e7w87k/edit#slide=id.p).

### Add ObjectMode Pair

We have introduced `ObjectMode` in [GSP-25: Object Mode](https://github.com/beyondstorage/specs/blob/master/rfcs/25-object-mode.md):

```go
type ObjectMode uint32

const (
    ModeIrregular ObjectMode = 0
    ModeDir ObjectMode = 1 << iota
    ModeRead
    ModeLink
)
```

But it's not enough, we need `ObjectMode` pair too. For example, the `Create` operation needs `ObjectMode` to create a new object. 
And `ObjectMode` COULD be used as input restriction for operations. 

For example:
In services like s3 which doesn't have native `CreateDir` support, we usually simulated it via creating an object that ends with `/`. But the behavior doesn't work in `Stat` and `Delete`.

  - If user call `Stat("test")` after `CreateDir("test")`, he will get `ObjectNotExist` error.
  - If user call `Delete("test")` after `CreateDir("test")`, no object will be removed and `test/` will be kept in service.

So [@xuanwo] made this proposal:
[GSP-93: Add ObjectMode Pair](https://github.com/beyondstorage/specs/blob/master/rfcs/93-add-object-mode-pair.md) to add the `ObjectMode` pair, 
and this pair COULD be used in the following operations:

  - `Create`: set the output object's `ObjectMode`
  - `Stat`: ObjectMode hint, returns error if `ObjectMode` not meet.
  - `Delete`: ObjectMode hint

For `Stat` and `Delete`

  - Service SHOULD use the `ObjectMode` pair as a hint.
  - Service could have different implementations for different `ObjectMode`.

Take `s3` as an example, we simulate `CreateDir` via creating object ends with `/`. `CreateDir("test")` will create an object `test/` in s3. And we can

  - stat this object via `Stat("test", pairs.WithObjectMode(types.ObjectModeDir))`
  - delete this object via `Delete("test", pairs.WithObjectMode(types.ObjectModeDir))`

For more details, please refer
to [Implement GSP-93: Add ObjectMode Pair](https://github.com/beyondstorage/go-storage/issues/591).

### Add Maximum File Size for Storage Write

Depending on the size of the data you are uploading, services offer different options, 
like upload a file in a single operation, in parts, or through append operation.

We use `Write` to handle single write operation, and the size is not unlimited.

  - S3 alike storage services have 5GB limit for a single PUT operation.
  - azblob limited to 5000 MiB(<https://docs.microsoft.com/en-us/rest/api/storageservices/put-blob>).

If we upload a file with size out of limit in a single operation, we will get an error like `Request Entity Too Large` in azblob. Same with `copy`,`fetch`, etc.

We should figure out the error before sending request to reduce the consumption of network resources.

So [@JinnyYi] made this proposal [GSP-97: Add Maximum File Size for Storage Write](https://github.com/beyondstorage/specs/pull/97)
to add maximum size restriction as service related metadata for storage operations.

This proposal is still a draft, and any comments are welcome.

## Community

### Summer 2021 of Open Source Promotion Plan

This week, we got more new hands join in, and the discussion group is getting more and more active.
You are welcome to keep an eye on our forum: <https://forum.beyondstorage.io/>, where all event-related announcements will be posted.

For convenience, [@xxchan] added [Q&A](https://beyondstorage.io/community/events/ospp-summer-2021#qa) at community's website.
You can also add more questions at [OSPP 2021 Q&A collection](https://forum.beyondstorage.io/t/ospp-2021-q-a-collection/86).

**Notice**: The deadline for registration for the program is 13th June. Please submit your application asap. 

For more details, please refer to <https://beyondstorage.io/community/events/ospp-summer-2021>.

---

[go-storage]: https://github.com/beyondstorage/go-storage

[@JinnyYi]: https://github.com/JinnyYi

[@Prnyself]: https://github.com/Prnyself

[@Xuanwo]: https://github.com/Xuanwo

[@xxchan]: https://github.com/xxchan