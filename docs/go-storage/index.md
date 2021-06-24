---
title: Introduction
sidebar_position: 1
---

[![Build Status](https://github.com/beyondstorage/go-storage/workflows/Unittest/badge.svg?branch=master)](https://github.com/beyondstorage/go-storage/actions?query=workflow%3AUnittest)
[![Go dev](https://pkg.go.dev/badge/github.com/beyondstorage/go-storage?utm_source=godoc)](https://godoc.org/github.com/beyondstorage/go-storage)
[![License](https://img.shields.io/badge/license-apache%20v2-blue.svg)](https://github.com/Xuanwo/storage/blob/master/LICENSE)
[![go storage dev](https://img.shields.io/matrix/go-storage:aos.dev.svg?server_fqdn=chat.aos.dev&label=%23go-storage%3Aaos.dev&logo=matrix)](https://matrix.to/#/#go-storage:aos.dev)

A storage abstraction beyond the existing storage services.

![](/docs/go-storage/operations/operations.png)

## Goal

- Production ready
- High performance
- Vendor agnostic

## Features

### Widely services support

- [azblob](services/azblob.md): [Azure Blob storage](https://docs.microsoft.com/en-us/azure/storage/blobs/)
- [cos](services/cos.md): [Tencent Cloud Object Storage](https://cloud.tencent.com/product/cos)
- [dropbox](services/dropbox.md): [Dropbox](https://www.dropbox.com)
- [fs](services/fs.md): Local file system
- [gcs](services/gcs.md): [Google Cloud Storage](https://cloud.google.com/storage/)
- [kodo](services/kodo.md): [qiniu kodo](https://www.qiniu.com/products/kodo)
- [oss](services/oss.md): [Aliyun Object Storage](https://www.aliyun.com/product/oss)
- [qingstor](services/qingstor.md): [QingStor Object Storage](https://www.qingcloud.com/products/qingstor/)
- [s3](services/s3.md): [Amazon S3](https://aws.amazon.com/s3/)
- [uss](services/uss.md): [UPYUN Storage Service](https://www.upyun.com/products/file-storage)

### Fully operation support

- [Servicer](operations/servicer/index.md): Service Level Management.
- [Storager](operations/storager/index.md): Support all read/write/stat/delete/list/... basic object operations.
  - [Copier](operations/copy.md): copy an object inside storager
  - [Mover](operations/move.md):  move an object inside storager 
  - [Reach](operations/reach.md): generate a public accessible url to the object 
  - [Multiparter](operations/multiparter): allow doing multipart uploads 
  - [Appender](operations/appender): allow appending to an object 
  - [Block](operations/blocker): allow combining an object with block ids 
  - [Page](operations/pager): allow doing random writes
  - [Fetcher](operations/fetch.md): fetch from a given url to path

## Quick Start

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

## Examples

All examples are maintained in <https://github.com/beyondstorage/go-storage-example>.

## Sponsor

<a href="https://vercel.com?utm_source=beyondstorage&utm_campaign=oss">
    <img src="/img/vercel_logo_dark.svg" />
</a>

