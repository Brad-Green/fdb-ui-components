# fdb-ui-components

Monorepo for **shadcn/ui React components** styled from a **Tokens Studio (Figma) design tokens JSON** file.

## Repo structure

- `packages/tokens`: **source of truth** for tokens + generated artifacts
  - Source: `packages/tokens/tokens/tokens.json`
  - Outputs (generated): `packages/tokens/dist/`
- `packages/ui`: shadcn/ui component set + Vite demo that **imports generated token CSS** (intended for shadcn-style copy/paste into consuming apps)

## Quick start

Install:

```bash
pnpm install
```

Consuming these components in an app (copy/paste contract):

- See `CONSUME_IN_APP.md`
- API conventions checklist (for contributors / AI agents):
  - See `API_CONVENTIONS.md`
- Phase 5 Figma → props mappings (source of truth for prop/state/data-* contracts):
  - See `PHASE5_MAPPINGS.md`

Run the component gallery:

```bash
pnpm dev
```

Build (includes token generation):

```bash
pnpm build
```

## Tokens workflow

Sync the latest Tokens Studio export from GitHub (and apply reference fixes):

```bash
pnpm tokens:sync
```

Regenerate CSS artifacts:

```bash
pnpm tokens:build
```

## How styling is wired

- Style Dictionary generates:
  - `@brad-green/tokens/dist/tokens.css`: full token set as CSS custom properties
  - `@brad-green/tokens/dist/shadcn-theme.css`: shadcn contract variables (`--background`, `--primary`, etc.)
- `packages/ui/src/index.css` imports both, and Tailwind maps colors to `hsl(var(--...))`.

## Code Connect readiness checklist

Use this to keep a **tight 1:1 mapping** between Figma components and code components before wiring up Figma Code Connect.

### Figma (design system) checklist

- **Component naming**: Use stable names that match code names (e.g. `Button`, `Card`, `Dialog`, `Select`).
- **Variants mirror props**: Each Figma variant axis should map to a real code prop (e.g. `variant=default|secondary|outline`, `size=sm|default|lg|icon`).
- **Tokenized styles only**: Fill/stroke/text styles should come from Tokens Studio variables (avoid ad-hoc hex overrides).
- **Theme sets**: If you want first-class dark theme parity, ensure a dark semantic token set exists in the exported tokens (not just raw palette changes).
- **States**: Define hover/focus/disabled/pressed states explicitly in Figma (and ensure they’re token-driven).

### Code (components) checklist

- **Single canonical component**: One exported implementation per Figma component (avoid multiple competing buttons).
- **Stable exports**: Keep exports stable (e.g. `export { Button }` from `@/components/ui/button`).
- **Prop parity**: Props/variants in code should match Figma variant axes (including defaults).
- **Token contract usage**: Components should use shadcn/Tailwind tokens (`bg-primary`, `text-foreground`, `border-border`, etc.) rather than hard-coded colors.
- **No local theme CSS**: Theme variables come from `@brad-green/tokens/dist/shadcn-theme.css` (don’t reintroduce per-package theme files).

### Build + sync checklist

- **Regenerate on token changes**: Run `pnpm tokens:sync && pnpm tokens:build` after Figma token updates.
- **Build stays clean**: `pnpm build` should succeed after token updates; if not, treat it as a token-contract regression.


