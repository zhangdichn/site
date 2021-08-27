`list` is used to list objects from storage.


## Behavior

- Service SHOULD support default `ListMode`.
- Service SHOULD implement `ListModeDir` without the check for `VirtualDir`.
- Service DON'T NEED to `Stat` while in `List`.
