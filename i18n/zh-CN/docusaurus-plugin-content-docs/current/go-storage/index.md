---
title: 介绍
sidebar_position: 1
---

[![Build Status](https://github.com/beyondstorage/go-storage/workflows/Unittest/badge.svg?branch=master)](https://github.com/beyondstorage/go-storage/actions?query=workflow%3AUnittest) [![Go dev](https://pkg.go.dev/badge/github.com/beyondstorage/go-storage?utm_source=godoc)](https://godoc.org/github.com/beyondstorage/go-storage) [![License](https://img.shields.io/badge/license-apache%20v2-blue.svg)](https://github.com/Xuanwo/storage/blob/master/LICENSE) [![go storage dev](https://img.shields.io/matrix/go-storage:aos.dev.svg?server_fqdn=chat.aos.dev&label=%23go-storage%3Aaos.dev&logo=matrix)](https://matrix.to/#/#go-storage:aos.dev)

A storage abstraction beyond the existing storage services.

![](/docs/go-storage/operations/operations.png)

## 目标

- 生产就绪
- 高性能
- 无供应商锁定

## 特性

### 广泛的服务支持

- [azblob](services/azblob.md): [Azure Blob storage](https://docs.microsoft.com/en-us/azure/storage/blobs/)
- [cos](services/cos.md): [腾讯云对象存储服务](https://cloud.tencent.com/product/cos)
- [dropbox](services/dropbox.md): [Dropbox](https://www.dropbox.com)
- [fs](services/fs.md): 本地文件系统
- [gcs](services/gcs.md): [Google Cloud Storage](https://cloud.google.com/storage/)
- [kodo](services/kodo.md): [七牛 kodo 对象存储服务](https://www.qiniu.com/products/kodo)
- [oss](services/oss.md): [阿里云对象存储服务](https://www.aliyun.com/product/oss)
- [qingstor](services/qingstor.md): [青云 QingStor 对象存储服务](https://www.qingcloud.com/products/qingstor/)
- [s3](services/s3.md): [Amazon S3](https://aws.amazon.com/s3/)
- [uss](services/uss.md): [又拍云对象存储服务](https://www.upyun.com/products/file-storage)

### 全面的操作支持

- [Servicer](operations/servicer/index.md): 服务级别的管理
- [Storager](operations/storager/index.md): 支持读取/写入/获取信息/删除/列取等所有基础对象操作
  - [Copier](operations/copy.md): 在 Storager 中复制一个对象
  - [Mover](operations/move.md):  在 Storager 中移动一个对象
  - [Reach](operations/reach.md): 给对象生成一个可公开访问的 url
  - [Multiparter](operations/multiparter): 允许进行分段上传
  - [Appender](operations/appender): 允许追加写入到对象 （Append）
  - [Block](operations/blocker): 允许使用 Block 来组合一个对象
  - [Page](operations/pager): 允许随机写入操作
  - [Fetcher](operations/fetch.md): fetch from a given url to path

## 快速开始

```go
package main

import (
    "bytes"
    "log"

    "github.com/beyondstorage/go-storage/v4/pairs"
    "github.com/beyondstorage/go-service-fs/v3"
)

func main() {
    // Init a service.
    store, err := services.NewStoragerFromString("fs:///tmp")
    if err != nil {
        log.Fatalf("service init failed: %v", err)
    }

    content := []byte("Hello, world!")
    length := int64(len(content))
    r := bytes.NewReader(content)

    _, err = store.Write("hello", r, length)
    if err != nil {
        log.Fatalf("write failed: %v", err)
    }

    var buf bytes.Buffer

    _, err = store.Read("hello", &buf)
    if err != nil {
        log.Fatalf("storager read: %v", err)
    }

    log.Printf("%s", buf.String())
}
```

## 示例

All examples are maintained in <https://github.com/beyondstorage/go-storage-example>.

## 赞助者

<a href="https://vercel.com?utm_source=beyondstorage&utm_campaign=oss">
    <img src="/img/vercel_logo_dark.svg" />
</a>

