---
title: "2021-30 Weekly Report"
author: "Prnyself"
author_url: "https://github.com/Prnyself"
tags: [updates, weekly-report]
---

Hello everyone, here is the weekly report for [BeyondStorage], range from 2021-07-26 to 2021-08-01.

<!--truncate-->

## Here’s what we focused on this week:

### Library:

- Support config features and defaultPairs
- appender: fix a bug that writeAppend will truncate data if file exists in go-service-fs
- feat: Implement CreateLink and setup linker test in go-service-fs
- feat: Implement go-storage.Storager in go-service-ftp
- Implement Appender,Direr and Mover in go-service-hdfs
- Release go-service-minio v0.1.0
- Release go-service-memory v0.1.0
- Release go-endpoint v1.1.0

### Application:

- Implement DMP-110: Refactor task distribute

### Test:

- Fix target check failed for linker
- Add benchmark for read and write in go-service-memory
- Add intergration tests for go-service-memory

### Community:

- Refactor docs organizations
- ui: Change logo
- ui: Fix homepage header style error
- Add MinIO example

## Weekly Stats

| | Opened this week | Closed this week |
| ---- | ---- | ---- |
| Issues | 14 | 21 |
| PR's | 35 | 41 |


## [go-storage](https://github.com/beyondstorage/go-storage)

