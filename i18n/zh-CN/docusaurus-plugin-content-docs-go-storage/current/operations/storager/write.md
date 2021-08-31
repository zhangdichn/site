will write data into a file.

## Behavior

- Write SHOULD NOT return an error as the object exist.
    - Service that has native support for `overwrite` doesn't NEED to check the object exists or not.
    - Service that doesn't have native support for `overwrite` SHOULD check and delete the object if exists.
- A successful write operation SHOULD be complete, which means the object's content and metadata should be the same as specified in write request.
