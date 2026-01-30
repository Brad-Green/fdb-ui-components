## Code Connect mappings

This folder contains `*.figma.tsx` files used by Figma Code Connect to map Figma
design-system components to the canonical implementations in `src/components/ui/*`.

Notes:

- These files are **not executed** by Code Connect; the CLI treats snippet code as strings.
- Keep prop/value mappings aligned with `PHASE5_MAPPINGS.md`.
- Prefer stable selectors via `data-*`/`data-slot` emitted by components.

