---
title: "2021-21 Weekly Report"
author: "JinnyYi"
author_url: "https://github.com/JinnyYi"
tags:
  - updates
  - weekly-report
---

Hello everyone, here is the weekly report for [BeyondStorage](https://beyondstorage.io), range from 2021-05-24 to 2021-05-28.

<!--truncate-->

## 应用

### dm

#### Add identity management APIs

As we mentioned in [last week's report](https://beyondstorage.io/blog/2021/05/21/weekly-report), [@Prnyself][] proposed [DMP-69: Add identity management APIs](https://github.com/beyondstorage/dm/pull/69) to add identity management APIs and the `credential` information can be reused by resolving the `identity`. This week [@Prnyself][] implemented it. You can refer to [Implement DMP-69 Add identity management APIs](https://github.com/beyondstorage/dm/issues/66) for more details.

#### Add list staffs API

When creating a task, we should choose on which staff the task run. For now, we have already inserted staffID into DB, so we should support an listStaffs API for frontend to list all available staffs.

[@Prnyself][] made the proposal [DMP-71: Add list staffs API](https://github.com/beyondstorage/dm/blob/staff-api-spec/docs/specs/71-add-list-staffs-api.md) to design the list staff API to be called by the front-end, whose definition is as follows:

```graphql
type Query {
    staffs: [Staff!]!
}
type Staff {
    id: String!
}
```

In this way, when `createTask` is called, the `staffID` could be filled by the result of `listStaffs`.

For more details, please refer to [Add support for staff management](https://github.com/beyondstorage/dm/issues/67).

## 库

### Add CreateLink Operation

We have `ModeLink` for Object which means this Object is a link which targets to another Object. A link object could be returned in `Stat` or `List`. But there is no way to create a link object.

Link related support is very different in different services, so [@Xuanwo][] proposed [GSP-86: Add CreateLink Operation](https://github.com/beyondstorage/specs/pull/86) to add a new `CreateLink` operation.

To ensure it doesn't conflict with 'PairPolicy', [@Xuanwo][] proposed [GSP-87: Feature Gates][] described as the following section.

Keep your eyes on the proposal as it is still in production.

### Feature Gates

Behavior consistence is the most important thing for [go-storage][]. However, we do have different capabilities and limitations in storage services.

Our goals are:
- Behavior consistent by default (invalid operations should be return error)
- Give user abilities to loose the restriction
- Allow user to enable the features they want

Even though we have introduced `loose mode` and `PairPolicy`, they don't solve the problem.

So [@Xuanwo][] proposed [GSP-87: Feature Gates][] to treat loose behavior consistence as a feature, and introduce feature gates in [go-storage][].

#### New Feature: Loose Operation

By default, [go-storage][] will return errors for not supported pairs. If loose operation feature has been enabled, [go-storage][] will ignore those errors.

To enable loose operation, users need to add pairs like:

```go
s3.WithStorageFeatures(s3.StorageFeatures{
    LooseOpeartionAll: true,
    LooseOperationWrite: true,
})
```

#### New Feature: Virtual Operation

```go
s3.WithStorageFeatures(s3.StorageFeatures{
    VirtualOperationAll: true,
})
```

#### Feature Struct

[go-storage][] will generate feature structs for all services.

```go
type StorageFeatures struct {
    LooseOpeartionAll bool
    LooseOperationWrite bool

    VirtualOperationAll bool
    VirtualOperationCreateDir bool
}
```

This proposal is now still implementing, for more details, please refer to [Implement GSP-87 Feature Gates](https://github.com/beyondstorage/specs/pull/87/#issuecomment-850280374).

### go-storage

We migrated library projects to `beyondstorage` this week and released [go-storage][] v4.0.0.

## 社区

### 开源软件供应链点亮计划 - 暑期2021

[Summer 2021 of Open Source Promotion Plan](https://forum.beyondstorage.io/t/summer-2021-of-open-source-promotion-plan/22) has started. This week we entered the student application period and received some applications: <https://forum.beyondstorage.io/t/ospp-2021-application-aggregation/56>. Welcome to join us!

You are welcome to keep an eye on our forum: <https://forum.beyondstorage.io>.

For more details, please refer to <https://beyondstorage.io/community/events/ospp-summer-2021>.

---

[@Prnyself]: https://github.com/Prnyself

[@Xuanwo]: https://github.com/Xuanwo

[GSP-87: Feature Gates]: https://github.com/beyondstorage/specs/pull/87

[go-storage]: https://github.com/beyondstorage/go-storage