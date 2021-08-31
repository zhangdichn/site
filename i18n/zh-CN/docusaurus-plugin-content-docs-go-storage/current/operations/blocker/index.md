---
title: 介绍
sidebar_position: 1
---

`Blocker` is used to maintain block object.

## Workflow

- Use [create_block](./create_block.md) to create a block object.
- Use [write_block](./write_block.md) to write data into blocks.
- Use [list_block](./list_block.md) to list blocks in the object.
- Use [combine_block](./combine_block.md) to construct a valid object with blocks.

## Behavior

- The object CANNOT be accessible before `combine_block`.