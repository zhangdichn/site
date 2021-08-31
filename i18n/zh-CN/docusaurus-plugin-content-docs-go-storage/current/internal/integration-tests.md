---
title: Integration Tests
---

We use [go-integration-test][] to execute integration tests on services.

## About go-integration-test

[go-integration-test][] organized all tests case into:

```go
func TestStorager(t *testing.T, store types.Storager) {
...
}
}
```

For now, go-integration-test implement three test cases:

- [TestStorager](https://github.com/beyondstorage/go-integration-test/blob/master/storager.go)
- [TestMultiparter](https://github.com/beyondstorage/go-integration-test/blob/master/multiparter.go)
- [TestAppender](https://github.com/beyondstorage/go-integration-test/blob/master/appender.go)

All services should add integration tests for operations that they declared in `service.toml`.

## How to add integration tests?

### Setup tests

Create a `tests` directory under the project.

Normally, the structure is:

```shell
tests
├── README.md
├── storage_test.go
└── utils_test.go
```

`README.md` should add documents about how to run tests.

`storage_test.go` includes all tests cases from go-integration-test:

```go
package tests

import (
   "os"
   "testing"

   tests "github.com/beyondstorage/go-integration-test/v4"
)

func TestStorage(t *testing.T) {
   if os.Getenv("STORAGE_FS_INTEGRATION_TEST") != "on" {
      t.Skipf("STORAGE_FS_INTEGRATION_TEST is not 'on', skipped")
   }
   tests.TestStorager(t, setupTest(t))
}

func TestAppend(t *testing.T) {
   if os.Getenv("STORAGE_FS_INTEGRATION_TEST") != "on" {
      t.Skipf("STORAGE_FS_INTEGRATION_TEST is not 'on', skipped")
   }
   tests.TestAppender(t, setupTest(t))
}
```

`utils_test.go` should implement `setupTest` which returns `types.Storager`:

```go
func setupTest(t *testing.T) types.Storager {
   t.Log("Setup test for qingstor")

   store, err := s3.NewStorager(
      ps.WithCredential(os.Getenv("STORAGE_S3_CREDENTIAL")),
      ps.WithName(os.Getenv("STORAGE_S3_NAME")),
      ps.WithLocation(os.Getenv("STORAGE_S3_LOCATION")),
      ps.WithWorkDir("/"+uuid.New().String()+"/"),
   )
   if err != nil {
      t.Errorf("new storager: %v", err)
   }
   return store
}
```

:::info

All configuration MUST read from the environment (except `workdir` should be random)

:::

### Add Environment Value support

Add build target in `Makefile`:

```makefile
-include Makefile.env

integration_test:
   go test -count=1 -race -covermode=atomic -v ./tests
```

Add `Makefile.env` into `.gitginore` to prevent credential leaks.

Adding all needed environment value into `Makefile.env.example` like:

```shell
export STORAGE_S3_INTEGRATION_TEST=on
export STORAGE_S3_CREDENTIAL=hmac:access_key:secret_key
export STORAGE_S3_NAME=bucketname
export STORAGE_S3_LOCATION=location
```

Copy `Makefile.env.example` into `Makefile.env`, replace all example values with valid values.

Use `make integration_test` to execute integration tests.

## How to run integration tests via GitHub Actions?

[GitHub Actions](https://github.com/features/actions) is the CI/CD service provided by GitHub. We provide our actions runners to execute all integration tests. We provide our actions runners to execute all integration tests.

To run integration tests every time a new commit has been pushed, please add `.github/workflows/integration-test.yml` with the following content:

```yaml
name: "Integration Test"

on: [push]

jobs:
  integration_test:
    name: "Integration Test"
    runs-on: [Linux]

    strategy:
      matrix:
        go: [ "1.15", "1.16" ]

    steps:
      - name: Set up Go 1.x
        uses: actions/setup-go@v2
        with:
          go-version: ${{ matrix.go }}

      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Test
        env:
          STORAGE_S3_INTEGRATION_TEST: ${{ secrets.STORAGE_INTEGRATION_TEST }}
          STORAGE_S3_CREDENTIAL: ${{ secrets.STORAGE_S3_CREDENTIAL }}
          STORAGE_S3_NAME: ${{ secrets.STORAGE_S3_NAME }}
          STORAGE_S3_LOCATION: ${{ secrets.STORAGE_S3_LOCATION }}
        run: make integration_test
```

Secrets should be set by the project maintainer, please contact them in the public matrix rooms.

[go-integration-test]: https://github.com/beyondstorage/go-integration-test
