---
title: "2021-26 Weekly Report"
author: "Prnyself"
author_url: "https://github.com/Prnyself"
tags:
  - updates
  - weekly-report
---

Hello everyone, here is the weekly report for [BeyondStorage][], range from 2021-06-28 to 2021-07-02.

## 应用

### dm

When a job is done, we may need get result from the action. So we need to find somewhere to store the result. To enable access common results from different nodes, we decide to store it into leader's db as job's metadata.

So [@Prnyself][] made a proposal [DMP-99: Add job metadata](https://github.com/beyondstorage/dm/pull/99), to add job metadata mechanism. So job-related intermediate result can be accessed.

This proposal has already been implemented, for more details, please refer to [Implement DMP-99: Add job metadata](https://github.com/beyondstorage/dm/pull/104).

## 库

### Notification / CDC

Our Storage Service may support sending notifications to let users get the changes of storage. This feature likes CDC(Change Data Capture) for DBMS.

This is an important feature which will greatly broaden the use of go-storage and can be even used by applications that are not introduced to go-storage to unify event handling in the storage layer.

[@xxchan][] will lead the design and development of this feature, some [original thoughts](https://github.com/beyondstorage/specs/issues/65#issuecomment-871201444) came up by him are in discussion now, and you are welcome to join us.

To track this feature, please refer to this issue: [Idea: Notification (CDC) Support](https://github.com/beyondstorage/specs/issues/65).

### 服务

Last week, we had released [go-storage v4.2.0](https://github.com/beyondstorage/go-storage/releases/tag/v4.2.0). So [@JinnyYi][] bumped [go-storage][] in every go-service-*.

What's more, [GSP-97: Add Restrictions In Storage Metadata](https://github.com/beyondstorage/specs/pull/97), [GSP-109: Redesign Features](https://github.com/beyondstorage/specs/pull/109) and [GSP-117: Rename Service to System as the Opposite to Global](https://github.com/beyondstorage/specs/pull/117) are also implement into go-service-* by [@JinnyYi][].

Great job!

For more details, please refer to [Tracking issue for GSP-97: Add Restrictions In Storage Metadata](https://github.com/beyondstorage/go-storage/issues/599), [Tracking issue for GSP-109: Redesign Features](https://github.com/beyondstorage/go-storage/issues/603) and [Tracking issue for GSP-117: Rename Service to System as the Opposite to Global](https://github.com/beyondstorage/go-storage/issues/604).

### Integration Test

With the development of new features in [go-storage][] and go-service-*, the integration test cases should be completed.

This week, [@JinnyYi][] commits test cases for `Copier` and `Mover`, which enriched our test cases. Nicely done!

For more details, please refer to [issue: Add Copier and Mover tests](https://github.com/beyondstorage/go-integration-test/issues/26).

## 社区

### Website

Our new website is now deployed and online! Please check <https://beyondstorage.io> to take a glance, and we are now keeping adding more information into the website. Please feel free to make suggestion by contacting us. Or you can also [submit an issue](https://github.com/beyondstorage/site/issues) for us, both ways are welcome.

### Community Organization

BeyondStorage has been grown up, and we need to define our community organization to make it clear that everyone's rights and responsibilities.

So [@Xuanwo][] made a proposal [GSP-128: Community Organization](https://github.com/beyondstorage/specs/blob/master/rfcs/128-community-organization.md) to declare five different roles and their permissions in [BeyondStorage][], including:

- Leader
- Maintainer
- Committer
- Reviewer
- Contributor

For more details, please refer to [GSP-128: Community Organization](https://github.com/beyondstorage/specs/pull/128).

### 开源软件供应链点亮计划 - 暑期2021

This week, the list of drafted students is confirmed, here are the OSPP 2021 application results:

| Project                                                                     | Github ID                                    |
| --------------------------------------------------------------------------- | -------------------------------------------- |
| [go-service-ipfs](https://github.com/beyondstorage/go-service-ipfs)         | [@zu1k](https://github.com/zu1k)             |
| [go-service-hdfs](https://github.com/beyondstorage/go-service-hdfs)         | [@bokket](https://github.com/bokket)         |
| [go-service-onedrive](https://github.com/beyondstorage/go-service-onedrive) | [@zxy-lgtm](https://github.com/zxy-lgtm)     |
| [go-service-ftp](https://github.com/beyondstorage/go-service-ftp)           | [@npofsi](https://github.com/npofsi)         |
| [go-service-minio](https://github.com/beyondstorage/go-service-minio)       | [@aeinrw](https://github.com/aeinrw)         |
| [go-service-webdav](https://github.com/beyondstorage/go-service-webdav)     | [@hzeroto](https://github.com/hzeroto)       |
| [go-service-storj](https://github.com/beyondstorage/go-service-storj)       | [@OAkaLala](https://github.com/OAkaLala)     |
| [go-service-gdrive](https://github.com/beyondstorage/go-service-gdrive)     | [@junaire](https://github.com/junaire)       |
| [go-ftp-server](https://github.com/beyondstorage/go-ftp-server)             | [@xiongjiwei](https://github.com/xiongjiwei) |

Congratulations! For those who are not drafted, you are still welcome to join the projects which you are interested in, by making PRs, committing issues, or just posting a topic in our forum.

For more details, please refer to <https://forum.beyondstorage.io/t/ospp-2021-application-results/127>.

---

[BeyondStorage]: https://beyondstorage.io

[go-storage]: https://github.com/beyondstorage/go-storage

[@JinnyYi]: https://github.com/JinnyYi

[@Prnyself]: https://github.com/Prnyself

[@Xuanwo]: https://github.com/Xuanwo

[@xxchan]: https://github.com/xxchan
