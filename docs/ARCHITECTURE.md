# Architecture notes

## Product boundaries

The repository contains two related but independently evolvable products:

1. The public R&D site explains the mission, product family, research program and development status.
2. The field application simulates the local operational interface used by a medic.

They share domain data and visual tokens but have separate layouts and interaction patterns. Marketing components must not leak into the field interface.

## Current layers

- `data`: serializable domain fixtures with no React dependency.
- `hooks`: time and state behavior such as telemetry playback.
- `components/ui`: reusable presentation primitives.
- `components/visuals`: code-native illustrations that do not require image generation.
- `pages`: public route composition.
- `demo/components`: clinical-workflow presentation primitives.
- `demo/views`: operational route composition.
- `app`: routing and top-level lifecycle behavior.

## Intended next layers

- `domain`: typed rules, observations, alerts, assignments and session events.
- `simulation`: deterministic scenario files, playback clock and fault injection.
- `adapters`: sensor, storage and export boundaries.
- `validation`: schemas and runtime input checks.
- `tests`: unit, interaction, accessibility and screenshot coverage.

## State strategy

The current synthetic session lives in `useTelemetry`. It should evolve into a reducer-backed session store before external data is connected. Views should consume selectors rather than directly mutate patient arrays. Persisted data must be versioned and validated on read.

## Medical-language policy

- Distinguish observations from interpretations.
- Call specifications “targets” until verified.
- Do not imply diagnosis, treatment selection or autonomous decision-making.
- Expose missing, stale and low-quality data.
- Preserve rule revision and source observations with every priority event.

## Design principles

- Editorial hierarchy for the public site; operational density for the field app.
- One signal color is reserved for actionable attention.
- No decorative charts or invented evidence.
- Code-native diagrams are preferred where precision matters.
- Mobile views change task hierarchy rather than merely shrinking desktop layouts.
