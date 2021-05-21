`complete_multipart` is used to construct a valid object with parts.

## Behavior

- When completing a multipart upload, the service creates an object by concatenating the parts in ascending order based on the part number.

- The `complete_multipart` request must include the upload ID and a list of part information, usually include both part numbers and corresponding ETag values returned by `write_multipart`.