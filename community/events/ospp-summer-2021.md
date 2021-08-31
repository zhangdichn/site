---
title: Summer 2021 of Open Source Promotion Plan
---

```mdx-code-block
import TOCInline from '@theme/TOCInline';

<TOCInline toc={[toc[3]]} />
```

## Communication

- Matrix: <https://matrix.to/#/#beyondstorage@event-ospp-summer-2021:matrix.org>
- Telegram: <https://t.me/aos_event_ospp_summer_2021>
- Discord: <https://discord.gg/tMEmXxyeUH>

## Roadmap

- Join any of our chatrooms [#event-ospp-summer-2021](https://matrix.to/#/#beyondstorage@event-ospp-summer-2021:matrix.org) to communicate with mentors and other mentees.
- Choose a project from the following.
- Send your application to [forum](https://forum.beyondstorage.io/) with the [template](https://forum.beyondstorage.io/t/ospp-2021-summer-student-application-template/41)

> Visit <https://summer.iscas.ac.cn/help/timeline/> to get the full timeline.

## Projects

In this event, we provide the following projects.

### WebDAV for go-storage

WebDAV is an extension to the HTTP/1.1 protocol that allows clients to perform remote Web content operations. This project will implement the go-storage Storager interface for WebDAV, enabling users to manipulate data on WebDAV servers using a unified interface.

- Mentor: [xuanwo](https://matrix.to/#/@xuanwo:matrix.org)
- Issue: <https://github.com/beyondstorage/go-service-webdav/issues/1>
- Expect Output:
  - Implement all functions in [storage.go](https://github.com/beyondstorage/go-service-webdav/blob/master/storage.go).
  - Setup [integration tests](/docs/go-storage/internal/integration-tests) as described.
  - Update [documents](/docs/go-storage/services/webdav) and [examples](https://github.com/beyondstorage/go-storage-example).

### FTP for go-storage

FTP is the oldest network tool in the history of the Internet and is still widely used in many areas. This project will implement go-storage's Storager interface for FTP, enabling users to use a unified interface to manipulate data on FTP servers.

- Mentor: [lanceren](https://matrix.to/#/@lanceren:matrix.org)
- Issue: <https://github.com/beyondstorage/go-service-ftp/issues/3>
- Expect Output:
  - Implement all functions in [storage.go](https://github.com/beyondstorage/go-service-ftp/blob/master/storage.go).
  - Setup [integration tests](/docs/go-storage/internal/integration-tests) as described.
  - Update [documents](/docs/go-storage/services/ftp) and [examples](https://github.com/beyondstorage/go-storage-example).

### minio for go-storage

minio is an open-source cloud-native high-performance object storage service. This project will use minio's native SDK to implement go-storage's Storager interface, enabling users to manipulate data on minio servers through a unified interface.

- Mentor: [lanceren](https://matrix.to/#/@lanceren:matrix.org)
- Issue: <https://github.com/beyondstorage/go-service-minio/issues/2>
- Expect Output:
  - Implement all functions in [storage.go](https://github.com/beyondstorage/go-service-minio/blob/master/storage.go).
  - Setup [integration tests](/docs/go-storage/internal/integration-tests) as described.
  - Update [documents](/docs/go-storage/services/minio) and [examples](https://github.com/beyondstorage/go-storage-example).

### HDFS for go-storage

Hadoop Distributed File System (HDFS) is a distributed file system developed for applications on large datasets. This project will implement the go-storage Storager interface for HDFS, enabling users to manipulate data on HDFS services through a unified interface.

- Mentor: [xxchan](https://matrix.to/#/@xxchan:matrix.org)
- Issue: <https://github.com/beyondstorage/go-service-hdfs/issues/1>
- Expect Output:
  - Implement all functions in [storage.go](https://github.com/beyondstorage/go-service-hdfs/blob/master/storage.go).
  - Setup [integration tests](/docs/go-storage/internal/integration-tests) as described.
  - Update [documents](/docs/go-storage/services/hdfs) and [examples](https://github.com/beyondstorage/go-storage-example).

### ipfs for go-storage

The InterPlanetary File System (IPFS) is a content-based addressing, versioning, peer-to-peer hypermedia transfer protocol that combines P2P network technology, BitTorrent transfer technology, Git version control, self-proving file systems, and other technologies, and is a new generation of HTTP-based This project will implement the go This project will implement the go-storage Storager interface for IPFS, enabling users to manipulate data on ipfs nodes through a unified interface.

- Mentor: [xxchan](https://matrix.to/#/@xxchan:matrix.org)
- Issue: <https://github.com/beyondstorage/go-service-ipfs/issues/1>
- Expect Output:
  - Implement all functions in [storage.go](https://github.com/beyondstorage/go-service-ipfs/blob/master/storage.go).
  - Setup [integration tests](/docs/go-storage/internal/integration-tests) as described.
  - Update [documents](/docs/go-storage/services/ipfs) and [examples](https://github.com/beyondstorage/go-storage-example).

### Storj for go-storage

Storj is a decentralized cloud storage framework web platform, and this project will implement go-storage's Storager interface for Storj, enabling users to manipulate data on the Storj service through a unified interface.

- Mentor: [xuanwo](https://matrix.to/#/@xuanwo:matrix.org)
- Issue: <https://github.com/beyondstorage/go-service-storj/issues/1>
- Expect Output:
  - Implement all functions in [storage.go](https://github.com/beyondstorage/go-service-storj/blob/master/storage.go).
  - Setup [integration tests](/docs/go-storage/internal/integration-tests) as described.
  - Update [documents](/docs/go-storage/services/storj) and [examples](https://github.com/beyondstorage/go-storage-example).

### FTP Server based on go-storage

FTP is the oldest network tool in the history of the Internet and is still widely used in many areas. This project will develop an FTP server based on go-storage.

- Mentor: [lanceren](https://matrix.to/#/@lanceren:matrix.org)
- Issue: <https://github.com/beyondstorage/go-ftp-server/issues/1>
- Expect Output:
  - Implement an FTP server at [go-ftp-server](https://github.com/beyondstorage/go-ftp-server).
  - Implement integration tests.
  - Update [documents](/docs/beyond-ftp/index)

### Google Drive for go-storage

Google Drive is a file storage and synchronization service developed by Google. 
This project will implement go-storage's Storager interface, 
enabling users to manipulate data in Google Drive through a unified interface.

- Mentor: [xuanwo](https://matrix.to/#/@xuanwo:matrix.org)
- Issue: <https://github.com/beyondstorage/go-service-gdrive/issues/2>
- Expect Output:
  - Implement all functions in [storage.go](https://github.com/beyondstorage/go-service-gdrive/blob/master/storage.go).
  - Setup [integration tests](/docs/go-storage/internal/integration-tests) as described.
  - Update [documents](/docs/go-storage/services/gdrive) and [examples](https://github.com/beyondstorage/go-storage-example).

### OneDrive for go-storage

Microsoft OneDrive (formerly SkyDrive) is a file hosting service and synchronization service operated
by Microsoft as part of its web version of Office.
This project will implement go-storage's Storager interface, 
enabling users to manipulate data in OneDrive through a unified interface.

- Mentor: [xxchan](https://matrix.to/#/@xxchan:matrix.org)
- Issue: <https://github.com/beyondstorage/go-service-onedrive/issues/2>
- Expect Output:
  - Implement all functions in [storage.go](https://github.com/beyondstorage/go-service-onedrive/blob/master/storage.go).
  - Setup [integration tests](/docs/go-storage/internal/integration-tests) as described.
  - Update [documents](/docs/go-storage/services/onedrive) and [examples](https://github.com/beyondstorage/go-storage-example).

## Q&A 

```mdx-code-block
<TOCInline toc={[toc[3]]} />
```

If you have more questions, discuss in these [channels](#communication).

### How to apply?

:::caution 

The application deadline is June 13.

:::

> Be **open**. Please don't try to connect or ask questions privately.

Send your application in our [forum](https://forum.beyondstorage.io/) so that we can review it publicly. We screen candidates based on applications from the forum!

Also, register in the [official system](https://portal.summer-ospp.ac.cn/summer/login) of OSPP to complete the official application process. 

:::info

You can apply for more than one projects (up to three among all the projects in OSPP).

:::

### What's the requirements/selection criteria?

We will mainly look at your resume, Github account and your project schedule. Please tell us why you are interested in the project and establish a feasible schedule.

There are no hard and fast requirements. It will be better if you know a little golang, but it will be definitely okay if you don't know golang. No advanced techniques will be used.

Actually the original purpose of this event is to attract new students to participate in open source projects and lower the threshold. If you are an experienced open source contributor, e.g., the committer of some well-known open source project, perhaps you are over-qualified and should be a mentor instead of a mentee :)

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

Don't panic if you find there is too much to learn. You will only need to know how to use them, and advanced knowledge like implementation details are not required.

For example, it is enough to know how to deploy a Hadoop cluster via docker (https://github.com/big-data-europe/docker-hadoop), and then how to use an SDK to access it.

### What's the expected outcome? 

In this project, you will only need to implement `Storager`. Take `go-service-hdfs` as an example; you will need to implement the functions [here](https://github.com/beyondstorage/go-service-hdfs/blob/master/storage.go).

The implementation won't be very hard, but you should set up and pass the integration tests. This will be relatively harder. You will perhaps need to deploy a server or cluster and handle some corner cases.

You only need to use our [integration test framework](https://github.com/beyondstorage/go-integration-test). Further testing is not required.

### Do we have to use an official SDK?

No. We can also use a well-maintained community SDK.

But you will need to communicate with your mentor to clarify the choices and trade-offs.

## About

### Open Source Promotion Plan

Open Source Promotion Plan encourages everyone to pay close attention to open source software and open source community, aiming to cultivate and explore more outstanding developers.

'Summer 2021' will be held in this summer. We will collaborate closely with the open source community to provide one-to-one mentor guidance and invite some specialists to conduct free online lectures. In order to promote the development of open source software and facilitate the construction of excellent open source software community, we encourage researchers, open source enthusiasts, professors as well as students to participate in the development and maintenance of open source software. Furthermore, 'Summer 2021' is supposed to increase the activity of open source projects, and promote the development of open source ecology.

Link: <https://summer.iscas.ac.cn/>

### Beyond Storage

`Beyond Storage` is a storage abstraction beyond the existing storage services. For now, we are focusing our golang implementations: [go-storage](https://github.com/beyondstorage/go-storage)
