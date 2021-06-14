---
title: "2021-16 Weekly Report"
author: "Xuanwo"
author_url: "https://github.com/Xuanwo"
tags: [updates, weekly-report]
---

Hello everyone, here is the weekly report for [BeyondStorage](https://beyondstorage.io), range from 2021-04-19 to 2021-04-23.

Firstly, let's welcome the new hands: [xxchan](https://github.com/xxchan/). He joined in our team since 2021-04-19 and have made many improvements of our core library [go-storage].

<!--truncate-->

## Library

### fs.FS and http.FileSystem Support

`fs.FS` is the new file system abstraction that introduced in go 1.16. And `http.FileSystem` is the file system abstraction used in `net/http`.

In pull request [pkg: Implement wrapper for fs.FS and http.FileSystem](https://github.com/beyondstorage/go-storage/pull/538), we introduce a `fswrap` package to convert our `Storager` to a `fs.FS` or `http.FileSystem`.

```go
func HttpFs(s types.Storager) http.FileSystem {}
func Fs(s types.Storager) fs.FS {}
```

We can use our `Storager` in stdlib directly for now!

### Multiparter Support

`Multipart` is widely used in object storage services to upload huge files (up to 50TB). In this week, we added integration tests for `Multiparter` in [go-integration-test]. And we will implement multipart for all services that support this feature.

Keep an eye on our track issue: [Implement Multipart Support](https://github.com/beyondstorage/go-storage/issues/522).

### Appender Support

`Appender` is used to append content to the tail of file.

This week, we also implement the integration tests for `Appender` in [go-integration-test]. And [@JinnyYi](https://github.com/JinnyYi) will implement appender support in [Implement Appender Support](https://github.com/beyondstorage/go-storage/issues/529).

### Server Side Encryption Support

Server Side Encryption, a.k.a., SSE is a feature to encrypt data on server side. In order to meet [pingcap/dumpling](https://github.com/pingcap/dumpling) needs, we spent a lot of time to make sure they implemented correctly.

Our new crew member [@xxchan](https://github.com/xxchan) is leading the support in [Implement SSE support](https://github.com/beyondstorage/go-storage/issues/523).

## Community

This week [go-storage]'s star is 106, and we got our first user's question about document. 

So we start a new project called [go-storage-example](https://github.com/beyondstorage/go-storage-example), we will add more examples in this repo, please let us know what you need in [discussions](https://forum.beyondstorage.io/t/welcome-to-discourse/7)!

---

[go-storage]: https://github.com/beyondstorage/go-storage
[go-integration-test]: https://github.com/beyondstorage/go-integration-test
