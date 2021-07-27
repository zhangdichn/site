`stat` is used to get object or check it existence.

## Behavior

- Stat SHOULD accept ObjectMode pair as hints.
    - Service COULD have different implementations for different object mode.
    - Service SHOULD check if returning ObjectMode is match
