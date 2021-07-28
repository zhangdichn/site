---
title: Copier
---

`Copier` is used to copy object inside the storager.

## Behavior

- Copy only copy one and only one object.
    - Service DON'T NEED to support copy a non-empty directory or copy files recursively.
    - User NEED to implement copy a non-empty directory and copy recursively by themself.
    - Copy a file to a directory SHOULD return `ErrObjectModeInvalid`.
- Copy SHOULD NOT return an error as dst object exists.
    - Service that has native support for `overwrite` doesn't NEED to check the dst object exists or not.
    - Service that doesn't have native support for `overwrite` SHOULD check and delete the dst object if exists.
- A successful copy opration should be complete, which means the dst object's content and metadata should be the same as src object.
