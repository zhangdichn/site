---
title: "2021-29 Weekly Report"
author: "Prnyself"
author_url: "https://github.com/Prnyself"
tags: [updates, weekly-report]
---

Hello everyone, here is the weekly report for [BeyondStorage], range from 2021-07-19 to 2021-07-25.

From this week, we change the publishing of weekly report from Friday to Monday(next week).

<!--truncate-->

## Here's what we focused on this week:

- Bumped [go-storage] to v4.4.0 to support:
    - Implement GSP-86 Add CreateLink
    - Implement GSP-41 Turn Pair Expire into Duration
- Update [go-storage] in all services
- Optimize projects workflow, add golangci-lint
- Modify [go-integration-test] to add more test scenario
- New implement and bug fix in services
- Add multiple service support in [beyond-tp]
- Updated Documentation
    - Fix quickstart
    - Add docs and example for [go-service-memory]

## Weekly Stats

| | Opened this week | Closed this week |
| ---- | ---- | ---- |
| Issues | 16 | 10 |
| PR's | 71 | 70 |

## [go-storage](https://github.com/beyondstorage/go-storage)

- [@aeinrw] opened pull request [Implement GSP-41 go-storage#681](https://github.com/beyondstorage/go-storage/pull/681)
- [@Prnyself] merged pull request [Implement GSP-41 go-storage#681](https://github.com/beyondstorage/go-storage/pull/681)
- [@Xuanwo] opened issue [v4.4.0 Release Roadmap go-storage#682](https://github.com/beyondstorage/go-storage/issues/682)
- [@Xuanwo] closed issue [Tracking issue of GSP-669: Feature Lifecycle go-storage#672](https://github.com/beyondstorage/go-storage/issues/672)
- [@Xuanwo] opened issue [Integration tests for virtual features go-storage#683](https://github.com/beyondstorage/go-storage/issues/683)
- [@Xuanwo] opened issue [Allow user fetch the native support for storage go-storage#684](https://github.com/beyondstorage/go-storage/issues/684)
- [@Xuanwo] opened pull request [tests: Split from cmd definitions go-storage#685](https://github.com/beyondstorage/go-storage/pull/685)
- [@Xuanwo] merged pull request [tests: Split from cmd definitions go-storage#685](https://github.com/beyondstorage/go-storage/pull/685)
- [@JinnyYi] opened pull request [Bump to version 4.4.0 go-storage#686](https://github.com/beyondstorage/go-storage/pull/686)
- [@Xuanwo] merged pull request [Bump to version 4.4.0 go-storage#686](https://github.com/beyondstorage/go-storage/pull/686)
- [@Xuanwo] closed issue [v4.4.0 Release Roadmap go-storage#682](https://github.com/beyondstorage/go-storage/issues/682)
- @dependabot closed pull request [build(deps): bump github.com/google/uuid from 1.2.0 to 1.3.0 go-storage#675](https://github.com/beyondstorage/go-storage/pull/675)
- [@Xuanwo] opened pull request [tests: Implement bench for List go-storage#687](https://github.com/beyondstorage/go-storage/pull/687)
- [@Xuanwo] opened issue [Split local function and function won‘t return error go-storage#688](https://github.com/beyondstorage/go-storage/issues/688)
- [@Prnyself] closed issue [Tracking issue of GSP-41: Turn Pair Expire into Duration go-storage#676](https://github.com/beyondstorage/go-storage/issues/676)
- [@Xuanwo] opened issue [Setup golangci-lint for all golang projects go-storage#689](https://github.com/beyondstorage/go-storage/issues/689)
- [@burntcarrot] opened pull request [CI: Add golangci-lint go-storage#690](https://github.com/beyondstorage/go-storage/pull/690)
- [@burntcarrot] opened pull request [\*: Fix ineffectual assignments go-storage#691](https://github.com/beyondstorage/go-storage/pull/691)
- [@Xuanwo] opened issue [Oracle Cloud Storage Service go-storage#692](https://github.com/beyondstorage/go-storage/issues/692)
- [@Xuanwo] merged pull request [\*: Fix ineffectual assignments go-storage#691](https://github.com/beyondstorage/go-storage/pull/691)
- [@Xuanwo] opened issue [Split all pakcges under pkg/ into seprate repos go-storage#693](https://github.com/beyondstorage/go-storage/issues/693)
- [@Xuanwo] closed issue [Add benchmark tests to measure go-storage's overhead go-storage#569](https://github.com/beyondstorage/go-storage/issues/569)
- [@burntcarrot] opened issue [NewStoragerFromString doesn't register service while initiating a new storager go-storage#694](https://github.com/beyondstorage/go-storage/issues/694)

## [noah](https://github.com/beyondstorage/noah)

## [go-coreutils](https://github.com/beyondstorage/go-coreutils)

- @dependabot opened pull request [Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-coreutils#12](https://github.com/beyondstorage/go-coreutils/pull/12)
- [@Xuanwo] merged pull request [Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-coreutils#12](https://github.com/beyondstorage/go-coreutils/pull/12)

## [go-integration-test](https://github.com/beyondstorage/go-integration-test)

- [@JinnyYi] opened issue [copy/move to an existing dir failed for object storage services go-integration-test#39](https://github.com/beyondstorage/go-integration-test/issues/39)
- [@abyss-w] opened pull request [test: Implement GSP-86 Add linker integration tests go-integration-test#40](https://github.com/beyondstorage/go-integration-test/pull/40)
- @dependabot opened pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-integration-test#41](https://github.com/beyondstorage/go-integration-test/pull/41)
- [@JinnyYi] closed issue [v4.2.0 Release Roadmap go-integration-test#36](https://github.com/beyondstorage/go-integration-test/issues/36)
- [@JinnyYi] opened pull request [Split TestCopier and TestMover go-integration-test#42](https://github.com/beyondstorage/go-integration-test/pull/42)
- [@Xuanwo] opened issue [Add test for double writeAppend go-integration-test#43](https://github.com/beyondstorage/go-integration-test/issues/43)

## [go-service-fs](https://github.com/beyondstorage/go-service-fs)

- [@JinnyYi] opened pull request [Fix copy and move behavior go-service-fs#57](https://github.com/beyondstorage/go-service-fs/pull/57)
- [@Xuanwo] merged pull request [Fix copy and move behavior go-service-fs#57](https://github.com/beyondstorage/go-service-fs/pull/57)
- [@JinnyYi] opened pull request [Bump to version 3.3.0 go-service-fs#58](https://github.com/beyondstorage/go-service-fs/pull/58)
- [@Xuanwo] merged pull request [Bump to version 3.3.0 go-service-fs#58](https://github.com/beyondstorage/go-service-fs/pull/58)
- [@xiongjiwei] opened issue [writeAppend will truncate the data if file exists go-service-fs#59](https://github.com/beyondstorage/go-service-fs/issues/59)

## [go-service-example](https://github.com/beyondstorage/go-service-example)

- [@Xuanwo] closed issue [Service tracking issue for GSP-127: Add ServiceInternel and RequestThrottled Errors go-service-example#9](https://github.com/beyondstorage/go-service-example/issues/9)
- [@Xuanwo] closed issue [Service tracking issue for GSP-86: Add CreateLink Operation go-service-example#10](https://github.com/beyondstorage/go-service-example/issues/10)
- @dependabot opened pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-example#15](https://github.com/beyondstorage/go-service-example/pull/15)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-example#15](https://github.com/beyondstorage/go-service-example/pull/15)

## [go-service-azblob](https://github.com/beyondstorage/go-service-azblob)

- [@JinnyYi] opened pull request [Bump to version 2.2.0 go-service-azblob#42](https://github.com/beyondstorage/go-service-azblob/pull/42)
- [@Xuanwo] merged pull request [Bump to version 2.2.0 go-service-azblob#42](https://github.com/beyondstorage/go-service-azblob/pull/42)
- @dependabot closed pull request [build(deps): bump github.com/Azure/azure-storage-blob-go from 0.13.0 to 0.14.0 go-service-azblob#30](https://github.com/beyondstorage/go-service-azblob/pull/30)
- @dependabot opened pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-azblob#43](https://github.com/beyondstorage/go-service-azblob/pull/43)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-azblob#43](https://github.com/beyondstorage/go-service-azblob/pull/43)

## [go-service-cos](https://github.com/beyondstorage/go-service-cos)

- @dependabot opened pull request [build(deps): bump github.com/tencentyun/cos-go-sdk-v5 from 0.7.27 to 0.7.28 go-service-cos#48](https://github.com/beyondstorage/go-service-cos/pull/48)
- @dependabot opened pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-cos#49](https://github.com/beyondstorage/go-service-cos/pull/49)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-cos#49](https://github.com/beyondstorage/go-service-cos/pull/49)

## [go-service-dropbox](https://github.com/beyondstorage/go-service-dropbox)

- [@JinnyYi] opened pull request [Implement GSP-134 Write Behavior Consistency go-service-dropbox#34](https://github.com/beyondstorage/go-service-dropbox/pull/34)
- [@xxchan] merged pull request [Implement GSP-134 Write Behavior Consistency go-service-dropbox#34](https://github.com/beyondstorage/go-service-dropbox/pull/34)
- @dependabot closed pull request [Bump github.com/google/uuid from 1.2.0 to 1.3.0 go-service-dropbox#25](https://github.com/beyondstorage/go-service-dropbox/pull/25)
- [@JinnyYi] opened pull request [Bump to version 2.2.0 go-service-dropbox#35](https://github.com/beyondstorage/go-service-dropbox/pull/35)
- [@Xuanwo] merged pull request [Bump to version 2.2.0 go-service-dropbox#35](https://github.com/beyondstorage/go-service-dropbox/pull/35)
- @dependabot closed pull request [Bump github.com/dropbox/dropbox-sdk-go-unofficial/v6 from 6.0.1 to 6.0.2 go-service-dropbox#24](https://github.com/beyondstorage/go-service-dropbox/pull/24)
- [@JinnyYi] closed pull request [build(deps): bump github.com/beyondstorage/go-integration-test/v4 from 4.1.1 to 4.2.0 go-service-dropbox#32](https://github.com/beyondstorage/go-service-dropbox/pull/32)
- @dependabot opened pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-dropbox#36](https://github.com/beyondstorage/go-service-dropbox/pull/36)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-dropbox#36](https://github.com/beyondstorage/go-service-dropbox/pull/36)

## [go-service-gcs](https://github.com/beyondstorage/go-service-gcs)

- [@JinnyYi] opened pull request [Update types & Implement GSP-654 go-service-gcs#49](https://github.com/beyondstorage/go-service-gcs/pull/49)
- [@xxchan] merged pull request [Update types & Implement GSP-654 go-service-gcs#49](https://github.com/beyondstorage/go-service-gcs/pull/49)
- @dependabot closed pull request [build(deps): bump github.com/google/uuid from 1.2.0 to 1.3.0 go-service-gcs#40](https://github.com/beyondstorage/go-service-gcs/pull/40)
- [@JinnyYi] opened pull request [Bump to version 2.2.0 go-service-gcs#50](https://github.com/beyondstorage/go-service-gcs/pull/50)
- [@Xuanwo] merged pull request [Bump to version 2.2.0 go-service-gcs#50](https://github.com/beyondstorage/go-service-gcs/pull/50)
- @dependabot closed pull request [build(deps): bump google.golang.org/api from 0.49.0 to 0.50.0 go-service-gcs#39](https://github.com/beyondstorage/go-service-gcs/pull/39)
- @dependabot closed pull request [build(deps): bump cloud.google.com/go/storage from 1.15.0 to 1.16.0 go-service-gcs#38](https://github.com/beyondstorage/go-service-gcs/pull/38)
- [@JinnyYi] closed pull request [build(deps): bump github.com/beyondstorage/go-integration-test/v4 from 4.1.1 to 4.2.0 go-service-gcs#48](https://github.com/beyondstorage/go-service-gcs/pull/48)
- @dependabot opened pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-gcs#51](https://github.com/beyondstorage/go-service-gcs/pull/51)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-gcs#51](https://github.com/beyondstorage/go-service-gcs/pull/51)
- @dependabot opened pull request [build(deps): bump google.golang.org/api from 0.50.0 to 0.51.0 go-service-gcs#52](https://github.com/beyondstorage/go-service-gcs/pull/52)

## [go-service-kodo](https://github.com/beyondstorage/go-service-kodo)

- [@JinnyYi] opened pull request [Implement GSP-134 and GSP-654 go-service-kodo#43](https://github.com/beyondstorage/go-service-kodo/pull/43)
- [@xxchan] merged pull request [Implement GSP-134 and GSP-654 go-service-kodo#43](https://github.com/beyondstorage/go-service-kodo/pull/43)
- @dependabot closed pull request [build(deps): bump github.com/google/uuid from 1.2.0 to 1.3.0 go-service-kodo#33](https://github.com/beyondstorage/go-service-kodo/pull/33)
- @dependabot closed pull request [build(deps): bump github.com/beyondstorage/go-integration-test/v4 from 4.1.1 to 4.2.0 go-service-kodo#40](https://github.com/beyondstorage/go-service-kodo/pull/40)
- [@JinnyYi] opened pull request [Bump to version 2.2.0 go-service-kodo#44](https://github.com/beyondstorage/go-service-kodo/pull/44)
- [@Xuanwo] merged pull request [Bump to version 2.2.0 go-service-kodo#44](https://github.com/beyondstorage/go-service-kodo/pull/44)
- @dependabot closed pull request [build(deps): bump github.com/qiniu/go-sdk/v7 from 7.9.6 to 7.9.7 go-service-kodo#32](https://github.com/beyondstorage/go-service-kodo/pull/32)
- @dependabot opened pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-kodo#45](https://github.com/beyondstorage/go-service-kodo/pull/45)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-kodo#45](https://github.com/beyondstorage/go-service-kodo/pull/45)

## [go-service-oss](https://github.com/beyondstorage/go-service-oss)

- [@JinnyYi] opened pull request [Implement GSP-134 & GSP-654 go-service-oss#43](https://github.com/beyondstorage/go-service-oss/pull/43)
- [@xxchan] merged pull request [Implement GSP-134 & GSP-654 go-service-oss#43](https://github.com/beyondstorage/go-service-oss/pull/43)
- @dependabot closed pull request [Bump github.com/google/uuid from 1.2.0 to 1.3.0 go-service-oss#34](https://github.com/beyondstorage/go-service-oss/pull/34)
- [@JinnyYi] opened pull request [Bump to version 2.2.0 go-service-oss#44](https://github.com/beyondstorage/go-service-oss/pull/44)
- [@Xuanwo] merged pull request [Bump to version 2.2.0 go-service-oss#44](https://github.com/beyondstorage/go-service-oss/pull/44)
- @dependabot closed pull request [Bump github.com/aliyun/aliyun-oss-go-sdk from 2.1.8+incompatible to 2.1.9+incompatible go-service-oss#33](https://github.com/beyondstorage/go-service-oss/pull/33)
- [@JinnyYi] closed pull request [build(deps): bump github.com/beyondstorage/go-integration-test/v4 from 4.1.1 to 4.2.0 go-service-oss#42](https://github.com/beyondstorage/go-service-oss/pull/42)
- @dependabot opened pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-oss#45](https://github.com/beyondstorage/go-service-oss/pull/45)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-oss#45](https://github.com/beyondstorage/go-service-oss/pull/45)

## [go-service-qingstor](https://github.com/beyondstorage/go-service-qingstor)

- [@Prnyself] opened issue [copy: Invalid argument x-qs-copy-source go-service-qingstor#70](https://github.com/beyondstorage/go-service-qingstor/issues/70)
- [@JinnyYi] opened pull request [Update types, fix list and append behavior go-service-qingstor#71](https://github.com/beyondstorage/go-service-qingstor/pull/71)
- [@xxchan] merged pull request [Update types, fix list and append behavior go-service-qingstor#71](https://github.com/beyondstorage/go-service-qingstor/pull/71)
- [@JinnyYi] opened pull request [Fix invalid argument for copy and move go-service-qingstor#72](https://github.com/beyondstorage/go-service-qingstor/pull/72)
- [@Prnyself] merged pull request [Fix invalid argument for copy and move go-service-qingstor#72](https://github.com/beyondstorage/go-service-qingstor/pull/72)
- [@Prnyself] closed issue [copy: Invalid argument x-qs-copy-source go-service-qingstor#70](https://github.com/beyondstorage/go-service-qingstor/issues/70)
- [@JinnyYi] opened pull request [Fix append behavior go-service-qingstor#73](https://github.com/beyondstorage/go-service-qingstor/pull/73)
- [@xxchan] merged pull request [Fix append behavior go-service-qingstor#73](https://github.com/beyondstorage/go-service-qingstor/pull/73)
- [@JinnyYi] opened pull request [Migrate to go-endpoint go-service-qingstor#74](https://github.com/beyondstorage/go-service-qingstor/pull/74)
- [@Xuanwo] merged pull request [Migrate to go-endpoint go-service-qingstor#74](https://github.com/beyondstorage/go-service-qingstor/pull/74)
- [@JinnyYi] opened pull request [Bump to version 3.2.0 go-service-qingstor#75](https://github.com/beyondstorage/go-service-qingstor/pull/75)
- [@Xuanwo] merged pull request [Bump to version 3.2.0 go-service-qingstor#75](https://github.com/beyondstorage/go-service-qingstor/pull/75)
- @dependabot closed pull request [build(deps): bump github.com/google/uuid from 1.2.0 to 1.3.0 go-service-qingstor#61](https://github.com/beyondstorage/go-service-qingstor/pull/61)
- [@aeinrw] opened pull request [Update go-storage to v4.4.0 and Implement GSP-41 go-service-qingstor#76](https://github.com/beyondstorage/go-service-qingstor/pull/76)
- [@Prnyself] merged pull request [Update go-storage to v4.4.0 and Implement GSP-41 go-service-qingstor#76](https://github.com/beyondstorage/go-service-qingstor/pull/76)

## [go-service-s3](https://github.com/beyondstorage/go-service-s3)

- @dependabot opened pull request [build(deps): bump github.com/aws/aws-sdk-go from 1.40.1 to 1.40.3 go-service-s3#155](https://github.com/beyondstorage/go-service-s3/pull/155)
- @dependabot closed pull request [build(deps): bump github.com/aws/aws-sdk-go from 1.40.1 to 1.40.2 go-service-s3#154](https://github.com/beyondstorage/go-service-s3/pull/154)
- @dependabot opened pull request [build(deps): bump github.com/aws/aws-sdk-go from 1.40.1 to 1.40.4 go-service-s3#156](https://github.com/beyondstorage/go-service-s3/pull/156)
- @dependabot closed pull request [build(deps): bump github.com/aws/aws-sdk-go from 1.40.1 to 1.40.3 go-service-s3#155](https://github.com/beyondstorage/go-service-s3/pull/155)
- [@zhaohuxing] opened pull request [Support offset and size for read go-service-s3#157](https://github.com/beyondstorage/go-service-s3/pull/157)
- [@Xuanwo] merged pull request [Support offset and size for read go-service-s3#157](https://github.com/beyondstorage/go-service-s3/pull/157)
- [@Xuanwo] closed issue [Add support for offset and size for Read go-service-s3#152](https://github.com/beyondstorage/go-service-s3/issues/152)
- @dependabot opened pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-s3#158](https://github.com/beyondstorage/go-service-s3/pull/158)
- @dependabot opened pull request [build(deps): bump github.com/aws/aws-sdk-go from 1.40.1 to 1.40.5 go-service-s3#159](https://github.com/beyondstorage/go-service-s3/pull/159)
- @dependabot closed pull request [build(deps): bump github.com/aws/aws-sdk-go from 1.40.1 to 1.40.4 go-service-s3#156](https://github.com/beyondstorage/go-service-s3/pull/156)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-s3#158](https://github.com/beyondstorage/go-service-s3/pull/158)
- @dependabot opened pull request [build(deps): bump github.com/aws/aws-sdk-go from 1.40.1 to 1.40.6 go-service-s3#160](https://github.com/beyondstorage/go-service-s3/pull/160)
- @dependabot closed pull request [build(deps): bump github.com/aws/aws-sdk-go from 1.40.1 to 1.40.5 go-service-s3#159](https://github.com/beyondstorage/go-service-s3/pull/159)

## [go-service-uss](https://github.com/beyondstorage/go-service-uss)

- [@JinnyYi] opened pull request [Fix list behavior go-service-uss#21](https://github.com/beyondstorage/go-service-uss/pull/21)
- [@Xuanwo] merged pull request [Fix list behavior go-service-uss#21](https://github.com/beyondstorage/go-service-uss/pull/21)
- [@JinnyYi] opened pull request [Bump to version 2.2.0 go-service-uss#22](https://github.com/beyondstorage/go-service-uss/pull/22)
- [@Xuanwo] merged pull request [Bump to version 2.2.0 go-service-uss#22](https://github.com/beyondstorage/go-service-uss/pull/22)
- @dependabot opened pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-uss#23](https://github.com/beyondstorage/go-service-uss/pull/23)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-uss#23](https://github.com/beyondstorage/go-service-uss/pull/23)

## [rs-storage](https://github.com/beyondstorage/rs-storage)

## [site](https://github.com/beyondstorage/site)

- [@Xuanwo] opened issue [Add Contributor Guide site#146](https://github.com/beyondstorage/site/issues/146)
- [@xxchan] opened pull request [Fix quickstart site#147](https://github.com/beyondstorage/site/pull/147)
- [@Xuanwo] merged pull request [Fix quickstart site#147](https://github.com/beyondstorage/site/pull/147)

## [specs](https://github.com/beyondstorage/specs)

## [beyond-tp](https://github.com/beyondstorage/beyond-tp)

- [@Prnyself] opened pull request [task: Add multiple service support beyond-tp#121](https://github.com/beyondstorage/beyond-tp/pull/121)
- [@Xuanwo] merged pull request [task: Add multiple service support beyond-tp#121](https://github.com/beyondstorage/beyond-tp/pull/121)

## [go-toolbox](https://github.com/beyondstorage/go-toolbox)

## [go-storage-example](https://github.com/beyondstorage/go-storage-example)

- [@Xuanwo] merged pull request [Bump github.com/beyondstorage/go-storage/v4 from 4.2.0 to 4.3.2 go-storage-example#13](https://github.com/beyondstorage/go-storage-example/pull/13)
- [@Xuanwo] merged pull request [Add IPFS example go-storage-example#12](https://github.com/beyondstorage/go-storage-example/pull/12)
- @dependabot opened pull request [Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-storage-example#14](https://github.com/beyondstorage/go-storage-example/pull/14)
- [@Xuanwo] merged pull request [Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-storage-example#14](https://github.com/beyondstorage/go-storage-example/pull/14)

## [go-service-webdav](https://github.com/beyondstorage/go-service-webdav)

- @dependabot opened pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-webdav#9](https://github.com/beyondstorage/go-service-webdav/pull/9)
- [@Xuanwo] merged pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-webdav#9](https://github.com/beyondstorage/go-service-webdav/pull/9)

## [go-service-ftp](https://github.com/beyondstorage/go-service-ftp)

- @dependabot opened pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-ftp#11](https://github.com/beyondstorage/go-service-ftp/pull/11)
- [@Xuanwo] merged pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-ftp#11](https://github.com/beyondstorage/go-service-ftp/pull/11)

## [go-service-minio](https://github.com/beyondstorage/go-service-minio)

- [@aeinrw] opened pull request [Implement Reacher go-service-minio#16](://github.com/beyondstorage/go-service-minio/pull/16)
- @dependabot opened pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-minio#17](https://github.com/beyondstorage/go-service-minio/pull/17)
- [@Xuanwo] merged pull request [Implement Reacher go-service-minio#16](https://github.com/beyondstorage/go-service-minio/pull/16)

## [go-service-hdfs](https://github.com/beyondstorage/go-service-hdfs)

- @dependabot opened pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-hdfs#13](https://github.com/beyondstorage/go-service-hdfs/pull/13)
- [@Xuanwo] merged pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-hdfs#13](https://github.com/beyondstorage/go-service-hdfs/pull/13)

## [go-service-ipfs](https://github.com/beyondstorage/go-service-ipfs)

- @dependabot opened pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-ipfs#18](https://github.com/beyondstorage/go-service-ipfs/pull/18)
- [@Xuanwo] merged pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-ipfs#18](https://github.com/beyondstorage/go-service-ipfs/pull/18)

## [go-service-storj](https://github.com/beyondstorage/go-service-storj)

- @dependabot opened pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-storj#9](https://github.com/beyondstorage/go-service-storj/pull/9)
- [@Xuanwo] merged pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-storj#9](https://github.com/beyondstorage/go-service-storj/pull/9)

## [beyond-ftp](https://github.com/beyondstorage/beyond-ftp)

- [@xiongjiwei] opened pull request [ftp server: init commit for the FTP server and testkit beyond-ftp#4](https://github.com/beyondstorage/beyond-ftp/pull/4)
- @dependabot opened pull request [Bump github.com/beyondstorage/go-storage/v4 from 4.2.0 to 4.4.0 beyond-ftp#5](https://github.com/beyondstorage/beyond-ftp/pull/5)
- @dependabot closed pull request [Bump github.com/beyondstorage/go-storage/v4 from 4.2.0 to 4.3.2 beyond-ftp#3](https://github.com/beyondstorage/beyond-ftp/pull/3)
- [@Xuanwo] closed pull request [Bump github.com/beyondstorage/go-storage/v4 from 4.2.0 to 4.4.0 beyond-ftp#5](https://github.com/beyondstorage/beyond-ftp/pull/5)

## [beyond-fs](https://github.com/beyondstorage/beyond-fs)

- @dependabot opened pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.2.0 to 4.4.0 beyond-fs#15](https://github.com/beyondstorage/beyond-fs/pull/15)
- @dependabot closed pull request [Bump github.com/beyondstorage/go-storage/v4 from 4.2.0 to 4.3.2 beyond-fs#11](https://github.com/beyondstorage/beyond-fs/pull/11)

## [go-service-onedrive](https://github.com/beyondstorage/go-service-onedrive)

- @dependabot opened pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-onedrive#10](https://github.com/beyondstorage/go-service-onedrive/pull/10)
- [@Xuanwo] merged pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-onedrive#10](https://github.com/beyondstorage/go-service-onedrive/pull/10)

## [go-service-gdrive](https://github.com/beyondstorage/go-service-gdrive)

- [@Xuanwo] merged pull request [Add gdrive for go-storage design go-service-gdrive#14](https://github.com/beyondstorage/go-service-gdrive/pull/14)

## [forum-redirect](https://github.com/beyondstorage/forum-redirect)

## [go-service-memory](https://github.com/beyondstorage/go-service-memory)

- @dependabot opened pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-memory#8](https://github.com/beyondstorage/go-service-memory/pull/8)
- [@Xuanwo] merged pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-memory#8](https://github.com/beyondstorage/go-service-memory/pull/8)
- [@Xuanwo] opened pull request [Implement Storager go-service-memory#9](https://github.com/beyondstorage/go-service-memory/pull/9)
- [@Xuanwo] closed issue [Implement memory support go-service-memory#5](https://github.com/beyondstorage/go-service-memory/issues/5)
- [@Xuanwo] opened issue [Setup benchmark tests go-service-memory#10](https://github.com/beyondstorage/go-service-memory/issues/10)
- [@Xuanwo] opened issue [Add docs and examples go-service-memory#11](https://github.com/beyondstorage/go-service-memory/issues/11)
- [@Xuanwo] merged pull request [Implement Storager go-service-memory#9](https://github.com/beyondstorage/go-service-memory/pull/9)

## [go-service-tar](https://github.com/beyondstorage/go-service-tar)

- @dependabot opened pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-tar#8](https://github.com/beyondstorage/go-service-tar/pull/8)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-tar#8](https://github.com/beyondstorage/go-service-tar/pull/8)

## [go-service-zip](https://github.com/beyondstorage/go-service-zip)

- @dependabot opened pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-zip#7](https://github.com/beyondstorage/go-service-zip/pull/7)
- [@Xuanwo] merged pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.3.2 to 4.4.0 go-service-zip#7](https://github.com/beyondstorage/go-service-zip/pull/7)

## [go-endpoint](https://github.com/beyondstorage/go-endpoint)

- [@Xuanwo] merged pull request [Implementing RFC-8: Add TCP Protocol go-endpoint#11](https://github.com/beyondstorage/go-endpoint/pull/11)

## [go-community](https://github.com/beyondstorage/go-community)

- @dependabot opened pull request [Bump maunium.net/go/mautrix from 0.9.14 to 0.9.15 go-community#14](https://github.com/beyondstorage/go-community/pull/14)
- @dependabot opened pull request [Bump maunium.net/go/mautrix from 0.9.14 to 0.9.16 go-community#15](https://github.com/beyondstorage/go-community/pull/15)
- @dependabot closed pull request [Bump maunium.net/go/mautrix from 0.9.14 to 0.9.15 go-community#14](https://github.com/beyondstorage/go-community/pull/14)

## [community](https://github.com/beyondstorage/community)

- [@Xuanwo] opened issue [Weekly report since 2021-07-12 #22](https://github.com/beyondstorage/community/issues/22)
- [@Xuanwo] opened pull request [Nominate @zhaohuxing as go-storage contributor #23](https://github.com/beyondstorage/community/pull/23)
- [@Xuanwo] merged pull request [Nominate @zhaohuxing as go-storage contributor #23](https://github.com/beyondstorage/community/pull/23)

## [setup-hdfs](https://github.com/beyondstorage/setup-hdfs)

- @dependabot opened pull request [build(deps-dev): Bump @types/node from 16.0.0 to 16.3.3 setup-hdfs#13](https://github.com/beyondstorage/setup-hdfs/pull/13)
- @dependabot closed pull request [build(deps-dev): Bump @types/node from 16.0.0 to 16.3.2 setup-hdfs#12](https://github.com/beyondstorage/setup-hdfs/pull/12)
- @dependabot opened pull request [build(deps-dev): Bump @vercel/ncc from 0.28.6 to 0.29.0 setup-hdfs#14](https://github.com/beyondstorage/setup-hdfs/pull/14)
- @dependabot opened pull request [build(deps-dev): Bump @types/node from 16.0.0 to 16.4.0 setup-hdfs#15](https://github.com/beyondstorage/setup-hdfs/pull/15)
- @dependabot closed pull request [build(deps-dev): Bump @types/node from 16.0.0 to 16.3.3 setup-hdfs#13](https://github.com/beyondstorage/setup-hdfs/pull/13)
- @dependabot opened pull request [build(deps-dev): Bump ts-jest from 27.0.3 to 27.0.4 setup-hdfs#16](https://github.com/beyondstorage/setup-hdfs/pull/16)
- @dependabot opened pull request [build(deps-dev): Bump @types/node from 16.0.0 to 16.4.1 setup-hdfs#17](https://github.com/beyondstorage/setup-hdfs/pull/17)
- @dependabot closed pull request [build(deps-dev): Bump @types/node from 16.0.0 to 16.4.0 setup-hdfs#15](https://github.com/beyondstorage/setup-hdfs/pull/15)

## [forum-theme](https://github.com/beyondstorage/forum-theme)

## [beyond-ctl](https://github.com/beyondstorage/beyond-ctl)

## [go-credential](https://github.com/beyondstorage/go-credential)

## [go-fswrap](https://github.com/beyondstorage/go-fswrap)

[@Xuanwo]: https://github.com/Xuanwo
[@Prnyself]: https://github.com/Prnyself
[@JinnyYi]: https://github.com/JinnyYi
[@xxchan]: https://github.com/xxchan
[@xiongjiwei]: https://github.com/xiongjiwei
[@aeinrw]: https://github.com/aeinrw
[@burntcarrot]: https://github.com/burntcarrot
[@zhaohuxing]: https://github.com/zhaohuxing

[go-storage]: https://github.com/beyondstorage/go-storage
[go-integration-test]: https://github.com/beyondstorage/go-integration-test
[beyond-tp]: https://github.com/beyondstorage/beyond-tp
[go-service-memory]: https://github.com/beyondstorage/go-service-memory