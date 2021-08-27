---
title: "2021-16 周报"
author: "Xuanwo"
author_url: "https://github.com/Xuanwo"
tags:
  - updates
  - weekly-report
---

Hello everyone, here is the weekly report for [BeyondStorage](https://beyondstorage.io), range from 2021-04-19 to 2021-04-23.

首先，让我们欢迎新人加入： [xxchan](https://github.com/xxchan/). 首先，让我们欢迎新人加入： [xxchan](https://github.com/xxchan/). He joined in our team since 2021-04-19 and have made many improvements of our core library [go-storage][].

<!--truncate-->

## 库

### fs.FS 和 http.FileSystem 支持

`fs.FS` 是在 go 1.16 中引入的新的文件系统抽象。 `http.FileSystem` 是 `net/http` 中使用的文件系统抽象。

In pull request [pkg: Implement wrapper for fs.FS and http.FileSystem](https://github.com/beyondstorage/go-storage/pull/538), we introduce a `fswrap` package to convert our `Storager` to a `fs.FS` or `http.FileSystem`.

```go
func HttpFs(s types.Storager) http.FileSystem {}
func Fs(s types.Storager) fs.FS {}
```

我们现在可以直接在标准库中使用我们的 `Storager`！

### 分段上传支持

`Multipart` 被广泛用于对象存储服务中用来上传大文件(最大可达 50 TB)。 In this week, we added integration tests for `Multiparter` in [go-integration-test][]. 我们将为支持这一功能的所有服务实现 Multiparter。 我们将为支持这一功能的所有服务实现 Multiparter。

Keep an eye on our track issue: [Implement Multipart Support](https://github.com/beyondstorage/go-storage/issues/522).

### Appender 支持

`Appender` 被用于将内容附加到文件尾部。

This week, we also implement the integration tests for `Appender` in [go-integration-test][]. And [@JinnyYi](https://github.com/JinnyYi) will implement appender support in [Implement Appender Support](https://github.com/beyondstorage/go-storage/issues/529). And [@JinnyYi](https://github.com/JinnyYi) will implement appender support in [Implement Appender Support](https://github.com/beyondstorage/go-storage/issues/529).

### 服务器端加密支持

服务器端加密，a.k.a..，SSE是在服务器端加密数据的一个功能。 为了满足 [pingcapt/dumpling](https://github.com/pingcap/dumpling) 的需要，我们花费了很多时间来确保正确地实现它们。

Our new crew member [@xxchan](https://github.com/xxchan) is leading the support in [Implement SSE support](https://github.com/beyondstorage/go-storage/issues/523).

## 社区

This week [go-storage][]'s star is 106, and we got our first user's question about document.

So we start a new project called [go-storage-example](https://github.com/beyondstorage/go-storage-example), we will add more examples in this repo, please let us know what you need in [discussions](https://forum.beyondstorage.io/t/welcome-to-discourse/7)!

---

[go-storage]: https://github.com/beyondstorage/go-storage
[go-integration-test]: https://github.com/beyondstorage/go-integration-test
