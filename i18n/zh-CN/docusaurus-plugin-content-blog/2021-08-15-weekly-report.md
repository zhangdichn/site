---
title: "2021-32 Weekly Report"
author: "Prnyself"
author_url: "https://github.com/Prnyself"
tags:
  - updates
  - weekly-report
---

Hello everyone, here is the weekly report for [BeyondStorage][], range from 2021-08-09 to 2021-08-15.

<!--truncate-->

## Here’s what we focused on this week:

### Library:

- Finished Config Features and DefaultPairs via Connection String
- Add implement virtual link RCF to s3
- Add check for multipart in go-stream
- Fix stat a file failed in go-service-ftp
- Fix read all content at once when readdir in go-service-hdfs
- Implement `Copier` in go-service-gdrive
- Add oauth support for go-service-gdrive

### Application:

- Add Features Roadmap for beyond-ctl
- Use zap to replace the original logger in beyond-ftp
- Add version field and debug mode flag for beyond-ftp
- Add redirection from / to /ui as homepage in beyond-tp

### Test:

- Implement integration tests for go-stream and go-service-ftp

### Community:

- Add go-service-ftp docs
- Add iterator docs for go-storage
- Update readme, add development requirement and contributor guide for beyond-tp

## Weekly Stats

|        | Opened this week | Closed this week |
| ------ | ---------------- | ---------------- |
| Issues | 13               | 7                |
| PR's   | 26               | 32               |

## [go-storage](https://github.com/beyondstorage/go-storage)

