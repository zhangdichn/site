`pair_policy` is used to specific the behavior that go-storage should take while meeting not supported pair.

## Description

`pair_policy` looks like:

```golang
type PairPolicy struct {
    ...

    All bool
    Write            bool
    WriteContentType bool

    ...
}
```

- `All` will apply this value to all operation.
- `Write` will apply this value to `write` operation.
- `WriteContentType` will apply value to `WriteContentType` operation.

While the value is `true`, go-storage will return a `PairUnsupportedError`. Or, it will just ignore the pair.

## Supported Operation

- NewServicer
- NewStorager
