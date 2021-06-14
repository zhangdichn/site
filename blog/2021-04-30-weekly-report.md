---
title: "2021-17 Weekly Report"
author: "JinnyYi"
author_url: "https://github.com/JinnyYi"
tags: [updates, weekly-report]
---

Hello everyone, here is the weekly report for [BeyondStorage](https://beyondstorage.io), range from 2021-04-25 to 2021-04-30.

<!--truncate-->

## Library

### Appender Support

`Appender` is used to append content to the tail of file.

This week, we implement `Appender` for the services that support this feature. [CommitAppend](https://github.com/beyondstorage/specs/blob/master/rfcs/0-commit-append.md) is introduced to finish an append procedure as service like dropbox needs a `close` to mark this appends process has been finished.

### Server Side Encryption Support

Server Side Encryption, a.k.a., SSE is a feature to encrypt data on server side, which is used by various applications. 

 [@xxchan](https://github.com/xxchan) was responsible for completing the SSE support for the services this week, including [Implement SSE support](https://github.com/beyondstorage/go-storage/issues/523), [SEE-S3 sample code](https://github.com/beyondstorage/go-storage-example/blob/master/sse_s3.go) and related documents. [SSE blog](https://beyondstorage.io/blog/2021/04/27/sse) shows what is SSE and how to use SSE in [go-storage].

### Error Handling

Expected errors are errors that implementer expected. Those errors should be defined with enough comments and any changes to them should be documented. 

[GSP-11](https://github.com/beyondstorage/specs/blob/master/rfcs/11-error-handling.md) has specified error handling, but our service is not strict with its requirements when implemented. To make error handling more user friendly, [@xxchan](https://github.com/xxchan) is leading the support in [Network/IO Error should be expected so that we can retry them](https://github.com/beyondstorage/go-storage/issues/145). 

### Make Delete idempotent

The current `delete` behavior should be different for fs and object storage services. 

For dropbox alike storage services, delete a file that is uploading, such as `Appender` procedure unfinished, will returns an error, which is different with file system and object storage. So we need to unify the behavior.

Please keep an eye on our track issue: [Make Delete idempotent](https://github.com/beyondstorage/go-storage/issues/551).

## Application

### dm

[dm] is a data migration service and a long time effort.

To ensure that task recovery carried out according to the plan, even if it is interrupted for many times, [Prnyself](https://github.com/Prnyself) finished [Proposal: Add support for stop and resume task](https://hackmd.io/@lance-ren/BJM1e2fw_) this week and will start the demo.

Hi-Fi  of [dm] is under designing. The [Hi-Fi prototype interaction](https://www.figma.com/proto/tZBW1fMDLlcdFpaHJYih9B/Data-Migration-Prototype?page-id=1060%3A51&node-id=1060%3A14951&viewport=3370%2C1130%2C0.125&scaling=min-zoom) is on trial and welcome feedback.

## Community

### Summer 2021 of Open Source Promotion Plan

[Open Source Promotion Plan](https://summer.iscas.ac.cn/), a.k.a., OSPP, encourage everyone to pay close attention to open source software and open source community, aiming to cultivate and explore more outstanding developers.

This week we applied to participate in OSPP - Summer 2021 and posed the subject . [@Xuanwo](https://github.com/Xuanwo), [@Prnyself](https://github.com/Prnyself) and [@xxchan](https://github.com/xxchan) will take part in the subject, and we will recruit contributors from student groups.

For details, please refer to <https://beyondstorage.io/community/events/ospp-summer-2021>.

---

[go-storage]: https://github.com/beyondstorage/go-storage
[dm]: https://github.com/beyondstorage/dm
