[Rclone](https://github.com/rclone/rclone) is a command-line program to sync files and directories to and from different cloud storage providers. [Rclone](https://github.com/rclone/rclone) is a command-line program to sync files and directories to and from different cloud storage providers. rclone is built upon [rclone/fs.Fs](https://github.com/rclone/rclone/blob/master/fs/fs.go) interface, and has up to 38 backend support.

rclone has following features:

- MD5/SHA-1 hashes checked at all times for file integrity
- Timestamps preserved on files
- Partial syncs supported on a whole file basis
- [Copy](https://rclone.org/commands/rclone_copy/) mode to just copy new/changed files
- [Sync](https://rclone.org/commands/rclone_sync/) (one way) mode to make a directory identical
- [Check](https://rclone.org/commands/rclone_check/) mode to check for file hash equality
- Can sync to and from network, e.g. two different cloud accounts
- Optional large file chunking ([Chunker](https://rclone.org/chunker/))
- Optional transparent compression ([Compress](https://rclone.org/compress/))
- Optional encryption ([Crypt](https://rclone.org/crypt/))
- Optional cache ([Cache](https://rclone.org/cache/))
- Optional FUSE mount ([rclone mount](https://rclone.org/commands/rclone_mount/))
- Multi-threaded downloads to local disk
- Can [serve](https://rclone.org/commands/rclone_serve/) local or remote files over HTTP/WebDav/FTP/SFTP/dlna

rclone intends to be "rsync for cloud storage", but [go-storage][] wants to build a storage abstraction beyond the existing storage services. It's a library instead of an application. It's a library instead of an application.

That means [go-storage][] will focus on different features that rclone have:

- Multipart support (S3 alike multipart support)
- Append support (append content to file tail)
- Page support (random write)
- Both Prefix and Dir ListMode support
- ...

With [go-storage][], developers can build applications like rclone without implementing all those backends by hand.

[go-storage]: https://github.com/beyondstorage/go-storage
