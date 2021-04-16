`endpoint` is used to carry endpoint that go-storage used to connect to service.

## Supported Operation

- NewServicer
- NewStorager

## Format

`endpoint` has three parts: `protocol`, `host` and `port`.

- `protocol` is the protocl that services used, like `http` and `https`.
- `host` is the host that service used, like `qingstor.com` and `192.168.0.1`
- `port` is the port that services used, like `433` and `80`.

## Tips

- Port could be emit in following states
    - protocol is `http` and port is `80`
    - protocol is `https` and port is `443`
