---
title: "2021-16 周报"
author: "Xuanwo"
author_url: "https://github.com/Xuanwo"
tags:
  - updates
  - weekly-report
---

大家好, 这里是 [AOS](https://aos.dev)的每周报告, 范围从 2021-04-19 至 2021-04-23。

首先，让我们欢迎新人加入： [xxchan](https://github.com/xxchan/). 自从加入我们的团队以来，对我们的核心库 [go-storage][] 做了许多改进。

## 库

### fs.FS 和 http.FileSystem 支持

`fs.FS` 是在 go 1.16 中引入的新的文件系统抽象。 `http.FileSystem` 是 `net/http` 中使用的文件系统抽象。

在 PR [pkg: Implement wrapper for fs.FS and http.FileSystem](https://github.com/aos-dev/go-storage/pull/538) 中, 我们引入了一个 `fswrap` 软件包来将我们的 `Storager` 转换为 `fs.FS` 或 `http.FileSystem`。

```go
func HttpFs(s types.Storager) http.FileSystem {}
func Fs(s types.Storager) fs.FS {}
```

我们现在可以直接在标准库中使用我们的 `Storager`！

### 分段上传支持

`Multipart` 被广泛用于对象存储服务中用来上传大文件(最大可达 50 TB)。 这个星期，我们添加了 `Multiparter` 的集成测试 [go-integration-test][]。 我们将为支持这一功能的所有服务实现 Multiparter。

请关注我们的跟踪 Issue： [Implement Multipart Support](https://github.com/aos-dev/go-storage/issues/522)。

### Appender 支持

`Appender` 被用于将内容附加到文件尾部。

本周，我们还在 [go-integration-test][] 中为 `Appender` 增加了集成测试。 [@JinnyYi](https://github.com/JinnyYi) 将在 PR 中 [Implement Appender Support](https://github.com/aos-dev/go-storage/issues/529) 实现Appender 支持。

### 服务器端加密支持

服务器端加密，a.k.a..，SSE是在服务器端加密数据的一个功能。 为了满足 [pingcapt/dumpling](https://github.com/pingcap/dumpling) 的需要，我们花费了很多时间来确保正确地实现它们。

我们的新组员 [@xxchan](https://github.com/xxchan) 正在领导该事项 [Implement SSE support](https://github.com/aos-dev/go-storage/issues/523)

## 社区

本周 [go-storage][]的 Star 是106，我们得到了我们的第一个 [用户关于文档](https://github.com/aos-dev/go-storage/discussions/540) 的问题。

所以我们开始一个新的项目，名为 [go-storage-example](https://github.com/aos-dev/go-storage-example)。我们将在这个仓库中添加更多的示例, 请在 [讨论](https://github.com/aos-dev/go-storage/discussions) 中告诉我们你需要什么!

---

[go-storage]: https://github.com/aos-dev/go-storage
[go-integration-test]: https://github.com/aos-dev/go-integration-test
