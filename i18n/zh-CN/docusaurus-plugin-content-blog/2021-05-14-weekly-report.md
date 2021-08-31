---
title: "2021-19 Weekly Report"
author: "Prnyself"
author_url: "https://github.com/Prnyself"
tags:
  - updates
  - weekly-report
---

Hello everyone, here is the weekly report for [BeyondStorage](https://beyondstorage.io), range from 2021-05-10 to 2021-05-14.

<!--truncate-->

## 库

### Path Style Support for go-service-qingstor

`vhost` and `path` style are two different endpoint styles which are defined in [QingStor](https://docs.qingcloud.com/qingstor/#%E5%8C%BA%E5%9F%9F%E5%8F%8A%E8%AE%BF%E9%97%AE%E5%9F%9F%E5%90%8D):

- Virtual-host Style: `http://<bucket-name>.<zone-id>.qingstor.com/<object-name>`
- Path Style: `http://<zone-id>.qingstor.com/<bucket-name>/<object-name>`

For some reason, dns is not available for vhost, so we need to use path style to detect bucket location.

[@bokket][] made his first commit to solve this by [Use path style instead of vhost](https://github.com/beyondstorage/go-service-qingstor/pull/43) and [service: Fix location not detected correctly](https://github.com/beyondstorage/go-service-qingstor/pull/45). Great job! Great job!

For more details, please refer to [QingStor detect use path style instead of vhost](https://github.com/beyondstorage/go-service-qingstor/issues/1).

### Idempotent Storager Delete Operation

We use `Delete` to handle all object delete operations, but their behavior is not unified and well-defined.

After [@Xuanwo][] made this proposal: [GSP-46: Idempotent Storager Delete Operation](https://github.com/beyondstorage/specs/blob/master/rfcs/46-idempotent-delete.md), [@JinnyYi][] is now finished all the implementation in different services except `USS`, which can not pass our integration tests, because `USS` requires a short interval between PUT and DELETE, or we will get this error: `DELETE 429 {"msg":"concurrent put or delete","code":42900007,"id":"xxx"}`.

For more details, please refer to [Implement GSP-46: Idempotent Storager Delete Operation](https://github.com/beyondstorage/go-storage/issues/554).

### BeyondStorage Error Handling

[@xxchan][] has designed the new error handling proposal: [GSP-47: Additional Error Specification](https://github.com/beyondstorage/specs/blob/master/rfcs/47-additional-error-specification.md) last week.

In this week, to distinguish our errors more convenient, [@xxchan][] also made the proposal: [GSP-51: Distinguish Errors by IsAosError](https://github.com/beyondstorage/specs/pull/51), which introduces the interface `AosError`:

```go
type AosError interface {
    // IsAosError SHOULD and SHOULD ONLY be implemented by error definitions in go-storage & go-service-*.
    // We depends on the AosError interface to distinguish our errors.
    // There's no need for user code to implement or use this function and interface.
    IsAosError()
}
    // We depends on the AosError interface to distinguish our errors.
    // There's no need for user code to implement or use this function and interface.
    IsAosError()
}
```

For now, he has finished the implementation for both proposals above in different services, and the [Error Handling Doc](/docs/go-storage/handling-errors) is also added for reference. Nicely done! Nicely done!

For more details, please refer to [Implement GSP-47: Additional Error Specification](https://github.com/beyondstorage/go-storage/issues/558).

### Add object mode check for operations

In [GSP-25](https://github.com/beyondstorage/specs/blob/master/rfcs/25-object-mode.md), we added support for object modes by bit map. All available object modes are listed below: All available object modes are listed below:

```go
type ObjectMode uint32
// All available object mode
const (
    // ModeDir means this Object represents a dir which can be used to list with dir mode.
    ModeDir ObjectMode = 1 << iota
    // ModeRead means this Object can be used to read content.
    ModeRead
    // ModeLink means this Object is a link which targets to another Object.
    ModeLink
    // ModePart means this Object is a Multipart Object which can be used for multipart operations.
    ModePart
    // ModeBlock means this Object is a Block Object which can be used for block operations.
    ModeBlock
    // ModePage means this Object is a Page Object which can be used for random write with offset.
    ModePage
    // ModeAppend means this Object is a Append Object which can be used for append.
    ModeAppend
)
    ModeDir ObjectMode = 1 << iota
    // ModeRead means this Object can be used to read content.
    ModeRead
    // ModeLink means this Object is a link which targets to another Object.
    ModeLink
    // ModePart means this Object is a Multipart Object which can be used for multipart operations.
    ModePart
    // ModeBlock means this Object is a Block Object which can be used for block operations.
    ModeBlock
    // ModePage means this Object is a Page Object which can be used for random write with offset.
    ModePage
    // ModeAppend means this Object is a Append Object which can be used for append.
    ModeAppend
)
```

It is intended to check object mode at the start of specific operation. It is intended to check object mode at the start of specific operation. For instance, both `WritePart` and `WriteAppend` got a pointer to `Object` as an input, we need to ensure this `Object` is available for certain operation, so we should add object mode check and return `ObjectModeInvalidError`(introduced in [GSP-47](https://github.com/beyondstorage/specs/blob/master/rfcs/47-additional-error-specification.md)) asap if `Object` not fit.

So [@Prnyself][] made a proposal: [GSP-61: Add object mode check for operations](https://github.com/beyondstorage/specs/blob/master/rfcs/61-add-object-mode-check-for-operations.md) to generate mode check, instead of user implementation in specific actions. All the implementation for different services are finished now. All the implementation for different services are finished now.

For more details, please refer to [Implement GSP-61 Add object mode check for operations](https://github.com/beyondstorage/go-storage/issues/557).

### WriteMultipart returns Part

`Multiparter` is designed for multipart upload. Multipart upload is a three-step process: Multipart upload is a three-step process:

- `CreateMultipart` is used to initiate the upload.
- `WriteMultipart` is used to upload the object parts. `WriteMultipart` is used to upload the object parts. And `ListMultipart` could be used to list all of your in-progress multipart uploads or get a list of the parts that you have uploaded for a specific multipart upload.
- `CompleteMultipart` is used to complete the multipart upload after you have uploaded all the parts.

`CompleteMultipart` request must include the upload ID and a list of both part numbers and corresponding ETag values returned after those parts were uploaded in some services. The ETag uniquely identifies the combined object data, not necessarily an MD5 hash of the object data. We need return ETag that we got from services to make it possible. The ETag uniquely identifies the combined object data, not necessarily an MD5 hash of the object data. We need return ETag that we got from services to make it possible.

So [@JinnyYi][] made a proposal: [GSP-62: WriteMultipart Returns Part](https://github.com/beyondstorage/specs/blob/master/rfcs/62-writemultipart-returns-part.md), which introduced a **break change**: return `*Part` in `WriteMultipart`, which should be held and passed into `CompleteMultipart` as a param.

This proposal's implementation has been finished by [@JinnyYi][] in services implemented `Multiparter`, and the [go-integration-tests](https://github.com/beyondstorage/go-integration-test) and [multiparter docs](/docs/go-storage/operations/multiparter/index) are also updated. Good Job! Good Job!

For more details, please refer to [Implement GSP-62: WriteMultipart returns Part](https://github.com/beyondstorage/go-storage/issues/571).

### Multipart upload part number check in go-service-qingstor

This week, we have a new contributor [@xiongjiwei][], who made his first PR in `go-service-qingstor`: [storage: Check if part number is valid when multipart upload](https://github.com/beyondstorage/go-service-qingstor/pull/48).

This PR is still a draft now, and working in progress. Anyway, let's welcome [@xiongjiwei][] !

## 社区

### Cooperation activities

- Azure Blob Storage integration <https://github.com/benbjohnson/litestream/issues/134>
- proposal: Integrate mediaapi with go-storage to allow store files on various storage service <https://github.com/matrix-org/dendrite/issues/1857>
- Integrate with go-storage to allow using various storage service as storing location <https://github.com/filecoin-project/lotus/discussions/6218>
- Working with dropbox to fix their SDK
  - issue: [Is there any plan to release a new version?](https://github.com/dropbox/dropbox-sdk-go-unofficial/issues/77)
  - Fixed, and [sdk v6.0.1](https://github.com/dropbox/dropbox-sdk-go-unofficial/releases/tag/v6.0.1) was released

### 开源软件供应链点亮计划 - 暑期2021

This week, we got more new hands join in, and the discussion group is getting more and more active. This week, we got more new hands join in, and the discussion group is getting more and more active. You are welcome to keep an eye on our forum: <https://forum.beyondstorage.io/>, where all event-related announcements will be posted.

For more details, please refer to <https://beyondstorage.io/community/events/ospp-summer-2021>.

---

[@bokket]: https://github.com/bokket

[@JinnyYi]: https://github.com/JinnyYi

[@Prnyself]: https://github.com/Prnyself

[@xiongjiwei]: https://github.com/xiongjiwei

[@Xuanwo]: https://github.com/Xuanwo

[@xxchan]: https://github.com/xxchan