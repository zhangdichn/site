---
title: "2021-15 Weekly Report"
author: "Prnyself"
author_url: "https://github.com/Prnyself"
tags:
  - updates
  - weekly-report
---

This is the weekly report for [BeyondStorage](https://beyondstorage.io), range from 2021-04-12 to 2021-04-16.

<!--truncate-->

## Application

### dm

This week we started design review. https://www.figma.com/file/tZBW1fMDLlcdFpaHJYih9B.

And we pre-released: [v0.2.0](https://github.com/beyondstorage/dm/releases/tag/v0.2.0).

In this pre-release we:

- add create task dialog in ui [#40](https://github.com/beyondstorage/dm/pull/40)
- refactor into grpc services [#51](https://github.com/beyondstorage/dm/pull/51)

## Library

### go-storage

This week we fixed code generation by [Increase stablility of generated code (#526)](https://github.com/beyondstorage/go-storage/pull/526)

And add UnimplementedStub to have forward compatible implementations [#524](https://github.com/beyondstorage/go-storage/pull/524), in which we introduced a breaking change by `UnimplementedStub`.

So we will make sure all service implement it after we release go-storage v3.5.0 in next weeks. [Roadmap](https://github.com/beyondstorage/go-storage/issues/527)

### Create API Support

We implement Create API for all services:

- [go-service-azblob#10](https://github.com/beyondstorage/go-service-azblob/pull/10)
- [go-service-cos#13](https://github.com/beyondstorage/go-service-cos/pull/13)
- [go-service-dropbox#8](https://github.com/beyondstorage/go-service-dropbox/pull/8)
- [go-service-kodo#15](https://github.com/beyondstorage/go-service-kodo/pull/15)
- [go-service-oss#11](https://github.com/beyondstorage/go-service-oss/pull/11)
- [go-service-gcs#15](https://github.com/beyondstorage/go-service-gcs/pull/15)
- [go-service-s3#56](https://github.com/beyondstorage/go-service-s3/pull/56)
- [go-service-uss#4](https://github.com/beyondstorage/go-service-uss/pull/4)

### New release go-service-s3

This week we released: [v1.1.0](https://github.com/beyondstorage/go-service-s3/releases/tag/v1.1.0)

In this release we:

- implement `Create` API [go-service-s3#56](https://github.com/beyondstorage/go-service-s3/pull/56)
- implement default pair support for service [#16](https://github.com/beyondstorage/go-service-s3/pull/16)

## Community

### Working with pingcap/dumpling

[pingcap/dumpling](https://github.com/pingcap/dumpling) is a fast, easy-to-use tool written by Go for dumping data from the database(MySQL, TiDB...) to local/cloud(S3, GCP...) in multifarious formats(SQL, CSV...).

dumpling's community has approved the proposal: [Use aos-dev/go-storage to replace storage.ExternalStorage](https://hackmd.io/@xuanwo/B1-JmNN8O) at [04/15's meeting](https://tidbcommunity.slack.com/archives/C013HGZMBAR/p1618491677044900)

To meet the needs of dumpling's community, we will be focusing on the following:

- [More Multipart support for services](https://github.com/beyondstorage/go-storage/issues/522)
    - For now, only [go-service-qingstor](https://github.com/beyondstorage/go-service-qingstor) and [go-service-s3](https://github.com/beyondstorage/go-service-s3) implement [Multiparter](https://beyondstorage.io/docs/go-storage/operations/multiparter/index)
- [Server Side Encryption Support](https://github.com/beyondstorage/go-storage/issues/523)
    - [Dumpling](https://github.com/pingcap/dumpling) use s3/gce SSE to encrypt backup data
- More test coverage: Our integration tests have to increase coverage, including the [multipart upload logic](https://github.com/beyondstorage/go-integration-test/issues/11) which are mainly using.
- Performance: It is expected that the performance degradation is not more than 10% after the migration is complete, and we must ensure that our abstraction overhead is in a reasonable limit.

### Working with QingStor/qsftpd

[QingStor/qsftpd](https://github.com/qingstor/qsftpd) is a FTP server that persists all data to QingStor Object Storage.

It will adopt go-storage and transfer to Beyond Storage org.

## New hands

Welcome new hands on board!

- [Jinny](https://github.com/JinnyYi)