- [@Xuanwo][] opened issue [Tracking issues of GSP-700: Config Features and DefaultPairs via Connetion String](https://github.com/beyondstorage/go-storage/issues/704)
- [@Xuanwo][] merged pull request [GSP-700: Config Features and DefaultPairs via Connetion String](https://github.com/beyondstorage/go-storage/pull/700)
- [@Xuanwo][] opened pull request [docs: Update readme about services support](https://github.com/beyondstorage/go-storage/pull/705)
- [@JinnyYi][] merged pull request [docs: Update readme about services support](https://github.com/beyondstorage/go-storage/pull/705)

## [go-service-oss](https://github.com/beyondstorage/go-service-oss)

- [@JinnyYi][] closed issue [Service tracking issue for GSP-86: Add CreateLink Operation](https://github.com/beyondstorage/go-service-oss/issues/37)

## [go-service-s3](https://github.com/beyondstorage/go-service-s3)

- [@abyss-w][] opened pull request [feat: Implement CreateLink and setup linker test in go-service-s3](https://github.com/beyondstorage/go-service-s3/pull/175)
- [@abyss-w][] opened pull request [S3 virtual link rfc](https://github.com/beyondstorage/go-service-s3/pull/177)
- [@abyss-w][] closed pull request [S3 virtual link rfc](https://github.com/beyondstorage/go-service-s3/pull/177)
- [@abyss-w][] opened pull request [feat: Add implement virtual link RCF to s3](https://github.com/beyondstorage/go-service-s3/pull/178)

## [site](https://github.com/beyondstorage/site)

- [@npofsi][] opened pull request [feat: Add ftp example](https://github.com/beyondstorage/site/pull/176)
- [@Prnyself][] merged pull request [feat: Add ftp docs](https://github.com/beyondstorage/site/pull/176)
- [@Prnyself][] opened pull request [blog: Add 2021-08-08 weekly report](https://github.com/beyondstorage/site/pull/178)
- [@Xuanwo][] merged pull request [blog: Add 2021-08-08 weekly report](https://github.com/beyondstorage/site/pull/178)
- [@queenaray928][] opened issue [Modify site docs porjetcs](https://github.com/beyondstorage/site/issues/180)
- [@Xuanwo][] opened pull request [docs: Add iterator docs for go-storage](https://github.com/beyondstorage/site/pull/181)
- [@Xuanwo][] closed issue [Add docs for Iterator](https://github.com/beyondstorage/site/issues/95)
- [@Xuanwo][] merged pull request [docs: Add iterator docs for go-storage](https://github.com/beyondstorage/site/pull/181)

## [beyond-tp](https://github.com/beyondstorage/beyond-tp)

- [@Prnyself][] merged pull request [ui: Add identity list](https://github.com/beyondstorage/beyond-tp/pull/119)
- [@Prnyself][] opened pull request [docs: Update readme, add development requirement and contributor guide](https://github.com/beyondstorage/beyond-tp/pull/126)
- [@Xuanwo][] merged pull request [docs: Update readme, add development requirement and contributor guide](https://github.com/beyondstorage/beyond-tp/pull/126)
- [@tt-haogege][] opened pull request [ui:Confirm Component update](https://github.com/beyondstorage/beyond-tp/pull/127)
- [@Prnyself][] opened pull request [docs: Add build and usage in README](https://github.com/beyondstorage/beyond-tp/pull/128)
- [@Xuanwo][] merged pull request [docs: Add build and usage in README](https://github.com/beyondstorage/beyond-tp/pull/128)
- [@Xuanwo][] opened pull request [ci: Use heroku for preview](https://github.com/beyondstorage/beyond-tp/pull/130)
- [@Prnyself][] opened issue [bug: Task not created after click CreateTask](https://github.com/beyondstorage/beyond-tp/issues/131)
- [@Prnyself][] opened issue [bug: Data in previous step lost](https://github.com/beyondstorage/beyond-tp/issues/132)
- [@Prnyself][] opened issue [bug: Components in dialog are invalid sometimes](https://github.com/beyondstorage/beyond-tp/issues/133)
- [@tt-haogege][] closed pull request [ui:Confirm Component update](https://github.com/beyondstorage/beyond-tp/pull/127)
- [@Xuanwo][] merged pull request [ci: Use heroku for preview](https://github.com/beyondstorage/beyond-tp/pull/130)
- [@Prnyself][] opened issue [Add redirect to /ui at homepage](https://github.com/beyondstorage/beyond-tp/issues/134)
- [@Xuanwo][] closed pull request [build(deps): bump go.uber.org/zap from 1.16.0 to 1.19.0](https://github.com/beyondstorage/beyond-tp/pull/125)
- [@Xuanwo][] closed pull request [build(deps): bump github.com/vektah/gqlparser/v2 from 2.1.0 to 2.2.0](https://github.com/beyondstorage/beyond-tp/pull/91)
- [@Xuanwo][] closed pull request [build(deps): bump google.golang.org/grpc from 1.38.0 to 1.40.0](https://github.com/beyondstorage/beyond-tp/pull/129)
- [@Xuanwo][] closed pull request [build(deps): bump google.golang.org/protobuf from 1.25.0 to 1.27.1](https://github.com/beyondstorage/beyond-tp/pull/106)
- [@Xuanwo][] closed pull request [build(deps): bump github.com/spf13/viper from 1.7.0 to 1.8.1](https://github.com/beyondstorage/beyond-tp/pull/101)
- [@Prnyself][] opened pull request [server: Add redirection from / to /ui as homepage](https://github.com/beyondstorage/beyond-tp/pull/140)
- [@Xuanwo][] merged pull request [feat: Add redirection from / to /ui as homepage](https://github.com/beyondstorage/beyond-tp/pull/140)
- [@Xuanwo][] closed issue [Add redirect to /ui at homepage](https://github.com/beyondstorage/beyond-tp/issues/134)

## [go-service-ftp](https://github.com/beyondstorage/go-service-ftp)

- [@npofsi][] opened pull request [fix: Stat a file failed](https://github.com/beyondstorage/go-service-ftp/pull/18)
- [@npofsi][] opened issue [Replace LIST with STAT in Storage.stat func](https://github.com/beyondstorage/go-service-ftp/issues/19)
- [@Xuanwo][] merged pull request [fix: Stat a file failed](https://github.com/beyondstorage/go-service-ftp/pull/18)
- [@Xuanwo][] merged pull request [feat: Implement integration test](https://github.com/beyondstorage/go-service-ftp/pull/16)

## [go-service-minio](https://github.com/beyondstorage/go-service-minio)

- [@Xuanwo][] opened issue [How about implement a setup-minio actions?](https://github.com/beyondstorage/go-service-minio/issues/20)
- [@aeinrw][] opened pull request [ci: Implement setup-minio to simply the test logic](https://github.com/beyondstorage/go-service-minio/pull/21)
- [@aeinrw][] closed pull request [ci: Implement setup-minio to simply the test logic](https://github.com/beyondstorage/go-service-minio/pull/21)

## [go-service-hdfs](https://github.com/beyondstorage/go-service-hdfs)

- [@JinnyYi][] merged pull request [storage: Fix read all content at once when readdir](https://github.com/beyondstorage/go-service-hdfs/pull/20)
- [@JinnyYi][] closed issue [ReadDir by offset instead read all content at once](https://github.com/beyondstorage/go-service-hdfs/issues/16)

## [go-service-storj](https://github.com/beyondstorage/go-service-storj)

- [@OAkaLala][] opened pull request [Settings and helper functions implemented with some interfaces](https://github.com/beyondstorage/go-service-storj/pull/10)

## [beyond-ftp](https://github.com/beyondstorage/beyond-ftp)

- [@Xuanwo][] opened issue [Command line design](https://github.com/beyondstorage/beyond-ftp/issues/12)
- [@xiongjiwei][] opened pull request [*: use zap.log, clean up imports and add some comment in config.toml](https://github.com/beyondstorage/beyond-ftp/pull/13)
- [@Prnyself][] merged pull request [*: Add version field and debug mode flag](https://github.com/beyondstorage/beyond-ftp/pull/11)
- [@Xuanwo][] merged pull request [*: use zap.log, clean up imports and add some comment in config.toml](https://github.com/beyondstorage/beyond-ftp/pull/13)
- [@xiongjiwei][] opened pull request [*: refactor codes, make log message understandable](https://github.com/beyondstorage/beyond-ftp/pull/15)

## [go-service-onedrive](https://github.com/beyondstorage/go-service-onedrive)

- [@zxy-lgtm][] opened issue [issue-path](https://github.com/beyondstorage/go-service-onedrive/issues/11)
- [@zxy-lgtm][] opened pull request [#issue 11](https://github.com/beyondstorage/go-service-onedrive/pull/12)

## [go-service-gdrive](https://github.com/beyondstorage/go-service-gdrive)

- [@junaire][] opened issue [How to authorize gdrive API](https://github.com/beyondstorage/go-service-gdrive/issues/17)
- [@junaire][] opened pull request [Add oauth support](https://github.com/beyondstorage/go-service-gdrive/pull/18)
- [@junaire][] opened pull request [Implement Copier](https://github.com/beyondstorage/go-service-gdrive/pull/19)
- [@Xuanwo][] merged pull request [feat: Implement Copier](https://github.com/beyondstorage/go-service-gdrive/pull/19)
- [@Xuanwo][] merged pull request [Add oauth support](https://github.com/beyondstorage/go-service-gdrive/pull/18)
- [@Xuanwo][] closed issue [How to authorize gdrive API](https://github.com/beyondstorage/go-service-gdrive/issues/17)
- [@junaire][] opened pull request [fix: make http_client optional, update envs, add scope control](https://github.com/beyondstorage/go-service-gdrive/pull/21)
- [@Xuanwo][] merged pull request [fix: make http_client optional, update envs, add scope control](https://github.com/beyondstorage/go-service-gdrive/pull/21)

## [go-endpoint](https://github.com/beyondstorage/go-endpoint)

- [@npofsi][] closed issue [Add FTP endpoint pair](https://github.com/beyondstorage/go-endpoint/issues/14)

## [go-community](https://github.com/beyondstorage/go-community)

- [@Prnyself][] opened pull request [Bump to version v0.3.0](https://github.com/beyondstorage/go-community/pull/19)
- [@Xuanwo][] merged pull request [Bump to version 0.3.0](https://github.com/beyondstorage/go-community/pull/19)

## [community](https://github.com/beyondstorage/community)

- [@Xuanwo][] opened issue [Weekly report since 2021-08-02](https://github.com/beyondstorage/community/issues/30)
- [@Prnyself][] opened pull request [ci: Upgrade weekly report in github workflows](https://github.com/beyondstorage/community/pull/31)
- [@Xuanwo][] merged pull request [ci: Upgrade weekly report in github workflows](https://github.com/beyondstorage/community/pull/31)

## [forum-theme](https://github.com/beyondstorage/forum-theme)

- [@aprilyang][] merged pull request [init beyond theme](https://github.com/beyondstorage/forum-theme/pull/1)

## [beyond-ctl](https://github.com/beyondstorage/beyond-ctl)

- [@Xuanwo][] opened issue [Features Roadmap](https://github.com/beyondstorage/beyond-ctl/issues/1)

## [go-stream](https://github.com/beyondstorage/go-stream)

- [@Xuanwo][] opened pull request [feat: Add check for multipart](https://github.com/beyondstorage/go-stream/pull/7)
- [@Xuanwo][] merged pull request [feat: Add check for multipart](https://github.com/beyondstorage/go-stream/pull/7)
- [@Xuanwo][] closed issue [Check multipart support before using](https://github.com/beyondstorage/go-stream/issues/6)
- [@Xuanwo][] opened pull request [test: Implement integration tests](https://github.com/beyondstorage/go-stream/pull/8)
- [@Xuanwo][] merged pull request [test: Implement integration tests](https://github.com/beyondstorage/go-stream/pull/8)

## [go-service-bos](https://github.com/beyondstorage/go-service-bos)

- [@abyss-w][] opened pull request [*: Package rename](https://github.com/beyondstorage/go-service-bos/pull/1)
- [@Xuanwo][] merged pull request [*: Package rename](https://github.com/beyondstorage/go-service-bos/pull/1)

[@Xuanwo]: https://github.com/Xuanwo
[@abyss-w]: https://github.com/abyss-w
[@Prnyself]: https://github.com/Prnyself
[@OAkaLala]: https://github.com/OAkaLala
[@zxy-lgtm]: https://github.com/zxy-lgtm
[@aprilyang]: https://github.com/aprilyang
[@JinnyYi]: https://github.com/JinnyYi
[@npofsi]: https://github.com/npofsi
[@queenaray928]: https://github.com/queenaray928
[@tt-haogege]: https://github.com/tt-haogege
[@aeinrw]: https://github.com/aeinrw
[@xiongjiwei]: https://github.com/xiongjiwei
[@junaire]: https://github.com/junaire
[BeyondStorage]: https://beyondstorage.io