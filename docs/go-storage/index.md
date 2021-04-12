---
title: Introduction
---

[![Build Status](https://github.com/aos-dev/go-storage/workflows/Unittest/badge.svg?branch=master)](https://github.com/aos-dev/go-storage/actions?query=workflow%3AUnittest)
[![Go dev](https://godoc.org/github.com/aos-dev/go-storage?status.svg)](https://godoc.org/github.com/aos-dev/go-storage)
[![License](https://img.shields.io/badge/license-apache%20v2-blue.svg)](https://github.com/Xuanwo/storage/blob/master/LICENSE)
[![go storage dev](https://img.shields.io/matrix/go-storage:aos.dev.svg?server_fqdn=chat.aos.dev&label=%23go-storage%3Aaos.dev&logo=matrix)](https://matrix.to/#/#go-storage:aos.dev)

An application-oriented unified storage layer for Golang.

![](/docs/go-storage/operations/operations.png)

## Goal

- Production ready
- High performance
- Vendor agnostic

## Features

### Widely services support

- [azblob](docs/go-storage/services/azblob/): [Azure Blob storage](https://docs.microsoft.com/en-us/azure/storage/blobs/)
- [cos](docs/go-storage/services/cos/): [Tencent Cloud Object Storage](https://cloud.tencent.com/product/cos)
- [dropbox](docs/go-storage/services/dropbox/): [Dropbox](https://www.dropbox.com)
- [fs](docs/go-storage/services/fs/): Local file system
- [gcs](docs/go-storage/services/gcs/): [Google Cloud Storage](https://cloud.google.com/storage/)
- [kodo](docs/go-storage/services/kodo/): [qiniu kodo](https://www.qiniu.com/products/kodo)
- [oss](docs/go-storage/services/oss/): [Aliyun Object Storage](https://www.aliyun.com/product/oss)
- [qingstor](docs/go-storage/services/qingstor/): [QingStor Object Storage](https://www.qingcloud.com/products/qingstor/)
- [s3](docs/go-storage/services/s3/): [Amazon S3](https://aws.amazon.com/s3/)
- [uss](docs/go-storage/services/uss/): [UPYUN Storage Service](https://www.upyun.com/products/file-storage)

### Servicer operation support

- List: list all Storager in service
- Get: get a Storager via name
- Create: create a Storager
- Delete: delete a Storager

### Storager operation support

Basic operations

- Metadata: get storager metadata
- Read: read file content
- Write: write content into file
- Stat: get file's metadata
- Delete: delete a file or directory
- List: list file in prefix or dir styles

Extended operations

- Copy: copy a file inside storager
- Move: move a file inside storager
- Reach: generate a public accessible url

Multi object modes support

- Multipart: allow doing multipart uploads
- Append: allow appending to an object
- Block: allow combining an object with block ids.
- Page: allow doing random writes

### Object metadata support

Common metadata

- `id`: unique key in service
- `name`: relative path towards service's work dir
- `type`: object type cloud be `file`, `dir`, `link` or `unknown`

Optional metadata

- `size`: object's content size.
- `updated-at`: object's last updated time.
- `content-md5`: md5 digest as defined in [rfc2616](https://tools.ietf.org/html/rfc2616#section-14.15)
- `content-type`: media type as defined in [rfc2616](https://tools.ietf.org/html/rfc2616#section-14.17)
- `etag`: entity tag as defined in [rfc2616](https://tools.ietf.org/html/rfc2616#section-14.19)

## Quick Start

```go
package main

import (
	"bytes"
	"log"

	"github.com/aos-dev/go-storage/v3/pairs"
	"github.com/aos-dev/go-service-fs/v2"
)

func main() {
	// Init a service.
	store, err := fs.NewStorager(pairs.WithWorkDir("/tmp"))
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

## Sponsor

<a href="https://vercel.com?utm_source=aos-dev&utm_campaign=oss">
    <img src="/img/vercel_logo_dark.svg" />
</a>

