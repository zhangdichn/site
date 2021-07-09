---
title: "2021-27 Weekly Report"
author: "Prnyself"
author_url: "https://github.com/Prnyself"
tags: [updates, weekly-report]
---

Hello everyone, here is the weekly report for [BeyondStorage], range from 2021-07-05 to 2021-07-09.

<!--truncate-->

## Application

### BeyondTeleport

Several days ago, we submitted an issue on [rename the project dm](https://github.com/beyondstorage/beyond-tp/issues/97).
[@Xuanwo] proposed a name list, including:

- byteport
- bytesync
- beyond data migration
- beyond migration

After a discussion, finally we choose to use `BeyondTP`:

- project name: `beyond-tp`
- normal name: `BeyondTP`
- complete name: `BeyondTeleport`

The implementation has already been finished by [Rename dm into beyondtp](https://github.com/beyondstorage/beyond-tp/pull/116),
and for more details, please refer to <https://github.com/beyondstorage/beyond-tp/issues/97>.

## Proposal Updates

This week, we have the following proposal updates.

### DMP-110: Refactor Task Distribute

For now, we use for-loop to monitor task submitting, and then distribute the task into staffs. We need an elegant way to monitor task submitting.

So [@Prnyself] proposed [DMP-110](https://github.com/beyondstorage/dm/pull/110) to refactor the process of task distribution in [beyond-tp].

This proposal is still unimplemented, any opinions or ideas are welcome.

### Implement GSP-127: Add ServiceInternal and RequestThrottled Errors

[GSP-127](https://github.com/beyondstorage/go-storage/blob/master/docs/rfcs/127-add-serviceinternel-and-requestthrottled-errors.md)
intends to add two global error codes, `ErrServiceInternal` and `ErrRequestThrottled`, 
so that users can retry only them instead of all errors in HTTP-based services.

Now it is implemented by [@junaire] by [services: Implement GSP-127: Add ServiceInternal and RequestThrottled Errors](https://github.com/beyondstorage/go-storage/pull/616).

For more details, please refer to [Tracking Issue for GSP-127: Add ServiceInternel and RequestThrottled Errors](https://github.com/beyondstorage/go-storage/issues/612).

### GSP-134: Write Behavior Consistency

[GSP-134](https://github.com/beyondstorage/go-storage/blob/master/docs/rfcs/134-write-behavior-consistency.md)
intends to keep write related operations' behavior consistency, by declare:

- All write operations SHOULD NOT return an error as the object exists.
- All successful write operations SHOULD be complete

This proposal is still in developing, for more details, please refer to [Tracking issue for GSP-134: Write Behavior Consistency](https://github.com/beyondstorage/go-storage/issues/624).

### GSP-139: Split Specs

[GSP-139](https://github.com/beyondstorage/go-storage/blob/master/docs/rfcs/139-split-specs.md)
intends to split [specs](https://github.com/beyondstorage/specs) into different repos, to fit the new model of community permission.

It has now been implemented by [cmd: Move definitions here as described in GSP-139](https://github.com/beyondstorage/go-storage/pull/652) and 
[docs: Move rfcs and spec here as required in GSP-139](https://github.com/beyondstorage/go-storage/pull/628).

For more details, please refer to [Tracking issue for GSP-139: Split Specs](https://github.com/beyondstorage/go-storage/issues/627).

## Library

### Deprecated Fields and Packages

With the updating of [go-storage], some fields and packages are marked **deprecated** in last several versions.

After a few updating, we decided to remove them, which has already been implemented by [@JinnyYi].

For more details, please refer to [Remove deprecated fields](https://github.com/beyondstorage/go-storage/pull/619) 
and [Remove deprecated package pkg/endpoint](https://github.com/beyondstorage/go-storage/pull/621).

### New Repo: setup-hdfs

To make test in GitHub action more convenient, [@Xuanwo] created this new repo: [setup-hdfs](https://github.com/beyondstorage/setup-hdfs).

You can easily set up Apache Hadoop/HDFS in GitHub Action workflows by introducing this, like:

```yaml
steps:
  - uses: actions/setup-python@v2
    with:
      python-version: '3.8'
  - uses: actions/setup-java@v1
    with:
      java-version: '11'

  - uses: beyondstorage/setup-hdfs@master
    with:
      hdfs-version: '3.3.1'

  - run: curl ${namenode-addr}
```

This is also available on [GitHub marketplace](https://github.com/marketplace/actions/setup-apache-hdfs) now.

### Add uint64 Support in definitions

We generate codes in `cmd/definition` in [go-storage]. In type map, we defined the transfer of different types,
which is lack of `uint64`.

So [@zu1k] submitted a PR: [definitions: Add support for type uint64](https://github.com/beyondstorage/go-storage/pull/615)
to fix this. Nicely done!

### Add codecov

[Codecov](https://codecov.io) is a tool to ensure our code quality by checking the code coverage by tests.
 
[@Xuanwo] introduced it to increase the test coverage as tracked in issue: [Increase code coverage](https://github.com/beyondstorage/go-storage/issues/620).

For more details, please refer to [ci: Add codecov in unittests](https://github.com/beyondstorage/go-storage/pull/622).

## Community

### Forum UI Design

We use <https://forum.beyondstorage.io> as our forum, and now our new forum theme UI is in designing!

The draft is [here](https://www.figma.com/file/AqHxMvbAccGQM5NtvQEGCn/BeyondStorage.io?node-id=23%3A0),
please feel free to submit your opinion.

### Member Promotion

[@zhangdichn] has been nominated as [beyond-tp] committer. <https://github.com/beyondstorage/community/pull/10>

[@zu1k] has been nominated as [go-storage] reviewer. <https://github.com/beyondstorage/community/pull/13>

Congratulations!

### Summer 2021 of Open Source Promotion Plan

Projects are all in heavy developing, and some projects has already got points. Here are PRs list:

- [go-service-ipfs]: [Implement go-storage Storager](https://github.com/beyondstorage/go-service-ipfs/pull/3) by [@zu1k]
- [go-service-minio]: [Initial implement on Servicer and Storager](https://github.com/beyondstorage/go-service-minio/pull/6) by [@aeinrw]
- [go-service-gdrive]: [Implement storager](https://github.com/beyondstorage/go-service-gdrive/pull/5) by [@junaire]

Let's looking forward more outcomes!

---

[BeyondStorage]: https://beyondstorage.io

[beyond-tp]: https://github.com/beyondstorage/beyond-tp

[go-storage]: https://github.com/beyondstorage/go-storage

[go-service-ipfs]: https://github.com/beyondstorage/go-service-ipfs

[go-service-minio]: https://github.com/beyondstorage/go-service-minio

[go-service-gdrive]: https://github.com/beyondstorage/go-service-gdrive

[@JinnyYi]: https://github.com/JinnyYi

[@Prnyself]: https://github.com/Prnyself

[@Xuanwo]: https://github.com/Xuanwo

[@xxchan]: https://github.com/xxchan

[@zhangdichn]: https://github.com/zhandichn

[@zu1k]: https://github.com/zu1k

[@aeinrw]: https://github.com/aeinrw

[@junaire]: https://github.com/junaire