- [@Xuanwo] merged pull request [CI: Add golangci-lint](https://github.com/beyondstorage/go-storage/pull/690)
- [@Xuanwo] closed issue [Setup golangci-lint for all golang projects](https://github.com/beyondstorage/go-storage/issues/689)
- [@Xuanwo] closed issue [NewStoragerFromString doesn't register service while initiating a new storager](https://github.com/beyondstorage/go-storage/issues/694)
- [@Xuanwo] merged pull request [tests: Implement bench for List](https://github.com/beyondstorage/go-storage/pull/687)
- [@Xuanwo] opened issue [proposal: Adopt  commitizen/conventional-commit-types ](https://github.com/beyondstorage/go-storage/issues/695)
- [@Xuanwo] opened pull request [docs: Update go-storage docs link](https://github.com/beyondstorage/go-storage/pull/696)
- [@Xuanwo] merged pull request [docs: Update go-storage docs link](https://github.com/beyondstorage/go-storage/pull/696)
- [@Xuanwo] closed issue [Tracking issue for GSP-134: Write Behavior Consistency](https://github.com/beyondstorage/go-storage/issues/624)
- [@Xuanwo] closed issue [Tracking issue for GSP-654: Unify List Behavior](https://github.com/beyondstorage/go-storage/issues/657)
- [@abyss-w] opened pull request [fix: Correction of CreateLink description error](https://github.com/beyondstorage/go-storage/pull/697)
- [@Xuanwo] closed issue [Integration tests for virtual features](https://github.com/beyondstorage/go-storage/issues/683)
- [@abyss-w] closed pull request [fix: Correction of CreateLink description error](https://github.com/beyondstorage/go-storage/pull/697)
- [@abyss-w] opened pull request [fix: Fixed a description error in CreateLink](https://github.com/beyondstorage/go-storage/pull/698)
- [@Xuanwo] merged pull request [fix: Fixed a description error in CreateLink](https://github.com/beyondstorage/go-storage/pull/698)
- [@JinnyYi] opened pull request [Support config features and defaultPairs](https://github.com/beyondstorage/go-storage/pull/699)

## [noah](https://github.com/beyondstorage/noah)

## [go-coreutils](https://github.com/beyondstorage/go-coreutils)

## [go-integration-test](https://github.com/beyondstorage/go-integration-test)

- [@Xuanwo] merged pull request [Split TestCopier and TestMover](https://github.com/beyondstorage/go-integration-test/pull/42)
- [@xiongjiwei] opened pull request [appender: add test for append to a exists file](https://github.com/beyondstorage/go-integration-test/pull/44)
- [@Xuanwo] merged pull request [appender: add test for append to a exists file](https://github.com/beyondstorage/go-integration-test/pull/44)
- [@Xuanwo] closed issue [Add test for double writeAppend ](https://github.com/beyondstorage/go-integration-test/issues/43)
- [@Xuanwo] opened issue [Introduce fuzz tests](https://github.com/beyondstorage/go-integration-test/issues/45)
- [@Xuanwo] opened issue [All service should support read with offset and size](https://github.com/beyondstorage/go-integration-test/issues/46)
- [@Xuanwo] merged pull request [test: Implement GSP-86 Add linker integration tests](https://github.com/beyondstorage/go-integration-test/pull/40)
- [@JinnyYi] opened pull request [Fix target check failed for linker](https://github.com/beyondstorage/go-integration-test/pull/47)
- [@Xuanwo] merged pull request [Fix target check failed for linker](https://github.com/beyondstorage/go-integration-test/pull/47)

## [go-service-fs](https://github.com/beyondstorage/go-service-fs)

- [@xiongjiwei] opened pull request [appender: fix a bug that writeAppend will truncate data if file exists](https://github.com/beyondstorage/go-service-fs/pull/60)
- [@Xuanwo] opened pull request [ci: Allow every one run integration tests](https://github.com/beyondstorage/go-service-fs/pull/61)
- [@Xuanwo] merged pull request [ci: Allow every one run integration tests](https://github.com/beyondstorage/go-service-fs/pull/61)
- [@Xuanwo] merged pull request [appender: fix a bug that writeAppend will truncate data if file exists](https://github.com/beyondstorage/go-service-fs/pull/60)
- [@Xuanwo] closed issue [writeAppend will truncate the data if file exists](https://github.com/beyondstorage/go-service-fs/issues/59)
- [@JinnyYi] opened issue [Stat returns error when path is a symlink that point to a non-existent file](https://github.com/beyondstorage/go-service-fs/issues/62)
- [@abyss-w] opened pull request [feat: Implement CreateLink and setup linker test in go-service-fs](https://github.com/beyondstorage/go-service-fs/pull/63)
- [@JinnyYi] opened pull request [Add EvalSymlinks](https://github.com/beyondstorage/go-service-fs/pull/64)

## [go-service-example](https://github.com/beyondstorage/go-service-example)

## [go-service-azblob](https://github.com/beyondstorage/go-service-azblob)


## [go-service-cos](https://github.com/beyondstorage/go-service-cos)


## [go-service-dropbox](https://github.com/beyondstorage/go-service-dropbox)

## [go-service-gcs](https://github.com/beyondstorage/go-service-gcs)


## [go-service-kodo](https://github.com/beyondstorage/go-service-kodo)


## [go-service-oss](https://github.com/beyondstorage/go-service-oss)


## [go-service-qingstor](https://github.com/beyondstorage/go-service-qingstor)


## [go-service-s3](https://github.com/beyondstorage/go-service-s3)


## [go-service-uss](https://github.com/beyondstorage/go-service-uss)

## [rs-storage](https://github.com/beyondstorage/rs-storage)

## [site](https://github.com/beyondstorage/site)

- [@Xuanwo] opened pull request [docs: Update names](https://github.com/beyondstorage/site/pull/148)
- [@aeinrw] opened pull request [docs: Add docs for minio](https://github.com/beyondstorage/site/pull/149)
- [@Xuanwo] merged pull request [docs: Add docs for minio](https://github.com/beyondstorage/site/pull/149)
- [@Prnyself] opened pull request [blog: Add 2021-07-26 weekly report](https://github.com/beyondstorage/site/pull/150)
- [@Xuanwo] merged pull request [blog: Add 2021-07-26 weekly report](https://github.com/beyondstorage/site/pull/150)
- [@Xuanwo] merged pull request [New Crowdin updates](https://github.com/beyondstorage/site/pull/137)
- [@Xuanwo] merged pull request [New Crowdin updates](https://github.com/beyondstorage/site/pull/151)
- [@Xuanwo] opened pull request [docs: Refactor docs organizations](https://github.com/beyondstorage/site/pull/152)
- [@Xuanwo] merged pull request [docs: Refactor docs organizations](https://github.com/beyondstorage/site/pull/152)
- [@Xuanwo] closed issue [Add comment system support](https://github.com/beyondstorage/site/issues/32)
- [@Xuanwo] closed issue [Unify icons for objects in storager](https://github.com/beyondstorage/site/issues/28)
- [@Xuanwo] opened pull request [ci: Add workflows for crowdin](https://github.com/beyondstorage/site/pull/154)
- [@Xuanwo] merged pull request [ci: Add workflows for crowdin](https://github.com/beyondstorage/site/pull/154)
- [@Xuanwo] merged pull request [New Crowdin updates](https://github.com/beyondstorage/site/pull/153)
- [@Xuanwo] opened pull request [docs: Add contributor-guide](https://github.com/beyondstorage/site/pull/155)
- [@Xuanwo] merged pull request [docs: Add contributor-guide](https://github.com/beyondstorage/site/pull/155)
- [@Xuanwo] closed issue [Add Contributor Guide](https://github.com/beyondstorage/site/issues/146)
- [@Xuanwo] opened issue [Add quick example for all operations](https://github.com/beyondstorage/site/issues/156)
- [@Xuanwo] opened issue [docs for ](https://github.com/beyondstorage/site/issues/157)
- [@Xuanwo] opened issue [Can we embed code example from go-storage-example directly?](https://github.com/beyondstorage/site/issues/158)
- [@Xuanwo] opened pull request [ci: Use squash merge instead](https://github.com/beyondstorage/site/pull/160)
- [@Xuanwo] merged pull request [ci: Use squash merge instead](https://github.com/beyondstorage/site/pull/160)
- [@Xuanwo] closed pull request [New Crowdin updates](https://github.com/beyondstorage/site/pull/159)
- [@Xuanwo] opened pull request [docs: Update operations behavior](https://github.com/beyondstorage/site/pull/161)
- [@Xuanwo] merged pull request [docs: Update operations behavior](https://github.com/beyondstorage/site/pull/161)
- [@Xuanwo] closed pull request [New Crowdin updates](https://github.com/beyondstorage/site/pull/162)
- [@Xuanwo] merged pull request [New Crowdin updates](https://github.com/beyondstorage/site/pull/163)
- [@zhangdichn] opened pull request [ui: Change logo](https://github.com/beyondstorage/site/pull/164)
- [@Prnyself] merged pull request [ui: Change logo](https://github.com/beyondstorage/site/pull/164)
- [@zhangdichn] opened pull request [ui: Change homepage favicon.ico](https://github.com/beyondstorage/site/pull/165)
- [@Xuanwo] merged pull request [ui: Change homepage favicon.ico](https://github.com/beyondstorage/site/pull/165)
- [@zhangdichn] opened pull request [ui: Fix homepage header style error](https://github.com/beyondstorage/site/pull/168)
- [@Xuanwo] merged pull request [ui: Fix homepage header style error](https://github.com/beyondstorage/site/pull/168)
- [@Xuanwo] merged pull request [build(deps): Bump @docusaurus/core from 2.0.0-beta.3 to 2.0.0-beta.4](https://github.com/beyondstorage/site/pull/166)
- [@Xuanwo] merged pull request [build(deps): Bump @docusaurus/preset-classic from 2.0.0-beta.3 to 2.0.0-beta.4](https://github.com/beyondstorage/site/pull/167)

## [specs](https://github.com/beyondstorage/specs)

## [beyond-tp](https://github.com/beyondstorage/beyond-tp)

- [@Prnyself] opened pull request [Implement DMP-110: Refactor task distribute](https://github.com/beyondstorage/beyond-tp/pull/122)
- [@Xuanwo] merged pull request [Implement DMP-110: Refactor task distribute](https://github.com/beyondstorage/beyond-tp/pull/122)

## [go-toolbox](https://github.com/beyondstorage/go-toolbox)

## [go-storage-example](https://github.com/beyondstorage/go-storage-example)

- [@aeinrw] opened pull request [Add MinIO example](https://github.com/beyondstorage/go-storage-example/pull/15)
- [@Xuanwo] merged pull request [Add MinIO example](https://github.com/beyondstorage/go-storage-example/pull/15)

## [go-service-webdav](https://github.com/beyondstorage/go-service-webdav)

## [go-service-ftp](https://github.com/beyondstorage/go-service-ftp)

- [@npofsi] opened pull request [update: func create, delete, read and write implemented](https://github.com/beyondstorage/go-service-ftp/pull/12)
- [@npofsi] closed pull request [update: func create, delete, read and write implemented](https://github.com/beyondstorage/go-service-ftp/pull/12)
- [@npofsi] opened pull request [feat: Implement go-storage.Storager](https://github.com/beyondstorage/go-service-ftp/pull/13)

## [go-service-minio](https://github.com/beyondstorage/go-service-minio)

- [@Xuanwo] merged pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0](https://github.com/beyondstorage/go-service-minio/pull/17)
- [@aeinrw] opened pull request [Bump to version v0.1.0](https://github.com/beyondstorage/go-service-minio/pull/18)
- [@Xuanwo] merged pull request [Bump to version v0.1.0](https://github.com/beyondstorage/go-service-minio/pull/18)
- [@Prnyself] closed issue [ Add MinIO support for go-storage](https://github.com/beyondstorage/go-service-minio/issues/2)

## [go-service-hdfs](https://github.com/beyondstorage/go-service-hdfs)

- [@bokket] opened issue [How can we do this in the list method without having to represent Context?](https://github.com/beyondstorage/go-service-hdfs/issues/14)
- [@bokket] opened pull request [Implement HDFS for go-storage](https://github.com/beyondstorage/go-service-hdfs/pull/15)
- [@bokket] opened issue [ReadDir by offset instead read all content at once](https://github.com/beyondstorage/go-service-hdfs/issues/16)
- [@Xuanwo] merged pull request [Implement HDFS for go-storage](https://github.com/beyondstorage/go-service-hdfs/pull/15)
- [@Xuanwo] closed issue [How can we do this in the list method without having to represent Context?](https://github.com/beyondstorage/go-service-hdfs/issues/14)
- [@Xuanwo] closed issue [HDFS does not have the Context's method inside the storage delete operation](https://github.com/beyondstorage/go-service-hdfs/issues/8)
- [@bokket] opened issue [Copier operation uses local cache when dst file path exists](https://github.com/beyondstorage/go-service-hdfs/issues/17)
- [@bokket] closed issue [Copier operation uses local cache when dst file path exists](https://github.com/beyondstorage/go-service-hdfs/issues/17)
- [@bokket] opened pull request [Implement HDFS for Appender,Direr and Mover](https://github.com/beyondstorage/go-service-hdfs/pull/18)

## [go-service-ipfs](https://github.com/beyondstorage/go-service-ipfs)

- [@Xuanwo] closed issue [ipfs for go-storage](https://github.com/beyondstorage/go-service-ipfs/issues/1)

## [go-service-storj](https://github.com/beyondstorage/go-service-storj)

## [beyond-ftp](https://github.com/beyondstorage/beyond-ftp)

## [beyond-fs](https://github.com/beyondstorage/beyond-fs)

## [go-service-onedrive](https://github.com/beyondstorage/go-service-onedrive)

## [go-service-gdrive](https://github.com/beyondstorage/go-service-gdrive)

- [@junaire] closed issue [Tracking issue for RFC 14](https://github.com/beyondstorage/go-service-gdrive/issues/15)
- [@junaire] closed issue [Gdrive use FileId to manipulate data instead of file name](https://github.com/beyondstorage/go-service-gdrive/issues/11)
- [@Xuanwo] merged pull request [Implement basic operations](https://github.com/beyondstorage/go-service-gdrive/pull/13)
- [@junaire] opened pull request [Add cache support](https://github.com/beyondstorage/go-service-gdrive/pull/16)

## [forum-redirect](https://github.com/beyondstorage/forum-redirect)

## [go-service-memory](https://github.com/beyondstorage/go-service-memory)

- [@Xuanwo] opened pull request [tests: Add benchmark for read and write](https://github.com/beyondstorage/go-service-memory/pull/12)
- [@Xuanwo] merged pull request [tests: Add benchmark for read and write](https://github.com/beyondstorage/go-service-memory/pull/12)
- [@Xuanwo] opened pull request [Bump to version 0.1.0](https://github.com/beyondstorage/go-service-memory/pull/13)
- [@Xuanwo] merged pull request [Bump to version 0.1.0](https://github.com/beyondstorage/go-service-memory/pull/13)
- [@Xuanwo] closed issue [Setup benchmark tests](https://github.com/beyondstorage/go-service-memory/issues/10)
- [@xiongjiwei] opened pull request [feat: Add support for Copier, Mover, Appender, Direr](https://github.com/beyondstorage/go-service-memory/pull/14)
- [@Xuanwo] opened pull request [ci: Add intergration tests](https://github.com/beyondstorage/go-service-memory/pull/15)
- [@Xuanwo] merged pull request [ci: Add intergration tests](https://github.com/beyondstorage/go-service-memory/pull/15)

## [go-service-tar](https://github.com/beyondstorage/go-service-tar)


## [go-service-zip](https://github.com/beyondstorage/go-service-zip)

## [go-endpoint](https://github.com/beyondstorage/go-endpoint)

- [@Xuanwo] opened issue [Release version 1.1.0](https://github.com/beyondstorage/go-endpoint/issues/12)
- [@abyss-w] opened pull request [Bump to version 1.1.0](https://github.com/beyondstorage/go-endpoint/pull/13)
- [@Xuanwo] merged pull request [Bump to version 1.1.0](https://github.com/beyondstorage/go-endpoint/pull/13)
- [@Xuanwo] closed issue [Release version 1.1.0](https://github.com/beyondstorage/go-endpoint/issues/12)

## [go-community](https://github.com/beyondstorage/go-community)


## [community](https://github.com/beyondstorage/community)

- [@Xuanwo] opened issue [Weekly report since 2021-07-19](https://github.com/beyondstorage/community/issues/24)
- [@Xuanwo] opened issue [Add weekly stats](https://github.com/beyondstorage/community/issues/25)
- [@Xuanwo] closed issue [Weekly report since 2021-07-19](https://github.com/beyondstorage/community/issues/24)
- [@Xuanwo] closed issue [Weekly report since 2021-07-12](https://github.com/beyondstorage/community/issues/22)
- [@Xuanwo] opened issue [proposal: Separating Leaders](https://github.com/beyondstorage/community/issues/26)
- [@Prnyself] opened pull request [Nominate @zhangdichn as community committer](https://github.com/beyondstorage/community/pull/27)
- [@Xuanwo] closed pull request [Nominate @zhangdichn as community committer](https://github.com/beyondstorage/community/pull/27)

## [setup-hdfs](https://github.com/beyondstorage/setup-hdfs)


## [forum-theme](https://github.com/beyondstorage/forum-theme)

## [beyond-ctl](https://github.com/beyondstorage/beyond-ctl)

## [go-credential](https://github.com/beyondstorage/go-credential)

## [go-fswrap](https://github.com/beyondstorage/go-fswrap)

## [go-service-ocios](https://github.com/beyondstorage/go-service-ocios)

[@Xuanwo]: https://github.com/Xuanwo
[@aeinrw]: https://github.com/aeinrw
[@junaire]: https://github.com/junaire
[@Prnyself]: https://github.com/Prnyself
[@zhangdichn]: https://github.com/zhangdichn
[@npofsi]: https://github.com/npofsi
[@bokket]: https://github.com/bokket
[@abyss-w]: https://github.com/abyss-w
[@JinnyYi]: https://github.com/JinnyYi
[@xiongjiwei]: https://github.com/xiongjiwei
[BeyondStorage]: https://beyondstorage.io