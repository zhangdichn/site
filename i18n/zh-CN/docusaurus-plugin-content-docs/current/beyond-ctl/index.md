---
title: 介绍
sidebar_position: 1
---

[BeyondCTL](https://github.com/beyondstorage/beyond-ctl) 是所有存储服务的命令行工具。

```shell
# Create a new profile if we don't have one.
# Create a new profile if we don't have one.
beyondctl profile add example s3://<bucketname>/path?credential=hmac:<access_key>:<secret_key>&endpoint=https:<example.com>&location=<region>
# Copy local file `test.mp4` to the service specified by profile example. 
beyondctl cp test.mp4 example:/test.mp4 
beyondctl cp test.mp4 example:/test.mp4
```

## 特性

目前，我们支持以下功能：

- [profile](./commands/profile.md): 多个配置文件支持。
- [cp](./commands/cp.md): 将文件从来源复制到目的地。

## 呼叫帮助！

还有许多工作要做，我们欢迎所有的 PR。

请访问 [issues](https://github.com/beyondstorage/beyond-ctl/issues) 来了解如何提供帮助。
