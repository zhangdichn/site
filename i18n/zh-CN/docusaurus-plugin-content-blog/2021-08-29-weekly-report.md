---
title: "2021-34 Weekly Report"
author: "Prnyself"
author_url: "https://github.com/Prnyself"
tags:
  - updates
  - weekly-report
---

Hello everyone, here is the weekly report for [BeyondStorage][], range from 2021-08-23 to 2021-08-29.

<!--truncate-->

## Here’s what we focused on this week:

### New release

- Beyond-ctl release version 0.0.1
- Go-storage release version 4.6.0
- Go-service-memory release version 0.2.0
- Go-stream release version 0.1.0

### 库

- Implement storager, setup integration test in go-service-bos and go-service-obs
- Add cross build support in go-service-fs
- Fix object size calculated incorrectly while short write in go-service-memory
- Implement IOCallback support in go-service-memory
- Implement CreateLink and setup linker test in go-service-qingstor
- Support IOCallback for WriteMultipart in go-service-qingstor and go-service-s3
- Feature pairs, HTTP Signer and Connection String support in go-storage
- Add ReadFrom and RateLimit support in go-stream
- Fix env HDFS_NAMENODE_ADDR not set correctly in setup-hdfs

### 应用

- Support profile and cp single file in beyond-ctl
- Fix return file info if ls param refers to file in beyond-ftp
- Update UI in beyond-tp

### 社区

- [@abyss-w][] promoted as go-storage Reviewer
- [@xiongjiwei][] promoted as go-storage Maintainer
- Fix connection string example
- Add `basic` example in credential
- Add channel for WeChat
- Add docs for beyond-ctl

## Weekly Stats

|        | Opened this week | Closed this week |
| ------ | ---------------- | ---------------- |
| Issues | 21               | 29               |
| PR's   | 60               | 78               |

## [beyond-ctl](https://github.com/beyondstorage/beyond-ctl)

