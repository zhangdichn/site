---
title: "Why and what's Beyond Storage"
author: "JinnyYi"
author_url: "https://github.com/JinnyYi"
tags: [updates]
---

## Why Beyond Storage

Our vision is to build a fully open sourced (Under Apache 2.0) storage abstraction that production-ready, high performance, and vendor-agnostic.

We plan to build a storage abstraction beyond the existing storage services which provides:
- Cross storage service through uniform interface.
- Cross cloud application upon our library.

<!--truncate-->

## What's Beyond Storage

`Beyond Storage` is a storage abstraction beyond the existing storage services.

For now, we are focus on the following projects:

- Library
    - [go-storage]: The go version of Beyond Storage.
    - `go-services-*`: The services implements of go-storage.
    - [rs-storage]: The rust version of Beyond Storage.
- Application
    - [dm]: The data migration services based on Beyond Storage.

In the further, we will

- Support as many as services we can, see more in Service Integration Tracking.
   - ipfs
   - google drive
   - onedrive
   - minio
   - ftp
   - webdav
   - glusferfs
   - azfile
   - NextCloud
   - …
- Bring this idea to as many as languages we can:
   - rust
   - java
   - python
   - javascript
   - …
- Build applications upon our library
   - ftp
   - webdav
   - object storage services (works like an API gateway)
   - fuse (userspace file system, allow user to mount a storage service as local path)
   - migration (allow to migrate data between storage services)
   - backup (allow backup data between storage services)
   - management (allow manage data between storage services)
   - …

---

[go-storage]: https://github.com/beyondstorage/go-storage
[rs-storage]: https://github.com/beyondstorage/rs-storage
[dm]: https://github.com/beyondstorage/dm/
