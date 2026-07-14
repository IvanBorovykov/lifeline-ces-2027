# Lifeline

An editorial, multi-page R&D product site and interactive field-monitoring prototype.

Lifeline explores a local-first workflow for one medic monitoring multiple casualties through wearable biosensor nodes, a resilient relay and a focused tablet interface. The current build is a software and industrial-design demonstrator. It is not a medical device and makes no clinical claim.

## Product surfaces

### Public site

- `/` — mission, field scenario, architecture and product family
- `/platform` — workflow, explainable priority rules and failure states
- `/hardware` — Node One design intent, exploded anatomy and target specification
- `/research` — workstreams, claim boundary, principles and document register
- `/roadmap` — program gates and extensible build architecture

### Field application

- `/demo/triage` — live multi-patient priority queue and patient drawer
- `/demo/map` — relative field positions and node inspection
- `/demo/network` — mesh topology, packet health and node register
- `/demo/events` — accountable local event history
- `/demo/settings` — ruleset, display and data controls

All URLs use hash routing, for example `http://localhost:5173/#/hardware`.

## Run locally

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run build
npm run preview
```

## Architecture

```text
src/
├── app/                 routing and application composition
├── components/
│   ├── layout/          public-site shell, navigation and footer
│   ├── ui/              reusable product UI primitives
│   └── visuals/         code-native product and system illustrations
├── data/                domain content, patients and research records
├── demo/
│   ├── components/      field UI primitives
│   └── views/           triage, map, network, events and system screens
├── hooks/               telemetry simulation and future domain hooks
├── pages/               public product pages
└── styles/              tokens, global, marketing, page, demo, responsive
```

See [architecture notes](docs/ARCHITECTURE.md) and the [100-commit development map](docs/COMMIT_PLAN.md).

## Typography and visual direction

Fonts are bundled locally from IBM's official Plex packages:

- IBM Plex Serif — editorial display typography
- IBM Plex Sans — interface and body copy
- IBM Plex Mono — technical metadata

The design avoids generic neon health-tech styling. Its surfaces, gray scale, red accent, typography and spacing rhythm are based on documented IBM Carbon/IBM Design Language tokens. Product diagrams remain original to Lifeline.

## Safety boundary

Every patient, waveform, rule result and network event is synthetic. Provisional specifications are labeled as targets. The prototype is not intended for diagnosis, treatment, emergency decision-making or clinical use.