- [@Xuanwo][] merged pull request [Implement BCP-7: Add Profile Support](https://github.com/beyondstorage/beyond-ctl/pull/10)
- [@Xuanwo][] closed issue [Tracking issue of BCP-7: Add Profile Support](https://github.com/beyondstorage/beyond-ctl/issues/9)
- [@Xuanwo][] closed issue [Profile support](https://github.com/beyondstorage/beyond-ctl/issues/6)
- [@Prnyself][] opened pull request [cmd: Implement copy small file](https://github.com/beyondstorage/beyond-ctl/pull/11)
- [@Xuanwo][] opened issue [Profile support via env](https://github.com/beyondstorage/beyond-ctl/issues/12)
- [@Prnyself][] closed pull request [cmd: Implement cp small file](https://github.com/beyondstorage/beyond-ctl/pull/5)
- [@Xuanwo][] opened pull request [reafctor: Code cleanup](https://github.com/beyondstorage/beyond-ctl/pull/13)
- [@Xuanwo][] opened pull request [feat: Add all stable service support](https://github.com/beyondstorage/beyond-ctl/pull/14)
- [@Xuanwo][] merged pull request [feat: Add all stable service support](https://github.com/beyondstorage/beyond-ctl/pull/14)
- [@Xuanwo][] opened pull request [ci: Run on the latest stable go version only](https://github.com/beyondstorage/beyond-ctl/pull/15)
- [@Prnyself][] merged pull request [reafctor: Code cleanup](https://github.com/beyondstorage/beyond-ctl/pull/13)
- [@Xuanwo][] merged pull request [ci: Run on the latest stable go version only](https://github.com/beyondstorage/beyond-ctl/pull/15)
- [@Xuanwo][] opened pull request [docs: Update README](https://github.com/beyondstorage/beyond-ctl/pull/17)
- [@Xuanwo][] merged pull request [docs: Update README](https://github.com/beyondstorage/beyond-ctl/pull/17)
- [@Xuanwo][] opened issue [Setup integration tests](https://github.com/beyondstorage/beyond-ctl/issues/18)
- [@Xuanwo][] opened issue [Respect LS_COLORS](https://github.com/beyondstorage/beyond-ctl/issues/19)
- [@Xuanwo][] opened pull request [ci: Add Dockerfile](https://github.com/beyondstorage/beyond-ctl/pull/20)
- [@Xuanwo][] merged pull request [ci: Add Dockerfile](https://github.com/beyondstorage/beyond-ctl/pull/20)
- [@Xuanwo][] merged pull request [build(deps): Bump github.com/beyondstorage/go-service-fs/v3 from 3.3.0 to 3.4.0](https://github.com/beyondstorage/beyond-ctl/pull/16)
- [@Prnyself][] opened pull request [proposal: parse profile input](https://github.com/beyondstorage/beyond-ctl/pull/21)
- [@Prnyself][] opened issue [Tracking issue of BCP-21: Parse Profile Input](https://github.com/beyondstorage/beyond-ctl/issues/22)
- [@Xuanwo][] merged pull request [BCP-21: Parse Profile Input](https://github.com/beyondstorage/beyond-ctl/pull/21)
- [@Xuanwo][] opened issue [Add long format for ls](https://github.com/beyondstorage/beyond-ctl/issues/23)
- [@Prnyself][] opened pull request [Implement BCP-21: Parse Profile Input](https://github.com/beyondstorage/beyond-ctl/pull/24)
- [@Xuanwo][] merged pull request [Implement BCP-21: Parse Profile Input](https://github.com/beyondstorage/beyond-ctl/pull/24)
- [@Xuanwo][] merged pull request [build(deps): Bump github.com/BurntSushi/toml from 0.3.1 to 0.4.1](https://github.com/beyondstorage/beyond-ctl/pull/25)
- [@Xuanwo][] closed issue [Profile support via env](https://github.com/beyondstorage/beyond-ctl/issues/12)
- [@Xuanwo][] opened pull request [feat: Use Result channel instead of seperate error channel](https://github.com/beyondstorage/beyond-ctl/pull/26)
- [@Prnyself][] merged pull request [feat: Use Result channel instead of seperate error channel](https://github.com/beyondstorage/beyond-ctl/pull/26)
- [@Prnyself][] closed issue [Tracking issue of BCP-21: Parse Profile Input](https://github.com/beyondstorage/beyond-ctl/issues/22)
- [@Xuanwo][] opened pull request [feat: Implement long format support](https://github.com/beyondstorage/beyond-ctl/pull/27)
- [@Prnyself][] opened pull request [feat: Implement cp large file by multipart upload](https://github.com/beyondstorage/beyond-ctl/pull/28)
- [@Xuanwo][] opened issue [Add migrate support](https://github.com/beyondstorage/beyond-ctl/issues/29)
- [@Prnyself][] opened issue [Get wrong value from environment variable](https://github.com/beyondstorage/beyond-ctl/issues/30)
- [@Xuanwo][] closed issue [Add migrate support](https://github.com/beyondstorage/beyond-ctl/issues/29)
- [@Prnyself][] merged pull request [feat: Implement long format support](https://github.com/beyondstorage/beyond-ctl/pull/27)
- [@Prnyself][] opened pull request [config/profile: Fix environ value not split correctly](https://github.com/beyondstorage/beyond-ctl/pull/31)
- [@Xuanwo][] merged pull request [fix: Profile environ value not split correctly](https://github.com/beyondstorage/beyond-ctl/pull/31)
- [@Xuanwo][] closed issue [Get wrong value from environment variable](https://github.com/beyondstorage/beyond-ctl/issues/30)
- [@Xuanwo][] closed issue [Add long format for ls](https://github.com/beyondstorage/beyond-ctl/issues/23)
- [@Xuanwo][] merged pull request [feat: Implement cp large file by multipart upload](https://github.com/beyondstorage/beyond-ctl/pull/28)
- [@Xuanwo][] opened issue [Support speed limit for io operations](https://github.com/beyondstorage/beyond-ctl/issues/32)
- [@Xuanwo][] opened pull request [refactor: Refactor CopyFileViaMultipart via PartResult](https://github.com/beyondstorage/beyond-ctl/pull/34)
- [@Xuanwo][] merged pull request [refactor: Refactor CopyFileViaMultipart via PartResult](https://github.com/beyondstorage/beyond-ctl/pull/34)
- [@Xuanwo][] opened pull request [feat: Add speed limit support](https://github.com/beyondstorage/beyond-ctl/pull/35)
- [@Xuanwo][] closed pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.5.0 to 4.6.0](https://github.com/beyondstorage/beyond-ctl/pull/33)
- [@Xuanwo][] closed issue [Support speed limit for I/O operations](https://github.com/beyondstorage/beyond-ctl/issues/32)
- [@Prnyself][] merged pull request [feat: Add speed limit support](https://github.com/beyondstorage/beyond-ctl/pull/35)
- [@Prnyself][] opened pull request [fix: Profile list always print error log](https://github.com/beyondstorage/beyond-ctl/pull/36)
- [@Xuanwo][] merged pull request [fix: Profile list always print error log](https://github.com/beyondstorage/beyond-ctl/pull/36)
- [@Xuanwo][] opened issue [multipart-threshold should use string represent like speed limit](https://github.com/beyondstorage/beyond-ctl/issues/37)
- [@Prnyself][] opened pull request [cmd/cp: Fix flag multipart-threshold into string](https://github.com/beyondstorage/beyond-ctl/pull/38)
- [@Xuanwo][] merged pull request [cmd/cp: Fix flag multipart-threshold into string](https://github.com/beyondstorage/beyond-ctl/pull/38)
- [@Xuanwo][] closed issue [multipart-threshold should use string represent like speed limit](https://github.com/beyondstorage/beyond-ctl/issues/37)
- [@Prnyself][] opened pull request [multipart: Fix part size calculated failed](https://github.com/beyondstorage/beyond-ctl/pull/39)
- [@Xuanwo][] merged pull request [multipart: Fix part size calculated failed](https://github.com/beyondstorage/beyond-ctl/pull/39)
- [@Prnyself][] opened pull request [Bump to version 0.1.0](https://github.com/beyondstorage/beyond-ctl/pull/40)
- [@Xuanwo][] merged pull request [Bump to version 0.1.0](https://github.com/beyondstorage/beyond-ctl/pull/40)
- [@Xuanwo][] opened pull request [Revert "Bump to version 0.1.0"](https://github.com/beyondstorage/beyond-ctl/pull/41)
- [@Xuanwo][] closed pull request [Revert "Bump to version 0.1.0"](https://github.com/beyondstorage/beyond-ctl/pull/41)
- [@Prnyself][] opened pull request [Bump to version 0.0.1](https://github.com/beyondstorage/beyond-ctl/pull/42)
- [@Xuanwo][] merged pull request [Bump to version 0.0.1](https://github.com/beyondstorage/beyond-ctl/pull/42)

## [beyond-ftp](https://github.com/beyondstorage/beyond-ftp)

- [@Xuanwo][] merged pull request [fix: Return file information if ls parameter refers to a file](https://github.com/beyondstorage/beyond-ftp/pull/17)
- [@xiongjiwei][] opened pull request [test: setup integration test in github workflow](https://github.com/beyondstorage/beyond-ftp/pull/19)

## [beyond-tp](https://github.com/beyondstorage/beyond-tp)

- [@zhangdichn][] merged pull request [ui: Add agents pages and message component](https://github.com/beyondstorage/beyond-tp/pull/150)
- [@zhangdichn][] merged pull request [ui: update confirm compontent](https://github.com/beyondstorage/beyond-tp/pull/149)

## [community](https://github.com/beyondstorage/community)

- [@Xuanwo][] merged pull request [RFC-39: Promote abyss-w as go-storage Reviewer](https://github.com/beyondstorage/community/pull/39)
- [@JinnyYi][] opened pull request [proposal: Promote xiongjiwei as go-storage Reviewer](https://github.com/beyondstorage/community/pull/41)
- [@Xuanwo][] merged pull request [RFC-41: Promote xiongjiwei as go-storage Reviewer](https://github.com/beyondstorage/community/pull/41)
- [@Xuanwo][] opened pull request [ci: Add schedule for team sync](https://github.com/beyondstorage/community/pull/42)
- [@Xuanwo][] merged pull request [ci: Add schedule for team sync](https://github.com/beyondstorage/community/pull/42)
- [@Xuanwo][] closed issue [Weekly report since 2021-08-16](https://github.com/beyondstorage/community/issues/40)

## [go-endpoint](https://github.com/beyondstorage/go-endpoint)

- [@Xuanwo][] opened issue [Add support for `://`](https://github.com/beyondstorage/go-endpoint/issues/15)

## [go-integration-test](https://github.com/beyondstorage/go-integration-test)

- [@Xuanwo][] opened issue [All service should support IoCallback](https://github.com/beyondstorage/go-integration-test/issues/51)
- [@Xuanwo][] closed issue [copy/move to an existing dir failed for object storage services](https://github.com/beyondstorage/go-integration-test/issues/39)
- [@Xuanwo][] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.4.0 to 4.6.0](https://github.com/beyondstorage/go-integration-test/pull/52)

## [go-service-azblob](https://github.com/beyondstorage/go-service-azblob)

- [@Xuanwo][] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.4.0 to 4.5.0](https://github.com/beyondstorage/go-service-azblob/pull/46)
- [@Xuanwo][] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.5.0 to 4.6.0](https://github.com/beyondstorage/go-service-azblob/pull/47)
- [@Xuanwo][] merged pull request [build(deps): bump github.com/beyondstorage/go-endpoint from 1.0.1 to 1.1.0](https://github.com/beyondstorage/go-service-azblob/pull/44)
- [@Xuanwo][] merged pull request [build(deps): bump github.com/beyondstorage/go-integration-test/v4 from 4.2.0 to 4.3.0](https://github.com/beyondstorage/go-service-azblob/pull/45)

## [go-service-bos](https://github.com/beyondstorage/go-service-bos)

- [@JinnyYi][] merged pull request [feat: initial implement storager](https://github.com/beyondstorage/go-service-bos/pull/3)
- [@abyss-w][] opened pull request [feat:Initial implementation of Servicer and setup integration test](https://github.com/beyondstorage/go-service-bos/pull/4)
- [@abyss-w][] opened pull request [feat: Setup integration test](https://github.com/beyondstorage/go-service-bos/pull/5)
- [@Xuanwo][] merged pull request [feat: Setup integration test](https://github.com/beyondstorage/go-service-bos/pull/5)
- [@Xuanwo][] closed pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.4.0 to 4.5.0](https://github.com/beyondstorage/go-service-bos/pull/2)

## [go-service-fs](https://github.com/beyondstorage/go-service-fs)

- [@Xuanwo][] opened issue [Add js/wasm build target support](https://github.com/beyondstorage/go-service-fs/issues/71)
- [@Xuanwo][] opened pull request [feat: Add cross build support](https://github.com/beyondstorage/go-service-fs/pull/72)
- [@Xuanwo][] merged pull request [feat: Add cross build support](https://github.com/beyondstorage/go-service-fs/pull/72)
- [@Xuanwo][] closed issue [Add js/wasm build target support](https://github.com/beyondstorage/go-service-fs/issues/71)
- [@Xuanwo][] opened issue [Set LastModified for directory](https://github.com/beyondstorage/go-service-fs/issues/73)

## [go-service-hdfs](https://github.com/beyondstorage/go-service-hdfs)

- [@bokket][] opened pull request [feat:Add utils and readdir test](https://github.com/beyondstorage/go-service-hdfs/pull/21)

## [go-service-memory](https://github.com/beyondstorage/go-service-memory)

- [@Xuanwo][] opened issue [Set object size via real write data instead user input size](https://github.com/beyondstorage/go-service-memory/issues/20)
- [@Xuanwo][] opened pull request [fix: Object size calculated incorrectly while short write](https://github.com/beyondstorage/go-service-memory/pull/21)
- [@Xuanwo][] merged pull request [fix: Object size calculated incorrectly while short write](https://github.com/beyondstorage/go-service-memory/pull/21)
- [@Xuanwo][] opened pull request [Bump to version 0.2.0](https://github.com/beyondstorage/go-service-memory/pull/22)
- [@Xuanwo][] merged pull request [Bump to version 0.2.0](https://github.com/beyondstorage/go-service-memory/pull/22)
- [@Xuanwo][] closed issue [Set object size via real write data instead user input size](https://github.com/beyondstorage/go-service-memory/issues/20)
- [@Xuanwo][] opened pull request [feat: Implement IoCallback support](https://github.com/beyondstorage/go-service-memory/pull/23)
- [@Xuanwo][] merged pull request [feat: Implement IoCallback support](https://github.com/beyondstorage/go-service-memory/pull/23)

## [go-service-obs](https://github.com/beyondstorage/go-service-obs)

- [@abyss-w][] opened pull request [chore: Rename the package](https://github.com/beyondstorage/go-service-obs/pull/2)
- [@Xuanwo][] merged pull request [chore: Rename the package](https://github.com/beyondstorage/go-service-obs/pull/2)
- [@Xuanwo][] closed pull request [Bump github.com/beyondstorage/go-storage/v4 from 4.4.0 to 4.6.0](https://github.com/beyondstorage/go-service-obs/pull/1)
- [@abyss-w][] opened pull request [feat: Initial Implementation of Storager](https://github.com/beyondstorage/go-service-obs/pull/3)
- [@Xuanwo][] merged pull request [feat: Initial Implementation of Storager](https://github.com/beyondstorage/go-service-obs/pull/3)
- [@abyss-w][] opened pull request [feat: Setup Integration Test](https://github.com/beyondstorage/go-service-obs/pull/4)

## [go-service-qingstor](https://github.com/beyondstorage/go-service-qingstor)

- [@abyss-w][] opened pull request [fix: Fixed append test failures](https://github.com/beyondstorage/go-service-qingstor/pull/84)
- [@Xuanwo][] merged pull request [fix: Fixed append test failures](https://github.com/beyondstorage/go-service-qingstor/pull/84)
- [@JinnyYi][] merged pull request [feat: Implement CreateLink and setup linker test in go-service-qingstor](https://github.com/beyondstorage/go-service-qingstor/pull/81)
- [@Xuanwo][] closed issue [CreateAppend not meet GSP-134 Write Behavior Consistency](https://github.com/beyondstorage/go-service-qingstor/issues/83)
- [@JinnyYi][] closed issue [Service tracking issue for GSP-86: Add CreateLink Operation](https://github.com/beyondstorage/go-service-qingstor/issues/64)
- [@Xuanwo][] opened issue [write_multipart needs to support io_callback](https://github.com/beyondstorage/go-service-qingstor/issues/85)
- [@abyss-w][] opened pull request [feat: Write_multipart adds io_callback support](https://github.com/beyondstorage/go-service-qingstor/pull/86)
- [@Xuanwo][] merged pull request [feat: WriteMultipart adds io_callback support](https://github.com/beyondstorage/go-service-qingstor/pull/86)
- [@Xuanwo][] closed issue [write_multipart needs to support io_callback](https://github.com/beyondstorage/go-service-qingstor/issues/85)
- [@Prnyself][] opened pull request [mod: Bump qingstor-sdk-go to version 4.4.0](https://github.com/beyondstorage/go-service-qingstor/pull/87)
- [@Xuanwo][] merged pull request [mod: Bump qingstor-sdk-go to version 4.4.0](https://github.com/beyondstorage/go-service-qingstor/pull/87)

## [go-service-s3](https://github.com/beyondstorage/go-service-s3)

- [@JinnyYi][] closed issue [Service tracking issue for GSP-86: Add CreateLink Operation](https://github.com/beyondstorage/go-service-s3/issues/144)
- [@Xuanwo][] opened pull request [feat: Add IoCallback for multipart](https://github.com/beyondstorage/go-service-s3/pull/196)
- [@Xuanwo][] merged pull request [feat: Add IoCallback for multipart](https://github.com/beyondstorage/go-service-s3/pull/196)
- [@Xuanwo][] opened pull request [fix: IoCallback in WriteMultipart not supported correctly](https://github.com/beyondstorage/go-service-s3/pull/198)
- [@Xuanwo][] merged pull request [fix: IoCallback in WriteMultipart not supported correctly](https://github.com/beyondstorage/go-service-s3/pull/198)

## [go-storage](https://github.com/beyondstorage/go-storage)

- [@JinnyYi][] opened pull request [feat: Support features and default paris in connection string](https://github.com/beyondstorage/go-storage/pull/713)
- [@Xuanwo][] merged pull request [feat: Support features and default paris in connection string](https://github.com/beyondstorage/go-storage/pull/713)
- [@JinnyYi][] opened pull request [definitions: Fix naming format for http signer](https://github.com/beyondstorage/go-storage/pull/714)
- [@Xuanwo][] merged pull request [definitions: Fix naming format for http signer](https://github.com/beyondstorage/go-storage/pull/714)
- [@Xuanwo][] opened issue [What error should be return if input reader is short than expected?](https://github.com/beyondstorage/go-storage/issues/715)
- [@JinnyYi][] opened pull request [feat: Set *Features with feature pairs](https://github.com/beyondstorage/go-storage/pull/716)
- [@houz42][] opened issue [bug: connection string example is inconsistent with implementation](https://github.com/beyondstorage/go-storage/issues/717)
- [@Xuanwo][] merged pull request [feat: Set Features with feature pairs](https://github.com/beyondstorage/go-storage/pull/716)
- [@Xuanwo][] closed issue [bug: connection string example is inconsistent with implementation](https://github.com/beyondstorage/go-storage/issues/717)
- [@Xuanwo][] opened pull request [feat: Allow append pairs for  New{Servicer,Storager}FromString](https://github.com/beyondstorage/go-storage/pull/718)
- [@JinnyYi][] opened pull request [feat: Set DefaultPairs with defaultable pairs](https://github.com/beyondstorage/go-storage/pull/719)
- [@JinnyYi][] merged pull request [feat: Allow append pairs for  New{Servicer,Storager}FromString](https://github.com/beyondstorage/go-storage/pull/718)
- [@Xuanwo][] merged pull request [feat: Set DefaultPairs with defaultable pairs](https://github.com/beyondstorage/go-storage/pull/719)
- [@JinnyYi][] closed pull request [feat: Implement GSP-700 Config Features and DefaultPairs via Connection String](https://github.com/beyondstorage/go-storage/pull/699)
- [@JinnyYi][] opened pull request [cmd/definitions: Remove conflict from pair](https://github.com/beyondstorage/go-storage/pull/720)
- [@Xuanwo][] merged pull request [cmd/definitions: Remove conflict from pair](https://github.com/beyondstorage/go-storage/pull/720)
- [@Xuanwo][] closed issue [Reduce dependencies size](https://github.com/beyondstorage/go-storage/issues/650)
- [@Xuanwo][] closed issue [Build RFC list via docusaurus plugin](https://github.com/beyondstorage/go-storage/issues/645)
- [@Xuanwo][] closed issue [Tracking issue for GSP-90: Re-support Initialization Via Connection String](https://github.com/beyondstorage/go-storage/issues/600)
- [@Xuanwo][] closed issue [WebDAV based on go-storage](https://github.com/beyondstorage/go-storage/issues/630)
- [@Xuanwo][] closed issue [Tracking issue for GSP-86: Add CreateLink Operation](https://github.com/beyondstorage/go-storage/issues/611)
- [@Xuanwo][] closed issue [Idea: Work in Kubernetes](https://github.com/beyondstorage/go-storage/issues/632)
- [@Xuanwo][] opened pull request [ci: Add cross build](https://github.com/beyondstorage/go-storage/pull/721)
- [@Xuanwo][] merged pull request [ci: Add cross build](https://github.com/beyondstorage/go-storage/pull/721)
- [@Xuanwo][] closed issue [idea: add ARM support](https://github.com/beyondstorage/go-storage/issues/662)
- [@Xuanwo][] closed issue [Connection string needs to support config StorageFeatures and DefaultPairs](https://github.com/beyondstorage/go-storage/issues/680)
- [@JinnyYi][] opened pull request [Bump to version 4.6.0](https://github.com/beyondstorage/go-storage/pull/722)
- [@Xuanwo][] merged pull request [Bump to version 4.6.0](https://github.com/beyondstorage/go-storage/pull/722)
- [@Xuanwo][] opened issue [Service/Storage Config Support](https://github.com/beyondstorage/go-storage/issues/723)
- [@JinnyYi][] opened pull request [tests: Add test for NewStorageFromString](https://github.com/beyondstorage/go-storage/pull/724)
- [@Xuanwo][] merged pull request [tests: Add test for NewStoragerFromString](https://github.com/beyondstorage/go-storage/pull/724)
- [@JinnyYi][] opened pull request [Proposal: Add Defaultable Property for Pair](https://github.com/beyondstorage/go-storage/pull/725)
- [@JinnyYi][] opened issue [How to pass `partIndex` to `QuerySignHTTP` for `WriteMultipart`?](https://github.com/beyondstorage/go-storage/issues/726)
- [@JinnyYi][] opened issue [Tracking issue of GSP-725: Add Defaultable Property for Pair](https://github.com/beyondstorage/go-storage/issues/727)
- [@Xuanwo][] merged pull request [GSP-725: Add Defaultable Property for Pair](https://github.com/beyondstorage/go-storage/pull/725)
- [@Xuanwo][] opened pull request [feat: Use go-codegen to generate code for pairs](https://github.com/beyondstorage/go-storage/pull/728)
- [@JinnyYi][] opened pull request [Proposal: Redesign HTTP Signer](https://github.com/beyondstorage/go-storage/pull/729)

## [go-stream](https://github.com/beyondstorage/go-stream)

- [@Xuanwo][] opened pull request [feat: Add ReadFrom support](https://github.com/beyondstorage/go-stream/pull/10)
- [@Xuanwo][] merged pull request [feat: Add ReadFrom support](https://github.com/beyondstorage/go-stream/pull/10)
- [@Xuanwo][] closed issue [Support write via an io.Reader](https://github.com/beyondstorage/go-stream/issues/2)
- [@Xuanwo][] merged pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.4.0 to 4.5.0](https://github.com/beyondstorage/go-stream/pull/9)
- [@Xuanwo][] opened pull request [feat: Add ratelimit support](https://github.com/beyondstorage/go-stream/pull/11)
- [@Xuanwo][] merged pull request [feat: Add ratelimit support](https://github.com/beyondstorage/go-stream/pull/11)
- [@Xuanwo][] closed issue [Add io limit](https://github.com/beyondstorage/go-stream/issues/3)
- [@Xuanwo][] opened pull request [Bump to version 0.1.0](https://github.com/beyondstorage/go-stream/pull/12)
- [@Xuanwo][] merged pull request [Bump to version 0.1.0](https://github.com/beyondstorage/go-stream/pull/12)

## [setup-hdfs](https://github.com/beyondstorage/setup-hdfs)

- [@Xuanwo][] opened pull request [Test on actions](https://github.com/beyondstorage/setup-hdfs/pull/36)
- [@Xuanwo][] merged pull request [fix: env.HDFS_NAMENODE_ADDR not set correctly](https://github.com/beyondstorage/setup-hdfs/pull/36)
- [@Xuanwo][] merged pull request [build(deps-dev): Bump @types/jest from 26.0.24 to 27.0.1](https://github.com/beyondstorage/setup-hdfs/pull/28)
- [@Xuanwo][] merged pull request [build(deps-dev): Bump ts-jest from 27.0.3 to 27.0.5](https://github.com/beyondstorage/setup-hdfs/pull/30)
- [@Xuanwo][] merged pull request [build(deps-dev): Bump @vercel/ncc from 0.28.6 to 0.29.2](https://github.com/beyondstorage/setup-hdfs/pull/32)
- [@Xuanwo][] merged pull request [build(deps): Bump @actions/core from 1.4.0 to 1.5.0](https://github.com/beyondstorage/setup-hdfs/pull/33)
- [@Xuanwo][] merged pull request [build(deps-dev): Bump @types/node from 16.0.0 to 16.7.4](https://github.com/beyondstorage/setup-hdfs/pull/37)
- [@Xuanwo][] merged pull request [build(deps-dev): Bump @vercel/ncc from 0.29.2 to 0.30.0](https://github.com/beyondstorage/setup-hdfs/pull/38)

## [site](https://github.com/beyondstorage/site)

- [@houz42][] opened pull request [fix incorrect connection string example](https://github.com/beyondstorage/site/pull/192)
- [@Xuanwo][] merged pull request [fix incorrect connection string example](https://github.com/beyondstorage/site/pull/192)
- [@Prnyself][] opened pull request [blog: Add 2021-08-22 weekly report](https://github.com/beyondstorage/site/pull/194)
- [@Xuanwo][] merged pull request [blog: Add 2021-08-22 weekly report](https://github.com/beyondstorage/site/pull/194)
- [@JinnyYi][] opened pull request [docs: Update docs for default pairs](https://github.com/beyondstorage/site/pull/196)
- [@hqc19907228][] opened pull request [上传wechat-qr，更新index.md](https://github.com/beyondstorage/site/pull/197)
- [@npofsi][] opened pull request [docs: Add `basic` in credential](https://github.com/beyondstorage/site/pull/198)
- [@Xuanwo][] merged pull request [docs: Add `basic` in credential](https://github.com/beyondstorage/site/pull/198)
- [@Xuanwo][] merged pull request [community: Add channel for WeChat](https://github.com/beyondstorage/site/pull/197)
- [@Xuanwo][] opened pull request [Add docs for beyond-ctl](https://github.com/beyondstorage/site/pull/201)
- [@Xuanwo][] merged pull request [Add docs for beyond-ctl](https://github.com/beyondstorage/site/pull/201)
- [@Xuanwo][] opened issue [Crowdin URL changes](https://github.com/beyondstorage/site/issues/203)
- [@Xuanwo][] closed issue [Crowdin URL changes](https://github.com/beyondstorage/site/issues/203)

[@bokket]: https://github.com/bokket
[@houz42]: https://github.com/houz42
[@npofsi]: https://github.com/npofsi
[@Prnyself]: https://github.com/Prnyself
[@xiongjiwei]: https://github.com/xiongjiwei
[@zhangdichn]: https://github.com/zhangdichn
[@JinnyYi]: https://github.com/JinnyYi
[@abyss-w]: https://github.com/abyss-w
[@Xuanwo]: https://github.com/Xuanwo
[@hqc19907228]: https://github.com/hqc19907228
[BeyondStorage]: https://beyondstorage.io
