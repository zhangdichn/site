`write_multipart` is used to write data into parts.

## Behavior

- When uploading a part, in addition to the upload ID, you must specify a part number. A part number uniquely identifies a part and its position in the object you are uploading. A part number uniquely identifies a part and its position in the object you are uploading.

- Part number is zero-based. Part number is zero-based. For the current supported services, it can be any number from 0 to 9,999, inclusive.

- Whenever upload a part, the service returns the part information in its response, usually includes an ETag value. For each part upload, you must record the part information. You must include these values in the subsequent request to complete the multipart upload. For each part upload, you must record the part information. You must include these values in the subsequent request to complete the multipart upload.