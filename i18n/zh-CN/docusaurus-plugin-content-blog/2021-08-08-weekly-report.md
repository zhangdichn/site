---
title: "2021-31 Weekly Report"
author: "Prnyself"
author_url: "https://github.com/Prnyself"
tags:
  - updates
  - weekly-report
---

Hello everyone, here is the weekly report for [BeyondStorage][], range from 2021-08-02 to 2021-08-08.

<!--truncate-->

## Here’s what we focused on this week:

### Library:

- Improve config features and default pairs via connection string
- Fix workDir not matching when workDir is a symbolic link in go-service-fs
- Implement CreateLink and setup linker test in supported services
- Implement basic credential in go-service-ftp
- Add cache support in go-service-gdrive

### Application:

- Init commit for the FTP server in beyond-ftp
- Add cache layer for write operations in beyond-fs

### Test:

- Release go-service-integration v4.3.0

### Community:

- Release the go-storage 2021Q3 Roadmap

## Weekly Stats

|        | Opened this week | Closed this week |
| ------ | ---------------- | ---------------- |
| Issues | 20               | 12               |
| PR's   | 21               | 27               |

## [go-storage](https://github.com/beyondstorage/go-storage)

- [@JinnyYi][] opened pull request [GSP-700: Config Features and DefaultPairs via Connetion String](https://github.com/beyondstorage/go-storage/pull/700)
- [@JinnyYi][] opened pull request [docs: Update links to matrix](https://github.com/beyondstorage/go-storage/pull/701)
- [@Xuanwo][] merged pull request [docs: Update links to matrix](https://github.com/beyondstorage/go-storage/pull/701)
- [@Xuanwo][] opened issue [Marshal and Unmarshal support for Object](https://github.com/beyondstorage/go-storage/issues/702)
- [@Xuanwo][] closed issue [Marshal and Unmarshal support for Object](https://github.com/beyondstorage/go-storage/issues/702)
- [@Xuanwo][] opened issue [Tracking issues of go-storage 2021Q3 Roadmap](https://github.com/beyondstorage/go-storage/issues/703)

## [go-integration-test](https://github.com/beyondstorage/go-integration-test)

- [@JinnyYi][] opened pull request [Bump to version 4.3.0](https://github.com/beyondstorage/go-integration-test/pull/48)
- [@Xuanwo][] merged pull request [Bump to version 4.3.0](https://github.com/beyondstorage/go-integration-test/pull/48)

## [go-service-fs](https://github.com/beyondstorage/go-service-fs)

- [@Xuanwo][] merged pull request [feat: Implement CreateLink and setup linker test in go-service-fs](https://github.com/beyondstorage/go-service-fs/pull/63)
- [@JinnyYi][] opened issue [Lack of ](https://github.com/beyondstorage/go-service-fs/issues/65)
- [@abyss-w][] opened pull request [fix: Fixed workDir not matching when workDir is a symbolic link](https://github.com/beyondstorage/go-service-fs/pull/66)
- [@Xuanwo][] merged pull request [fix: Fixed workDir not matching when workDir is a symbolic link](https://github.com/beyondstorage/go-service-fs/pull/66)
- [@Xuanwo][] closed issue [Lack of ](https://github.com/beyondstorage/go-service-fs/issues/65)
- [@Xuanwo][] merged pull request [feat: Add EvalSymlinks to fix link related tests](https://github.com/beyondstorage/go-service-fs/pull/64)
- [@JinnyYi][] closed issue [Stat returns error when path is a symlink that point to a non-existent file](https://github.com/beyondstorage/go-service-fs/issues/62)
- [@JinnyYi][] closed issue [Service tracking issue for GSP-86: Add CreateLink Operation](https://github.com/beyondstorage/go-service-fs/issues/52)

## [go-service-oss](https://github.com/beyondstorage/go-service-oss)

- [@abyss-w][] opened pull request [feat: Implement CreateLink and setup linker test in go-service-oss](https://github.com/beyondstorage/go-service-oss/pull/48)
- [@JinnyYi][] merged pull request [feat: Implement CreateLink and setup linker test in go-service-oss](https://github.com/beyondstorage/go-service-oss/pull/48)

## [go-service-s3](https://github.com/beyondstorage/go-service-s3)

- [@Xuanwo][] opened issue [Add docs for all s3 compatible services](https://github.com/beyondstorage/go-service-s3/issues/172)

## [site](https://github.com/beyondstorage/site)

- [@Prnyself][] opened pull request [blog: Add 2021-08-01 weekly report](https://github.com/beyondstorage/site/pull/169)
- [@Xuanwo][] merged pull request [blog: Add 2021-08-01 weekly report](https://github.com/beyondstorage/site/pull/169)
- [@Prnyself][] opened pull request [*: Update links to beyondstorage at matrix](https://github.com/beyondstorage/site/pull/172)
- [@Xuanwo][] opened pull request [feat: Add 2021Q3 roadmap](https://github.com/beyondstorage/site/pull/173)
- [@Xuanwo][] merged pull request [*: Update links to beyondstorage at matrix](https://github.com/beyondstorage/site/pull/172)
- [@Xuanwo][] merged pull request [feat: Add 2021Q3 roadmap](https://github.com/beyondstorage/site/pull/173)

## [beyond-tp](https://github.com/beyondstorage/beyond-tp)

- [@Prnyself][] closed issue [Tracking implement for DMP-110: Refactor Task Distribute](https://github.com/beyondstorage/beyond-tp/issues/120)
- [@Prnyself][] closed issue [Add more service support](https://github.com/beyondstorage/beyond-tp/issues/64)
- [@Prnyself][] opened pull request [docs: Update links to matrix](https://github.com/beyondstorage/beyond-tp/pull/123)
- [@Xuanwo][] merged pull request [docs: Update links to matrix](https://github.com/beyondstorage/beyond-tp/pull/123)

## [go-service-ftp](https://github.com/beyondstorage/go-service-ftp)

- [@Xuanwo][] merged pull request [feat: Implement go-storage.Storager](https://github.com/beyondstorage/go-service-ftp/pull/13)
- [@Xuanwo][] closed issue [Service tracking issue for GSP-127: Add ServiceInternel and RequestThrottled Errors](https://github.com/beyondstorage/go-service-ftp/issues/6)
- [@npofsi][] opened pull request [feat: Implement basic credential](https://github.com/beyondstorage/go-service-ftp/pull/15)
- [@Prnyself][] merged pull request [feat: Implement basic credential](https://github.com/beyondstorage/go-service-ftp/pull/15)
- [@npofsi][] opened pull request [feat: Implement integration test](https://github.com/beyondstorage/go-service-ftp/pull/16)
- [@npofsi][] opened issue [Tracking issue for Integration Test: Implement Integration Test](https://github.com/beyondstorage/go-service-ftp/issues/17)

## [go-service-hdfs](https://github.com/beyondstorage/go-service-hdfs)

- [@Xuanwo][] merged pull request [Implement HDFS for Appender,Direr and Mover](https://github.com/beyondstorage/go-service-hdfs/pull/18)
- [@bokket][] opened pull request [storage: Fix read all content at once when readdir](https://github.com/beyondstorage/go-service-hdfs/pull/20)

## [beyond-ftp](https://github.com/beyondstorage/beyond-ftp)

- [@Prnyself][] opened pull request [*: Fix makefile build cmd](https://github.com/beyondstorage/beyond-ftp/pull/6)
- [@Xuanwo][] merged pull request [*: Fix makefile build cmd](https://github.com/beyondstorage/beyond-ftp/pull/6)
- [@Xuanwo][] merged pull request [ftp server: init commit for the FTP server and testkit](https://github.com/beyondstorage/beyond-ftp/pull/4)
- [@Xuanwo][] opened issue [Use uber/zap as logger](https://github.com/beyondstorage/beyond-ftp/issues/7)
- [@Xuanwo][] opened issue [Add docs for BeyondFTP](https://github.com/beyondstorage/beyond-ftp/issues/8)
- [@Xuanwo][] opened issue [Add more service support](https://github.com/beyondstorage/beyond-ftp/issues/9)
- [@Xuanwo][] opened issue [Add large file support](https://github.com/beyondstorage/beyond-ftp/issues/10)
- [@xiongjiwei][] opened pull request [*: change version to subcommand and add debug mode flag](https://github.com/beyondstorage/beyond-ftp/pull/11)

## [beyond-fs](https://github.com/beyondstorage/beyond-fs)

- [@Xuanwo][] opened pull request [feat: Add cache layer for write operations](https://github.com/beyondstorage/beyond-fs/pull/16)
- [@Xuanwo][] closed pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.2.0 to 4.4.0](https://github.com/beyondstorage/beyond-fs/pull/15)
- [@Xuanwo][] opened issue [Add check for Mulitpart support instead of use directly](https://github.com/beyondstorage/beyond-fs/issues/17)
- [@Xuanwo][] merged pull request [feat: Add cache layer for write operations](https://github.com/beyondstorage/beyond-fs/pull/16)
- [@Xuanwo][] opened issue [Reduce the time spent on Release](https://github.com/beyondstorage/beyond-fs/issues/18)
- [@Xuanwo][] merged pull request [build(deps): bump go.uber.org/atomic from 1.7.0 to 1.9.0](https://github.com/beyondstorage/beyond-fs/pull/19)
- [@Xuanwo][] opened issue [Add limit for memory usage](https://github.com/beyondstorage/beyond-fs/issues/20)

## [go-service-gdrive](https://github.com/beyondstorage/go-service-gdrive)

- [@Xuanwo][] merged pull request [Add cache support](https://github.com/beyondstorage/go-service-gdrive/pull/16)
- [@Xuanwo][] closed issue [Tracking issue for RFC 14](https://github.com/beyondstorage/go-service-gdrive/issues/15)

## [go-service-memory](https://github.com/beyondstorage/go-service-memory)

- [@Xuanwo][] merged pull request [feat: Add support for Copier, Mover, Appender, Direr](https://github.com/beyondstorage/go-service-memory/pull/14)
- [@Xuanwo][] closed issue [Service tracking issue for GSP-127: Add ServiceInternel and RequestThrottled Errors](https://github.com/beyondstorage/go-service-memory/issues/2)
- [@Xuanwo][] merged pull request [build(deps): Bump github.com/beyondstorage/go-integration-test/v4 from 4.2.0 to 4.3.0](https://github.com/beyondstorage/go-service-memory/pull/16)
- [@xiongjiwei][] opened pull request [fix: stat root path will return ErrObjectNotExist](https://github.com/beyondstorage/go-service-memory/pull/17)
- [@Xuanwo][] merged pull request [fix: stat root path will return ErrObjectNotExist](https://github.com/beyondstorage/go-service-memory/pull/17)

## [go-endpoint](https://github.com/beyondstorage/go-endpoint)

- [@npofsi][] opened issue [Add FTP endpoint pair](https://github.com/beyondstorage/go-endpoint/issues/14)
- [@Xuanwo][] closed issue [Tracking issue of RFC-8: Add Tcp protocol ](https://github.com/beyondstorage/go-endpoint/issues/9)

## [go-community](https://github.com/beyondstorage/go-community)

- [@Xuanwo][] opened issue [Allow create separate teams](https://github.com/beyondstorage/go-community/issues/17)
- [@Prnyself][] opened pull request [weekly-report: Refactor weekly report content style](https://github.com/beyondstorage/go-community/pull/18)
- [@Xuanwo][] merged pull request [weekly-report: Refactor weekly report content style](https://github.com/beyondstorage/go-community/pull/18)

## [community](https://github.com/beyondstorage/community)

- [@Xuanwo][] opened issue [Update links for matrix](https://github.com/beyondstorage/community/issues/29)
- [@Xuanwo][] closed issue [Weekly report since 2021-07-26](https://github.com/beyondstorage/community/issues/28)

## [go-credential](https://github.com/beyondstorage/go-credential)

- [@npofsi][] opened issue [Add protocol Basic](https://github.com/beyondstorage/go-credential/issues/1)
- [@Xuanwo][] opened pull request [feat: Migrate from go-storage/pkg](https://github.com/beyondstorage/go-credential/pull/2)
- [@Xuanwo][] merged pull request [feat: Migrate from go-storage/pkg](https://github.com/beyondstorage/go-credential/pull/2)
- [@npofsi][] opened pull request [RFC-3: Add protocol basic](https://github.com/beyondstorage/go-credential/pull/3)
- [@Xuanwo][] merged pull request [RFC-3: Add protocol basic](https://github.com/beyondstorage/go-credential/pull/3)
- [@Xuanwo][] closed issue [Add protocol Basic](https://github.com/beyondstorage/go-credential/issues/1)

## [go-stream](https://github.com/beyondstorage/go-stream)

- [@Xuanwo][] opened pull request [feat: Implement basic stream logic](https://github.com/beyondstorage/go-stream/pull/1)
- [@Xuanwo][] merged pull request [feat: Implement basic stream logic](https://github.com/beyondstorage/go-stream/pull/1)
- [@Xuanwo][] opened issue [Support write via an io.Reader](https://github.com/beyondstorage/go-stream/issues/2)
- [@Xuanwo][] opened issue [Add io limit](https://github.com/beyondstorage/go-stream/issues/3)
- [@Xuanwo][] opened pull request [feat: Implement stream logic via Multipart](https://github.com/beyondstorage/go-stream/pull/4)
- [@Xuanwo][] opened issue [Add append support](https://github.com/beyondstorage/go-stream/issues/5)
- [@Xuanwo][] opened issue [Check multipart support before using](https://github.com/beyondstorage/go-stream/issues/6)
- [@Xuanwo][] merged pull request [feat: Implement stream logic via Multipart](https://github.com/beyondstorage/go-stream/pull/4)


[@xiongjiwei]: https://github.com/xiongjiwei
[@JinnyYi]: https://github.com/JinnyYi
[@Xuanwo]: https://github.com/Xuanwo
[@abyss-w]: https://github.com/abyss-w
[@Prnyself]: https://github.com/Prnyself
[@npofsi]: https://github.com/npofsi
[@bokket]: https://github.com/bokket
[BeyondStorage]: https://beyondstorage.io