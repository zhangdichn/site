---
title: Mover
---

`Mover` is used to move object inside current storager.

## Behavior

- Move only move one and only one object.
    - Service DON'T NEED to support move a non-empty directory.
    - User NEED to implement move a non-empty directory by themself.
    - Move a file to a directory SHOULD return `ErrObjectModeInvalid`.
- Move SHOULD NOT return an error as dst object exists.
    - Service that has native support for `overwrite` doesn't NEED to check the dst object exists or not.
    - Service that doesn't have native support for `overwrite` SHOULD check and delete the dst object if exists.
- A successful move operation SHOULD be complete, which means the dst object's content and metadata should be the same as src object.
