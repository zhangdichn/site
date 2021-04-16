`get` operation is used to get a storage under current service.

For example, in object storage services, `get` means construct a struct which contains the connection to a specific bucket.

## Behavior

- Storage service SHOULD return errors while the storage doesn't exist.