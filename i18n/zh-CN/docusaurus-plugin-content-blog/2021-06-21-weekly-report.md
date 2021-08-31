---
title: "2021-24 Weekly Report"
author: "Xuanwo"
author_url: "https://github.com/Xuanwo"
tags:
  - updates
  - weekly-report
---

Hello every one, here is the weekly report for [BeyondStorage](https://beyondstorage.io), which ranges from 2021-06-15 to 2021-06-18.

<!--truncate-->

## New Proposals

This week, we have the following proposal updates.

### Re-support Initialization Via Connection String

[GSP-90](https://github.com/beyondstorage/specs/pull/90) intends to add support for connection strings which allow user to `NewStorager` like:

- `s3://bucket_name/prefix?credential=hmac:xxxx:xxxx&endpoint=http://s3.us-east-2.amazonaws.com`
- `fs:///tmp`

This week we made huge progress and finally approved this GSP. This week we made huge progress and finally approved this GSP. The implementations could be tracked at [Tracking issue for GSP-90: Re-support Initialization Via Connection String](https://github.com/beyondstorage/go-storage/issues/600).

### Add Restrictions In Storage Metadata

[GSP-97](https://github.com/beyondstorage/specs/pull/97) intends to add restrictions in storage metadata. In this GSP, [@JinnyYi][] proposes to refactor `StorageMeta` like we do on `Object`: In this GSP, [@JinnyYi][] proposes to refactor `StorageMeta` like we do on `Object`:

```go
type StorageMeta struct {
   location               string
   Name                   string
   WorkDir                string
   copySizeMaximum        int64
   fetchSizeMaximum       int64
   moveSizeMaximum        int64
   writeSizeMaximum       int64
   appendNumberMaximum    int64
   appendSizeMaximum      int64
   appendTotalSizeMaximum int64
   multipartNumberMaximum int64
   multipartSizeMaximum   int64
   multipartSizeMinimum   int64

   // bit used as a bitmap for object value, 0 means not set, 1 means set 
   bit uint64
   m   map[string]interface{}
}
```

So users can get the storage's restrictions before really call the API.

This week we approved and merged this GSP. This week we approved and merged this GSP. The implementations could be tracked at [Tracking issue for GSP-97: Add Restrictions In Storage Metadata](https://github.com/beyondstorage/go-storage/issues/599).

### Add System Metadata In Storage Metadata

[GSP-111](https://github.com/beyondstorage/specs/pull/111) is still under discussion.

We are facing the problem of naming, as discussed in [this review](https://github.com/beyondstorage/specs/pull/111#pullrequestreview-687066390). We start a new issue [Idea: Find a new word to represent Service](https://github.com/beyondstorage/specs/issues/114) to resolve this problem. We start a new issue [Idea: Find a new word to represent Service](https://github.com/beyondstorage/specs/issues/114) to resolve this problem.

## New Ideas

This week we camp up following new ideas.

### Feature gates are confusing

[GSP-87](https://github.com/beyondstorage/specs/pull/87) introduces a new concept about `Features`, but this concept is not clear enough which makes it hard to implement.

We tried to resolve this problem in issue [Feature gates are confusing](https://github.com/beyondstorage/specs/issues/107).

### Add support for PostObject

[Add support for PostObject](https://github.com/beyondstorage/specs/issues/108) is used for tracking new ideas about `PostObject` support.

### Update RFC format

[@xxchan][] found current RFC's format is hard to maintain, so he came up a new idea to [update rfc format](https://github.com/beyondstorage/specs/issues/110). We will get this into the proposal process sooner or later. We will get this into the proposal process sooner or later.

## New Articles

[@xxchan][] start a new post [Go-storage Source Code Reading: Code Generation](https://forum.beyondstorage.io/t/go-storage-source-code-reading-code-generation/109) to discuss the code generation logic in go-storage.

[@JinnyYi][] added new internal post [Object Lazy Stat](https://beyondstorage.io/docs/go-storage/internal/object-lazy-stat) in which talk about our object lazy stat logic.

---

[@xxchan]: https://github.com/xxchan
[@JinnyYi]: https://github.com/JinnyYi
