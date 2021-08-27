`create_block` is used to create a block object.


## Behavior

- CreateBlock SHOULD NOT return an error as the object exist.
    - Service that has native support for `overwrite` doesn't NEED to check the object exists or not.
    - Service that doesn't have native support for `overwrite` SHOULD check and delete the object if exists.
