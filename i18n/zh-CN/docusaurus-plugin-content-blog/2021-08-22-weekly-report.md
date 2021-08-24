---
title: "2021-33 Weekly Report"
author: "Prnyself"
author_url: "https://github.com/Prnyself"
tags:
  - updates
  - weekly-report
---

Hello everyone, here is the weekly report for [BeyondStorage][], range from 2021-08-16 to 2021-08-22.

<!--truncate-->

## Here’s what we focused on this week:

### New release

- Go-service-fs release version 3.4.0
- Go-service-ftp release version 0.1.0
- Go-service-oss release version 2.3.0
- Go-storage release version 4.5.0

### 库

- Fix list could return duplicated files in go-service-fs
- Fix wrong method call when set multipart size maximum in metadata in go-service-oss
- Allow GCS client to use credentials from the environment if needed in go-service-gcs
- Rewrite credential parse in more directly way in go-service-gcs
- Add name field in object in go-service-memory
- Implement CreateLink and setup linker test in go-service-s3
- Resolve null pointer problem when metadata undefined in go-service-s3
- GSP-706 was merged and implemented in go-storage, to support HTTP Signer

### 应用

- Come up profile support proposal in beyond-ctl
- Fix some UI errors in beyond-tp

### 社区

- Redefine Leaders and Contributors
- [@JinnyYi][] promoted as go-storage Maintainer

### Infra

- Migrate integration tests to self-hosted teamcity

## Weekly Stats

|        | Opened this week | Closed this week |
| ------ | ---------------- | ---------------- |
| Issues | 21               | 17               |
| PR's   | 49               | 46               |

## [beyond-ctl](https://github.com/beyondstorage/beyond-ctl)

