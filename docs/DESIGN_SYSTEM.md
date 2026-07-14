# Lifeline visual system

The interface uses public, documented foundations from IBM Design Language and Carbon. It does not reproduce IBM branding, layouts, components or logos.

## Typeface

- IBM Plex Sans for product UI, navigation and continuous reading.
- IBM Plex Serif for expressive public-site headings.
- IBM Plex Mono for identifiers, timestamps, measurements and revision metadata.

The font files come from the official `@ibm/plex-*` npm packages and are included in the production build.

## Core color mapping

| Lifeline token | Carbon value | Hex | Use |
| --- | --- | --- | --- |
| paper | Gray 10 | `#f4f4f4` | public backgrounds |
| paper-2 | Gray 20 | `#e0e0e0` | product stages |
| ink | Gray 100 | `#161616` | text and field background |
| ink-2 | Gray 90 | `#262626` | elevated field surfaces |
| line | Gray 30 | `#c6c6c6` | light dividers |
| line-dark | Gray 80 | `#393939` | dark dividers |
| signal | Red 60 | `#da1e28` | immediate attention only |
| signal-dark | Red 70 | `#a2191f` | pressed and strong borders |
| nominal | Green 50 | `#42be65` | confirmed nominal state |
| warning | Yellow 30 | `#f1c21b` | review state |

## Layout rules

- Base spacing unit: 8 px.
- Product pages use a 16-column desktop grid.
- All major spacing uses 8 px multiples.
- Media and diagrams use 1:1, 4:3, 3:2 or 16:9 aspect ratios.
- Every viewport has one dominant message and one primary action.
- Decorative floating status cards are prohibited on marketing pages.
- Operational UI may be dense, but every row must share the same columns.

## Background policy

Public pages use only flat Gray 10, Gray 20, Gray 100 and Red 60 fields. No gradients, generated background images, topographic textures, glow effects or glass blur are permitted.

## References

- IBM Design Language: Typeface
- IBM Design Language: Color
- IBM Design Language: 2x Grid
- Carbon Design System: Typography and themes
