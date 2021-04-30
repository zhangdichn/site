---
title: 开源软件供应链点亮计划 - 暑期2021
---

## 交流

聊天室： <https://matrix.to/#/#event-ospp-summer-2021:aos.dev>

## 路线图

- 加入我们的聊天室 [#event-ospp-2021](https://matrix.to/#/#event-ospp-summer-2021:aos.dev) 来与导师和其他学员进行沟通。
- 在房间里介绍你自己。
- 从下列项目中选择一个项目，然后将简历发送给对应导师。
- 访问 [这里](https://github.com/orgs/aos-dev/projects/1?card_filter_query=label%3A%22help+wanted%22) 完成一些 Issue 以对 AOS 了解更多。

访问 [https://summer.iscas.ac.cn/help/timeine/](https://summer.iscas.ac.cn/help/timeline/) 获取完整的时间线。

## 项目

在本次活动中，我们提供了以下项目。

### go-storage 的 WebDAV 实现

WebDAV 是 HTTP/1.1 协议的扩展，它允许客户机执行远程 Web 内容操作。 这个项目将会为 WebDAV 实现 go-storage 的 Storager 接口，使得用户能够使用统一的接口来操作 WebDAV 服务器上的数据。

- 导师: [xuanwo](https://matrix.to/#/@xuanwo:matrix.org)
- Issue: <https://github.com/aos-dev/go-service-webdav/issues/1>

### go-storage 的 FTP 实现

FTP 是互联网历史上最悠久的网络工具，至今仍在多个领域被广泛使用。 这个项目将会为 FTP 实现 go-storage 的 Storager 接口，使得用户能够使用统一的接口来操作 FTP 服务器上的数据

导师: [lanceren](https://matrix.to/#/@lanceren:matrix.org)

### go-storage 的 minio 实现

minio 是一款开源的云原生高性能对象存储服务。 这个项目将会使用 minio 原生的 SDK 来实现 go-storage 的 Storager 接口，使得用户能够通过统一的接口来操作 minio 服务器上的数据。

导师: [lanceren](https://matrix.to/#/@lanceren:matrix.org)

### go-storage 的 HDFS 实现

Hadoop 分布式文件系统 (HDFS) 是一款为大规模数据集上的应用开发的分布式文件系统。 个项目将会为 HDFS 实现 go-storage 的 Storager 接口，使得用户能够通过统一的接口来操作 HDFS 服务上的数据。

导师： [xxchan](https://matrix.to/#/@xxchan:matrix.org)

### go-storage 的 ipfs 实现

the InterPlanetary File System（IPFS）即星际文件系统，是一种基于内容寻址、版本化、点对点的超媒体传输协议，集合了P2P网络技术、BitTorrent 传输技术、Git 版本控制、自证明文件系统等技术，对标 HTTP 的新一代通信协议。这个项目将会为 IPFS 实现 go-storage 的 Storager 接口，使得用户能够通过统一的接口来操作 ipfs 节点上的数据。

导师： [xxchan](https://matrix.to/#/@xxchan:matrix.org)

### go-storage 的 Storj 实现

Storj 是一个去中心化的云存储框架网络平台，这个项目将会为 Storj 实现 go-storage 的 Storager 接口，使得用户能够通过统一的接口来操作 Storj 服务上的数据。

导师: [xuanwo](https://matrix.to/#/@xuanwo:matrix.org)

### 基于 go-storage 开发 ftp 服务器

FTP 是互联网历史上最悠久的网络工具，至今仍在多个领域被广泛使用。 这个项目将会基于 go-storage 开发一个 FTP 服务器。

导师: [lanceren](https://matrix.to/#/@lanceren:matrix.org)

## 关于

## 开源软件供应链点亮计划

开源软件供应链点亮计划鼓励大家关注开源软件和开源社区，致力于培养和发掘更多优秀的开发者。

活动将在暑期进行， 我们将与开源社区紧密合作，提供一对一的导师指导，邀请技术大牛开展线上免费讲座。 我们鼓励研究人员、开源爱好者、在校师生参与开源软件的开发与维护，促进开源软件的发展和优秀开源软件社区建设， 增加开源项目的活跃度，推进开源生态的发展。

链接： [https://summer.iscas.cn/](https://summer.iscas.ac.cn/)

## AOS

`AOS` 是 ` Application Oriented Storage `的缩写，我们计划构建一个面向应用程序的存储抽象层。 现在，我们正聚焦于 Golang 的实现： [go-sorage](https://github.com/aos-dev/go-storage)
