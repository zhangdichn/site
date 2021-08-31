`create_append` is used to create an appendable object.


## Behavior

- CreateAppend SHOULD create an appendable object with position 0 and size 0.
- CreateAppend SHOULD NOT return an error as the object exist.
    - Service SHOULD check and delete the object if exists.
