---
title: "2021-22 Weekly Report"
author: "JinnyYi"
author_url: "https://github.com/JinnyYi"
tags:
  - updates
  - weekly-report
---

Hello everyone, here is the weekly report for [BeyondStorage](https://beyondstorage.io), range from 2021-05-31 to 2021-06-04.

<!--truncate-->

## 库

### Feature Gates

As we mentioned in [last week's report](https://beyondstorage.io/blog/2021/05/28/weekly-report), [@Xuanwo](https://github.com/Xuanwo) proposed [GSP-87: Feature Gates](https://github.com/beyondstorage/specs/blob/master/rfcs/87-feature-gates.md) to handle behavior consistency for [go-storage](https://github.com/beyondstorage/go-storage) and implemented in [specs](https://github.com/beyondstorage/specs) and [go-storage](https://github.com/beyondstorage/go-storage). Based on these, all the basic implementation for different services are finished this week. Specific behaviors of interfaces in different services need further discussion.

For more details, please refer to [Implement GSP-87 Feature Gates](https://github.com/beyondstorage/go-storage/issues/587).

### Parse Pairs from String

We had config strings like `s3://bucket_name?access_key=xxxx&secret_key=xxxx` before but deprecated for some reasons.

Passing string config is indeed more convenient, if not much. So [@xxchan](https://github.com/xxchan) proposed [GSP-90: Parse Pairs from String](https://github.com/beyondstorage/specs/pull/90) to use a registry mechanism for parsing pairs.

To illustrate its feasibility, [@xxchan](https://github.com/xxchan) implemented it in [go-storage](https://github.com/beyondstorage/go-storage) and [go-service-qingstor](https://github.com/beyondstorage/go-service-qingstor). In addition, he provided an alternative way which use a deserializer instead of implementing parse functions ourselves. You can track [here](https://github.com/beyondstorage/specs/pull/90#issuecomment-852415718) for details.

This proposal is still in discussion, for more details, please refer to [GSP-90: Parse Pairs from String](https://github.com/beyondstorage/specs/pull/90).

### Network Error and Retryable Server-side Errors

Currently, we use a function named `formatError` in generated code to turn SDK errors into our errors, as defined in [GSP-47](https://github.com/beyondstorage/specs/blob/master/rfcs/47-additional-error-specification.md). And introduced `InternalError` to add support for recognizing errors defined in [go-storage](https://github.com/beyondstorage/go-storage) in [GSP-51](https://github.com/beyondstorage/specs/blob/master/rfcs/51-distinguish-errors-by-isaoserror.md).

Network errors are common and should be expected. Besides, there's a common need to retry a network error. So we should provide network error codes.

[@xxchan](https://github.com/xxchan) proposed [GSP-60: Network Error and Retryable Server-side Errors](https://github.com/beyondstorage/specs/pull/60) several days before to add the global error codes. A new conversation on the proposal came out this week.

Please keep an eye on [GSP-60: Network Error and Retryable Server-side Errors](https://github.com/beyondstorage/specs/pull/60) to follow the progress.

## 社区

### 开源软件供应链点亮计划 - 暑期2021

[Summer 2021 of Open Source Promotion Plan](https://forum.beyondstorage.io/t/summer-2021-of-open-source-promotion-plan/22) is now recruiting. We continued to receive some applications this week and all the applications are aggregating [here](https://forum.beyondstorage.io/t/ospp-2021-application-aggregation/56).

For more details, please refer to <https://beyondstorage.io/community/events/ospp-summer-2021>.