- [@Xuanwo][] opened issue [Implement cp support](https://github.com/beyondstorage/beyond-ctl/issues/3)
- [@Xuanwo][] opened issue [UI Improvement](https://github.com/beyondstorage/beyond-ctl/issues/4)
- [@Xuanwo][] merged pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0](https://github.com/beyondstorage/beyond-ctl/pull/2)
- [@Prnyself][] opened pull request [cmd: Implement cp single file](https://github.com/beyondstorage/beyond-ctl/pull/5)
- [@Xuanwo][] opened issue [Profile support](https://github.com/beyondstorage/beyond-ctl/issues/6)
- [@Prnyself][] opened pull request [proposal: Add Identity Support](https://github.com/beyondstorage/beyond-ctl/pull/7)
- [@Xuanwo][] opened issue [Tracking issue of BCP-7: Add Profile Support](https://github.com/beyondstorage/beyond-ctl/issues/9)
- [@Xuanwo][] merged pull request [BCP-7: Add Profile Support](https://github.com/beyondstorage/beyond-ctl/pull/7)
- [@Prnyself][] opened pull request [Implement BCP-7: Add Profile Support](https://github.com/beyondstorage/beyond-ctl/pull/10)

## [beyond-ftp](https://github.com/beyondstorage/beyond-ftp)

- [@Xuanwo][] merged pull request [refactor: Make log message understandable](https://github.com/beyondstorage/beyond-ftp/pull/15)
- [@Xuanwo][] merged pull request [Bump go.uber.org/zap from 1.18.1 to 1.19.0](https://github.com/beyondstorage/beyond-ftp/pull/14)
- [@Xuanwo][] closed issue [Use uber/zap as logger](https://github.com/beyondstorage/beyond-ftp/issues/7)
- [@xiongjiwei][] opened pull request [fix: remove the extra space in list response](https://github.com/beyondstorage/beyond-ftp/pull/17)

## [beyond-tp](https://github.com/beyondstorage/beyond-tp)

- [@Prnyself][] opened pull request [.github: Add issue templates](https://github.com/beyondstorage/beyond-tp/pull/141)
- [@Xuanwo][] merged pull request [.github: Add issue templates](https://github.com/beyondstorage/beyond-tp/pull/141)
- [@zhangdichn][] opened pull request [ui: Rename dm into BTP on navigators](https://github.com/beyondstorage/beyond-tp/pull/143)
- [@zhangdichn][] opened pull request [ui: Fix create identity button error](https://github.com/beyondstorage/beyond-tp/pull/144)
- [@Prnyself][] merged pull request [ui: Fix create identity button error](https://github.com/beyondstorage/beyond-tp/pull/144)
- [@Prnyself][] merged pull request [ui: Rename DM into BTP on navigators](https://github.com/beyondstorage/beyond-tp/pull/143)
- [@zhangdichn][] opened pull request [ui: Refactor task status](https://github.com/beyondstorage/beyond-tp/pull/145)
- [@Prnyself][] opened issue [[Bug]: Components in dialog are invalid sometimes](https://github.com/beyondstorage/beyond-tp/issues/146)
- [@Prnyself][] closed issue [bug: Components in dialog are invalid sometimes](https://github.com/beyondstorage/beyond-tp/issues/133)
- [@Prnyself][] opened issue [[Bug]: Data in previous step lost](https://github.com/beyondstorage/beyond-tp/issues/147)
- [@Prnyself][] closed issue [bug: Data in previous step lost](https://github.com/beyondstorage/beyond-tp/issues/132)
- [@Prnyself][] opened issue [[Bug]: Task not created after click CreateTask](https://github.com/beyondstorage/beyond-tp/issues/148)
- [@Prnyself][] closed issue [bug: Task not created after click CreateTask](https://github.com/beyondstorage/beyond-tp/issues/131)
- [@tt-haogege][] opened pull request [ui: update confirm compontent](https://github.com/beyondstorage/beyond-tp/pull/149)
- [@tt-haogege][] closed pull request [ui: update confirm compontent](https://github.com/beyondstorage/beyond-tp/pull/149)
- [@tt-haogege][] opened pull request [ui: Add agents pages and message component](https://github.com/beyondstorage/beyond-tp/pull/150)
- [@zhangdichn][] opened pull request [ui: Refactor create task dialog text](https://github.com/beyondstorage/beyond-tp/pull/151)
- [@aprilyang][] merged pull request [ui: Refactor create task dialog text](https://github.com/beyondstorage/beyond-tp/pull/151)
- [@aprilyang][] merged pull request [ui: Refactor task status](https://github.com/beyondstorage/beyond-tp/pull/145)

## [community](https://github.com/beyondstorage/community)

- [@Xuanwo][] opened issue [Weekly report since 2021-08-09](https://github.com/beyondstorage/community/issues/32)
- [@Xuanwo][] closed issue [Weekly report since 2021-08-02](https://github.com/beyondstorage/community/issues/30)
- [@Prnyself][] closed issue [Add weekly stats](https://github.com/beyondstorage/community/issues/25)
- [@Prnyself][] opened pull request [ci: Upgrade weekly report to 0.3.1 in workflow](https://github.com/beyondstorage/community/pull/33)
- [@Xuanwo][] merged pull request [ci: Upgrade weekly report to 0.3.1 in workflow](https://github.com/beyondstorage/community/pull/33)
- [@Xuanwo][] opened pull request [Add proposal Redefine Leaders and Contributors](https://github.com/beyondstorage/community/pull/34)
- [@Xuanwo][] closed issue [Weekly report since 2021-08-09](https://github.com/beyondstorage/community/issues/32)
- [@Xuanwo][] opened issue [Tracking issues of  RFC-34: Redefine Leaders and Contributors](https://github.com/beyondstorage/community/issues/35)
- [@Xuanwo][] merged pull request [RFC-34: Redefine Leaders and Contributors](https://github.com/beyondstorage/community/pull/34)
- [@Xuanwo][] closed issue [proposal: Separating Leaders](https://github.com/beyondstorage/community/issues/26)
- [@Xuanwo][] opened pull request [feat: Implement RFC-34](https://github.com/beyondstorage/community/pull/36)
- [@Xuanwo][] merged pull request [feat: Implement RFC-34](https://github.com/beyondstorage/community/pull/36)
- [@Xuanwo][] closed issue [Tracking issues of  RFC-34: Redefine Leaders and Contributors](https://github.com/beyondstorage/community/issues/35)
- [@Prnyself][] opened pull request [projects: Add beyond-ctl into go-storage](https://github.com/beyondstorage/community/pull/37)
- [@Xuanwo][] merged pull request [projects: Add beyond-ctl into go-storage](https://github.com/beyondstorage/community/pull/37)
- [@Xuanwo][] opened pull request [proposal: Promote JinnyYi as go-storage Maintainer](https://github.com/beyondstorage/community/pull/38)
- [@Xuanwo][] merged pull request [RFC-38: Promote JinnyYi as go-storage Maintainer](https://github.com/beyondstorage/community/pull/38)
- [@JinnyYi][] opened pull request [proposal: Promote abyss-w as go-storage Reviewer](https://github.com/beyondstorage/community/pull/39)

## [go-community](https://github.com/beyondstorage/go-community)

- [@Prnyself][] opened pull request [report: Add sort for repositories](https://github.com/beyondstorage/go-community/pull/20)
- [@Xuanwo][] merged pull request [report: Add sort for repositories](https://github.com/beyondstorage/go-community/pull/20)
- [@Prnyself][] opened pull request [Bump version to 0.3.1](https://github.com/beyondstorage/go-community/pull/22)
- [@Prnyself][] merged pull request [Bump version to 0.3.1](https://github.com/beyondstorage/go-community/pull/22)
- [@Xuanwo][] opened pull request [feat: Implement community RFC-34](https://github.com/beyondstorage/go-community/pull/24)
- [@Xuanwo][] merged pull request [feat: Implement community RFC-34](https://github.com/beyondstorage/go-community/pull/24)
- [@Xuanwo][] opened pull request [fix: Handle egde cases about github](https://github.com/beyondstorage/go-community/pull/25)
- [@Xuanwo][] merged pull request [fix: Handle egde cases about github](https://github.com/beyondstorage/go-community/pull/25)
- [@Xuanwo][] opened pull request [Bump to version 0.3.2](https://github.com/beyondstorage/go-community/pull/26)
- [@Xuanwo][] closed issue [Allow create separate teams](https://github.com/beyondstorage/go-community/issues/17)
- [@Xuanwo][] closed issue [Allow split teams into sereval files](https://github.com/beyondstorage/go-community/issues/6)
- [@Xuanwo][] merged pull request [Bump to version 0.3.2](https://github.com/beyondstorage/go-community/pull/26)

## [go-integration-test](https://github.com/beyondstorage/go-integration-test)

- [@JinnyYi][] opened pull request [storage: Implement HTTPSigner test](https://github.com/beyondstorage/go-integration-test/pull/49)

## [go-service-bos](https://github.com/beyondstorage/go-service-bos)

- [@abyss-w][] opened pull request [feat: initial implement storager part 1](https://github.com/beyondstorage/go-service-bos/pull/3)

## [go-service-fs](https://github.com/beyondstorage/go-service-fs)

- [@Prnyself][] opened issue [Handle the drive letter in connection string for Windows](https://github.com/beyondstorage/go-service-fs/issues/67)
- [@Xuanwo][] opened issue [List could return duplicated files](https://github.com/beyondstorage/go-service-fs/issues/68)
- [@Xuanwo][] opened pull request [fix: List could return duplicated files ](https://github.com/beyondstorage/go-service-fs/pull/69)
- [@Xuanwo][] closed issue [List could return duplicated files](https://github.com/beyondstorage/go-service-fs/issues/68)
- [@Xuanwo][] merged pull request [fix: List could return duplicated files on unix platform](https://github.com/beyondstorage/go-service-fs/pull/69)
- [@Xuanwo][] opened pull request [Bump to version 3.4.0](https://github.com/beyondstorage/go-service-fs/pull/70)
- [@JinnyYi][] merged pull request [Bump to version 3.4.0](https://github.com/beyondstorage/go-service-fs/pull/70)

## [go-service-ftp](https://github.com/beyondstorage/go-service-ftp)

- [@npofsi][] opened pull request [Update utils.go](https://github.com/beyondstorage/go-service-ftp/pull/20)
- [@Prnyself][] merged pull request [fix: Sync optional check with service.toml](https://github.com/beyondstorage/go-service-ftp/pull/20)
- [@npofsi][] opened pull request [Bump to version v0.1.0](https://github.com/beyondstorage/go-service-ftp/pull/21)
- [@Prnyself][] merged pull request [Bump to version v0.1.0](https://github.com/beyondstorage/go-service-ftp/pull/21)
- [@Prnyself][] closed issue [Add ftp support for go-storage](https://github.com/beyondstorage/go-service-ftp/issues/3)
- [@xiongjiwei][] opened issue [OS-specific path separator problem](https://github.com/beyondstorage/go-service-ftp/issues/22)

## [go-service-gcs](https://github.com/beyondstorage/go-service-gcs)

- [@cmaster11][] opened issue [Doc issue, wrong pair key `project`](https://github.com/beyondstorage/go-service-gcs/issues/56)
- [@Xuanwo][] closed issue [Doc issue, wrong pair key `project`](https://github.com/beyondstorage/go-service-gcs/issues/56)
- [@cmaster11][] opened pull request [Allow GCS client to use credentials from the environment if needed](https://github.com/beyondstorage/go-service-gcs/pull/58)
- [@Xuanwo][] merged pull request [Allow GCS client to use credentials from the environment if needed](https://github.com/beyondstorage/go-service-gcs/pull/58)
- [@Xuanwo][] opened pull request [refactor: Rewrite credential parse in more directly way](https://github.com/beyondstorage/go-service-gcs/pull/59)
- [@Xuanwo][] merged pull request [refactor: Rewrite credential parse in more directly way](https://github.com/beyondstorage/go-service-gcs/pull/59)

## [go-service-memory](https://github.com/beyondstorage/go-service-memory)

- [@xiongjiwei][] opened pull request [refactor: add name field in object to refactor code](https://github.com/beyondstorage/go-service-memory/pull/19)
- [@Xuanwo][] merged pull request [refactor: Add name field in object](https://github.com/beyondstorage/go-service-memory/pull/19)
- [@Xuanwo][] merged pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.4.0 to 4.5.0](https://github.com/beyondstorage/go-service-memory/pull/18)

## [go-service-oss](https://github.com/beyondstorage/go-service-oss)

- [@cmaster11][] opened issue [Support for 386 arch](https://github.com/beyondstorage/go-service-oss/issues/50)
- [@Prnyself][] opened pull request [storage: Fix wrong method call when set multipart size maximum in metadata](https://github.com/beyondstorage/go-service-oss/pull/51)
- [@JinnyYi][] merged pull request [storage: Fix wrong method call when set multipart size maximum in metadata](https://github.com/beyondstorage/go-service-oss/pull/51)
- [@JinnyYi][] closed issue [Support for 386 arch](https://github.com/beyondstorage/go-service-oss/issues/50)
- [@Prnyself][] opened pull request [Bump to version 2.3.0](https://github.com/beyondstorage/go-service-oss/pull/52)
- [@Xuanwo][] merged pull request [Bump to version 2.3.0](https://github.com/beyondstorage/go-service-oss/pull/52)

## [go-service-qingstor](https://github.com/beyondstorage/go-service-qingstor)

- [@abyss-w][] opened pull request [feat: Add rfc for add virtual link support](https://github.com/beyondstorage/go-service-qingstor/pull/79)
- [@Xuanwo][] opened issue [Metadata for link target should be `x-qs-meta-bs-link-target`](https://github.com/beyondstorage/go-service-qingstor/issues/80)
- [@JinnyYi][] merged pull request [RFC-79: Add virtual link support](https://github.com/beyondstorage/go-service-qingstor/pull/79)
- [@Xuanwo][] closed issue [Metadata for link target should be `x-qs-meta-bs-link-target`](https://github.com/beyondstorage/go-service-qingstor/issues/80)
- [@abyss-w][] opened pull request [feat: Implement CreateLink and setup linker test in go-service-qingstor](https://github.com/beyondstorage/go-service-qingstor/pull/81)
- [@JinnyYi][] opened issue [CreateAppend not meet GSP-134 Write Behavior Consistency](https://github.com/beyondstorage/go-service-qingstor/issues/83)

## [go-service-s3](https://github.com/beyondstorage/go-service-s3)

- [@Xuanwo][] merged pull request [RFC-178: Add Virtual Link Support](https://github.com/beyondstorage/go-service-s3/pull/178)
- [@JinnyYi][] merged pull request [feat: Implement CreateLink and setup linker test in go-service-s3](https://github.com/beyondstorage/go-service-s3/pull/175)
- [@abyss-w][] opened pull request [fix: Resolve null pointer problem when metadata undefined](https://github.com/beyondstorage/go-service-s3/pull/185)
- [@JinnyYi][] opened issue [Linker integration test run failed](https://github.com/beyondstorage/go-service-s3/issues/186)
- [@abyss-w][] opened pull request [chore: Modified readme](https://github.com/beyondstorage/go-service-s3/pull/187)
- [@Xuanwo][] closed pull request [chore: Modified readme](https://github.com/beyondstorage/go-service-s3/pull/187)
- [@Xuanwo][] opened issue [Integration tests migrated to teamcity](https://github.com/beyondstorage/go-service-s3/issues/189)
- [@Xuanwo][] merged pull request [fix: Resolve null pointer problem when metadata undefined](https://github.com/beyondstorage/go-service-s3/pull/185)
- [@Xuanwo][] opened pull request [ci: Migrate integration tests to self hosted teamcity](https://github.com/beyondstorage/go-service-s3/pull/190)
- [@Xuanwo][] merged pull request [ci: Migrate integration tests to self hosted teamcity](https://github.com/beyondstorage/go-service-s3/pull/190)
- [@JinnyYi][] opened pull request [Implement GSP-706 support http signer](https://github.com/beyondstorage/go-service-s3/pull/191)
- [@Xuanwo][] closed issue [Linker integration test run failed](https://github.com/beyondstorage/go-service-s3/issues/186)

## [go-storage](https://github.com/beyondstorage/go-storage)

- [@JinnyYi][] opened pull request [GSP: Support Signed URL](https://github.com/beyondstorage/go-storage/pull/706)
- [@JinnyYi][] opened issue [Tracking issue for GSP-706: Support HTTP Signer](https://github.com/beyondstorage/go-storage/issues/707)
- [@Xuanwo][] merged pull request [GSP-706: Support HTTP Signer](https://github.com/beyondstorage/go-storage/pull/706)
- [@JinnyYi][] opened pull request [feat: Generate feature pairs](https://github.com/beyondstorage/go-storage/pull/708)
- [@JinnyYi][] opened pull request [definitions: Implement GSP-706 Support HTTP Signer](https://github.com/beyondstorage/go-storage/pull/709)
- [@Xuanwo][] merged pull request [feat: Generate feature pairs](https://github.com/beyondstorage/go-storage/pull/708)
- [@JinnyYi][] opened pull request [feat: Generate default pairs](https://github.com/beyondstorage/go-storage/pull/710)
- [@Xuanwo][] merged pull request [definitions: Implement GSP-706 Support HTTP Signer](https://github.com/beyondstorage/go-storage/pull/709)
- [@JinnyYi][] opened issue [Pair map for namespace](https://github.com/beyondstorage/go-storage/issues/711)
- [@Xuanwo][] merged pull request [feat: Generate default pairs](https://github.com/beyondstorage/go-storage/pull/710)
- [@JinnyYi][] opened pull request [Bump to version 4.5.0](https://github.com/beyondstorage/go-storage/pull/712)
- [@Xuanwo][] merged pull request [Bump to version 4.5.0](https://github.com/beyondstorage/go-storage/pull/712)

## [go-storage-example](https://github.com/beyondstorage/go-storage-example)

- [@npofsi][] opened pull request [Add FTP example](https://github.com/beyondstorage/go-storage-example/pull/16)
- [@Xuanwo][] merged pull request [Add FTP example](https://github.com/beyondstorage/go-storage-example/pull/16)
- [@Xuanwo][] merged pull request [Bump github.com/beyondstorage/go-service-fs/v3 from 3.3.0 to 3.4.0](https://github.com/beyondstorage/go-storage-example/pull/17)

## [site](https://github.com/beyondstorage/site)

- [@Prnyself][] opened issue [Docs' author and update time not correct](https://github.com/beyondstorage/site/issues/183)
- [@aprilyang][] opened pull request [i18n: Fixed the i18n in en-US](https://github.com/beyondstorage/site/pull/185)
- [@aprilyang][] merged pull request [i18n: Fixed the i18n in en-US](https://github.com/beyondstorage/site/pull/185)
- [@Xuanwo][] opened pull request [fix: project_id used in correctly in gcs](https://github.com/beyondstorage/site/pull/187)
- [@Xuanwo][] merged pull request [fix: project_id used in correctly in gcs](https://github.com/beyondstorage/site/pull/187)
- [@Prnyself][] opened pull request [blog: Add 2021-08-15 weekly report](https://github.com/beyondstorage/site/pull/189)
- [@Xuanwo][] merged pull request [blog: Add 2021-08-15 weekly report](https://github.com/beyondstorage/site/pull/189)
- [@JinnyYi][] opened pull request [docs: Add docs for HttpSigner](https://github.com/beyondstorage/site/pull/191)

[@abyss-w]: https://github.com/abyss-w
[@cmaster11]: https://github.com/cmaster11
[@Xuanwo]: https://github.com/Xuanwo
[@xiongjiwei]: https://github.com/xiongjiwei
[@tt-haogege]: https://github.com/tt-haogege
[@aprilyang]: https://github.com/aprilyang
[@zhangdichn]: https://github.com/zhangdichn
[@JinnyYi]: https://github.com/JinnyYi
[@npofsi]: https://github.com/npofsi
[@Prnyself]: https://github.com/Prnyself
[BeyondStorage]: https://beyondstorage.io
