---
title: "2021-20 Weekly Report"
author: "Prnyself"
author_url: "https://github.com/Prnyself"
tags: [updates, weekly-report]
---

Hello everyone, here is the weekly report for [BeyondStorage], range from 2021-05-17 to 2021-05-21.

<!--truncate-->

## Application

### dm

In order to make it easier for users to use the service without having to manually enter authentication
information (e.g. ak, sk, hmac, etc.) and service endpoint information each time, 
we have added identity management-related functionality to 
the [prototype](https://www.figma.com/file/tZBW1fMDLlcdFpaHJYih9B/Data-Migration-Prototype?node-id=1191%3A5).
The identity information needs to be stored persistently and can be reused when adding tasks at the `server`.

So [@Prnyself] made a proposal [DMP-69: Add identity management APIs](https://github.com/beyondstorage/dm/pull/69),
to add identity management APIs, and the `credential` information can be reused by resolving the `identity`.

This proposal is now still implementing, for more details, please refer to 
[DMP-69: Add identity management APIs](https://github.com/beyondstorage/dm/pull/69). 

## Library

### Organization Rename

Yeah, you may notice that we have renamed our organization from AOS, because it’s hard to explain
to users or developers what Application Oriented Storage really means.

So after a discussion, we renamed our organization into `BeyondStorage`, which indicates our abstraction is
`beyond the existing storage services`.

[@JinnyYi] is now implementing changing links and module names in our projects, and you are welcome to make your PR to help us,
please take [GSP-73: Organization Rename](https://github.com/beyondstorage/specs/pull/73/) as a guidance.

[@bokket] is also helping add more information  

For more details, please refer
to [Organization Name Changing Proposal](https://forum.beyondstorage.io/t/organization-name-changing-proposal/38).

### Local Function Metadata

`Metadata` is a function to retrieve Storage's Metadata:

```go
Metadata(pairs ...Pair) (meta *StorageMeta, err error)
MetadataWithContext(ctx context.Context, pairs ...Pair) (meta *StorageMeta)
```

However, we will not send API/RPC call in this function, a.k.a., this function never returns errors. 
Our user still need to check them:

```go
meta, err := s.Metadata()
if err != nil {
	return err
}
```

So [@xuanwo] made this proposal [GSP-76: Local Function Metadata](https://github.com/beyondstorage/specs/pull/76/) to 
make `Metadata` a local function which will not need a `Context` param and not return an error.

For more details, please refer
to [Implement GSP-76 Local Function Metadata](https://github.com/beyondstorage/go-storage/issues/579).

### Multipart upload part number check in go-service-qingstor

As we mentioned in [last week's report](/blog/2021/05/14/weekly-report#multipart-upload-part-number-check-in-go-service-qingstor),
[@xiongjiwei] made his first PR 
[storage: Check if part number is valid when multipart upload](https://github.com/beyondstorage/go-service-qingstor/pull/48),
which is formally merged this week. Thanks for [@xiongjiwei]'s contribution!

## Community

### Summer 2021 of Open Source Promotion Plan

This week, we added two more projects:

- [Google Drive for go-storage](https://github.com/beyondstorage/go-service-gdrive)
  - Mentor: [@xuanwo]
  - Issue: <https://github.com/beyondstorage/go-service-gdrive/issues/2>
- [OneDrive for go-storage](https://github.com/beyondstorage/go-service-onedrive)
  - Mentor: [@xxchan]
  - Issue: <https://github.com/beyondstorage/go-service-onedrive/issues/2>

You are welcome to keep an eye on our forum: <https://forum.beyondstorage.io>, where all event-related announcements will be posted.

For more details, please refer to <https://beyondstorage.io/community/events/ospp-summer-2021>.

---

[BeyondStorage]: https://beyondstorage.io

[@bokket]: https://github.com/bokket

[@JinnyYi]: https://github.com/JinnyYi

[@Prnyself]: https://github.com/Prnyself

[@xiongjiwei]: https://github.com/xiongjiwei

[@Xuanwo]: https://github.com/Xuanwo

[@xxchan]: https://github.com/xxchan