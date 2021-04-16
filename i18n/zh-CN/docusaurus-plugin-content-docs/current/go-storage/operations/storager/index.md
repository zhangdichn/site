---
title: 介绍
---

Storager is the main interface for storage service.

## Basic Operations

### List

[List](go-storage/operations/storager/list.md) will list objects under storage.

### Create

[Create](create.md) will create an object struct without any API call.

### Delete

[Delete](go-storage/operations/storager/delete.md) will delete an Object from storage.

### Metadata

[Metadata](go-storage/operations/storager/metadata.md) will return current storager's metadata.

### Read

[Read](go-storage/operations/storager/read.md) will read the Object data.

### Stat

[Stat](go-storage/operations/storager/stat.md) will stat a path to get info of an object.

### Write

[Write](go-storage/operations/storager/write.md) will write data into an Object.

## Extended operations

### Copy

[Copy](go-storage/operations/copy.md) will copy an Object in Storage.

### Move

[Move](go-storage/operations/move.md) will move an Object in Storage.

### Reach

[Reach](go-storage/operations/reach.md) will get a public url to reach the object.

### Multipart

[Multipart](go-storage/operations/multiparter/index.md) will construct an Object via multiparts.

### Append

[Append](go-storage/operations/appender/index.md) will construct an Object via append operations.

### Block

[Block](go-storage/operations/blocker/index.md) will construct an Object via blocks.

### Page

[Page](go-storage/operations/pager/index.md) will construct an Object via pages.
