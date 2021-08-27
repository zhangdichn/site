---
title: 开源软件供应链点亮计划 - 暑期2021
---

```mdx-code-block
import TOCInline from '@theme/TOCInline';

<TOCInline toc={[toc[3]]} />
```

## 交流

- Matrix: <https://matrix.to/#/#beyondstorage@event-ospp-summer-2021:matrix.org>
- Telegram: [https://t.me/aos_event_ospp_summer_2021](https://t.me/aos_event_ospp_summer_2021)
- Discord: <https://discord.gg/tMEmXxyeUH>

## 路线图

- Join any of our chatrooms [#event-ospp-summer-2021](https://matrix.to/#/#beyondstorage@event-ospp-summer-2021:matrix.org) to communicate with mentors and other mentees.
- Choose a project from the following.
- 用 [模板](https://forum.beyondstorage.io/t/ospp-2021-summer-student-application-template/41) 将您的申请发送到 [论坛](https://forum.beyondstorage.io/)。

> Visit <https://summer.iscas.ac.cn/help/timeline/> to get the full timeline.

## 项目

In this event, we provide the following projects.

### go-storage 的 WebDAV 实现

WebDAV 是 HTTP/1.1 协议的扩展，它允许客户机执行远程 Web 内容操作。 这个项目将会为 WebDAV 实现 go-storage 的 Storager 接口，使得用户能够使用统一的接口来操作 WebDAV 服务器上的数据。

- 导师: [xuanwo](https://matrix.to/#/@xuanwo:matrix.org)
- Issue: <https://github.com/beyondstorage/go-service-webdav/issues/1>
- 预期输出：
  - 在 [storage.go](https://github.com/beyondstorage/go-service-webdav/blob/master/storage.go) 中实现所有函数。
  - 设置 [集成测试](/docs/go-storage/internal/integration-tests)。
  - 更新 [文档](/docs/go-storage/services/webdav) 和 [示例](https://github.com/beyondstorage/go-storage-example)。

### go-storage 的 FTP 实现

FTP 是互联网历史上最悠久的网络工具，至今仍在多个领域被广泛使用。 这个项目将会为 FTP 实现 go-storage 的 Storager 接口，使得用户能够使用统一的接口来操作 FTP 服务器上的数据

- 导师: [lanceren](https://matrix.to/#/@lanceren:matrix.org)
- Issue: <https://github.com/beyondstorage/go-service-ftp/issues/3>
- 预期输出：
  - 在 [storage.go](https://github.com/beyondstorage/go-service-ftp/blob/master/storage.go) 中实现所有函数。
  - 设置 [集成测试](/docs/go-storage/internal/integration-tests)。
  - 更新 [文档](/docs/go-storage/services/ftp) 和 [示例](https://github.com/beyondstorage/go-storage-example)。

### go-storage 的 minio 实现

minio is an open-source cloud-native high-performance object storage service. 这个项目将会使用 minio 原生的 SDK 来实现 go-storage 的 Storager 接口，使得用户能够通过统一的接口来操作 minio 服务器上的数据。 这个项目将会使用 minio 原生的 SDK 来实现 go-storage 的 Storager 接口，使得用户能够通过统一的接口来操作 minio 服务器上的数据。

- 导师: [lanceren](https://matrix.to/#/@lanceren:matrix.org)
- Issue: <https://github.com/beyondstorage/go-service-minio/issues/2>
- 预期输出：
  - 在 [storage.go](https://github.com/beyondstorage/go-service-minio/blob/master/storage.go) 中实现所有函数。
  - 设置 [集成测试](/docs/go-storage/internal/integration-tests)。
  - 更新 [文档](/docs/go-storage/services/minio) 和 [示例](https://github.com/beyondstorage/go-storage-example)。

### go-storage 的 HDFS 实现

Hadoop 分布式文件系统 (HDFS) 是一款为大规模数据集上的应用开发的分布式文件系统。 个项目将会为 HDFS 实现 go-storage 的 Storager 接口，使得用户能够通过统一的接口来操作 HDFS 服务上的数据。

- 导师： [xxchan](https://matrix.to/#/@xxchan:matrix.org)
- Issue: <https://github.com/beyondstorage/go-service-hdfs/issues/1>
- 预期输出：
  - 在 [storage.go](https://github.com/beyondstorage/go-service-hdfs/blob/master/storage.go) 中实现所有函数。
  - 设置 [集成测试](/docs/go-storage/internal/integration-tests)。
  - 更新 [文档](/docs/go-storage/services/hdfs) 和 [示例](https://github.com/beyondstorage/go-storage-example)。

### go-storage 的 ipfs 实现

the InterPlanetary File System（IPFS）即星际文件系统，是一种基于内容寻址、版本化、点对点的超媒体传输协议，集合了P2P网络技术、BitTorrent 传输技术、Git 版本控制、自证明文件系统等技术，对标 HTTP 的新一代通信协议。 这个项目将会为 IPFS 实现 go-storage 的 Storager 接口，使得用户能够通过统一的接口来操作 ipfs 节点上的数据。

- 导师： [xxchan](https://matrix.to/#/@xxchan:matrix.org)
- Issue: <https://github.com/beyondstorage/go-service-ipfs/issues/1>
- 预期输出：
  - 在 [storage.go](https://github.com/beyondstorage/go-service-ipfs/blob/master/storage.go) 中实现所有函数。
  - 设置 [集成测试](/docs/go-storage/internal/integration-tests)。
  - 更新 [文档](/docs/go-storage/services/ipfs) 和 [示例](https://github.com/beyondstorage/go-storage-example)。

### go-storage 的 Storj 实现

Storj 是一个去中心化的云存储框架网络平台，这个项目将会为 Storj 实现 go-storage 的 Storager 接口，使得用户能够通过统一的接口来操作 Storj 服务上的数据。

- 导师: [xuanwo](https://matrix.to/#/@xuanwo:matrix.org)
- Issue: <https://github.com/beyondstorage/go-service-storj/issues/1>
- 预期输出：
  - 在 [storage.go](https://github.com/beyondstorage/go-service-storj/blob/master/storage.go) 中实现所有函数。
  - 设置 [集成测试](/docs/go-storage/internal/integration-tests)。
  - 更新 [文档](/docs/go-storage/services/storj) 和 [示例](https://github.com/beyondstorage/go-storage-example)。

### 基于 go-storage 开发 ftp 服务器

FTP 是互联网历史上最悠久的网络工具，至今仍在多个领域被广泛使用。 这个项目将会基于 go-storage 开发一个 FTP 服务器。

- 导师: [lanceren](https://matrix.to/#/@lanceren:matrix.org)
- Issue: <https://github.com/beyondstorage/go-ftp-server/issues/1>
- 预期输出：
  - 在 [go-ftp-server](https://github.com/beyondstorage/go-ftp-server) 上实现一个 FTP 服务器。
  - 实现集成测试。
  - Update [documents](/docs/beyond-ftp/index)

### go-storage 的 Google Drive 实现

Google Drive 是谷歌开发的文件存储和同步服务。 This project will implement go-storage's Storager interface, enabling users to manipulate data in Google Drive through a unified interface.

- 导师: [xuanwo](https://matrix.to/#/@xuanwo:matrix.org)
- Issue: <https://github.com/beyondstorage/go-service-gdrive/issues/2>
- 预期输出：
  - 在 [storage.go](https://github.com/beyondstorage/go-service-gdrive/blob/master/storage.go) 中实现所有函数。
  - 设置 [集成测试](/docs/go-storage/internal/integration-tests)。
  - 更新 [文档](/docs/go-storage/services/gdrive) 和 [示例](https://github.com/beyondstorage/go-storage-example)。

### go-storage 的 OneDrive 实现

Microsoft OneDrive(原为 SkyDrive) 是一个文件托管服务和同步服务，由 Microsoft 运行 ，作为其网络版的 Office 的一部分。 This project will implement go-storage's Storager interface, enabling users to manipulate data in OneDrive through a unified interface.

- 导师： [xxchan](https://matrix.to/#/@xxchan:matrix.org)
- Issue: <https://github.com/beyondstorage/go-service-onedrive/issues/2>
- 预期输出：
  - 在 [storage.go](https://github.com/beyondstorage/go-service-onedrive/blob/master/storage.go) 中实现所有函数。
  - 设置 [集成测试](/docs/go-storage/internal/integration-tests)。
  - 更新 [文档](/docs/go-storage/services/onedrive) 和 [示例](https://github.com/beyondstorage/go-storage-example)。

## Q&A

```mdx-code-block
<TOCInline toc={[toc[3]]} />
```

If you have more questions, discuss in these [channels](#communication).

### How to apply?

:::caution

The application deadline is June 13.

:::

> Be **open**. Please don't try to connect or ask questions privately. Please don't try to connect or ask questions privately.

Send your application in our [forum](https://forum.beyondstorage.io/) so that we can review it publicly. We screen candidates based on applications from the forum! We screen candidates based on applications from the forum!

Also, register in the [official system](https://portal.summer-ospp.ac.cn/summer/login) of OSPP to complete the official application process.

:::info

You can apply for more than one projects (up to three among all the projects in OSPP).

:::

### What's the requirements/selection criteria?

We will mainly look at your resume, Github account and your project schedule. Please tell us why you are interested in the project and establish a feasible schedule. Please tell us why you are interested in the project and establish a feasible schedule.

There are no hard and fast requirements. There are no hard and fast requirements. It will be better if you know a little golang, but it will be definitely okay if you don't know golang. No advanced techniques will be used. No advanced techniques will be used.

Actually the original purpose of this event is to attract new students to participate in open source projects and lower the threshold. If you are an experienced open source contributor, e.g., the committer of some well-known open source project, perhaps you are over-qualified and should be a mentor instead of a mentee :) If you are an experienced open source contributor, e.g., the committer of some well-known open source project, perhaps you are over-qualified and should be a mentor instead of a mentee :)

### What can I get from the project?

- The experience of participating in a complete project development process:

  given the requirements, how to plan, how to review, how to test
- The experience of open source collaborative development
- Basic knowledge of golang and a golang project experience
- The award money

### What is this project going to do?

The idea of `go-service-*` related projects is the same: to implement a `go-storage` interface for a storage service.

[go-storage](https://github.com/beyondstorage/go-storage) is a storage abstraction layer we built. It exposes a unified interface upwards, and various `go-services-*` provide storage service support downwards. In this way, user applications, such as FTP, FUSE, Webdav, data migration, backup, management, etc., can run on all storage services without additional modifications, by simply use the interface of `go-storage`. Write once, run on every storage service!

So the background knowledge you will need to know is the interface defined by `go-storage` and how to implement the interface for a corresponding storage service.

### How much should I know about HDFS/IPFS/...?

Don't panic if you find there is too much to learn. Don't panic if you find there is too much to learn. You will only need to know how to use them, and advanced knowledge like implementation details are not required.

For example, it is enough to know how to deploy a Hadoop cluster via docker (https://github.com/big-data-europe/docker-hadoop), and then how to use an SDK to access it.

### What's the expected outcome?

In this project, you will only need to implement `Storager`. In this project, you will only need to implement `Storager`. Take `go-service-hdfs` as an example; you will need to implement the functions [here](https://github.com/beyondstorage/go-service-hdfs/blob/master/storage.go).

The implementation won't be very hard, but you should set up and pass the integration tests. This will be relatively harder. You will perhaps need to deploy a server or cluster and handle some corner cases. This will be relatively harder. You will perhaps need to deploy a server or cluster and handle some corner cases.

You only need to use our [integration test framework](https://github.com/beyondstorage/go-integration-test). Further testing is not required. Further testing is not required.

### Do we have to use an official SDK?

No. No. We can also use a well-maintained community SDK.

But you will need to communicate with your mentor to clarify the choices and trade-offs.

## 关于

### 开源软件供应链点亮计划

开源软件供应链点亮计划鼓励大家关注开源软件和开源社区，致力于培养和发掘更多优秀的开发者。

活动将在暑期进行， 我们将与开源社区紧密合作，提供一对一的导师指导，邀请技术大牛开展线上免费讲座。 我们鼓励研究人员、开源爱好者、在校师生参与开源软件的开发与维护，促进开源软件的发展和优秀开源软件社区建设， 我们鼓励研究人员、开源爱好者、在校师生参与开源软件的开发与维护，促进开源软件的发展和优秀开源软件社区建设， Furthermore, 'Summer 2021' is supposed to increase the activity of open source projects, and promote the development of open source ecology.

链接： [https://summer.iscas.cn/](https://summer.iscas.ac.cn/)

### Beyond Storage

`Beyond Storage` 是一个超越现有存储服务的存储抽象。 现在，我们正聚焦于 Golang 的实现： [go-sorage](https://github.com/beyondstorage/go-storage)
