`delete` is used to delete an object.

## Behavior

- Delete only delete one and only one object.
    - Service DON'T NEED to support remove all.
    - User NEED to implement remove_all by themself.
- Delete is idempotent.
    - Successful delete always return nil error.
    - Delete SHOULD never return `ObjectNotExist`
    - Delete DON'T NEED to check the object exist or not.
