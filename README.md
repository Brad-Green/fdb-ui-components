# fdb-ui-components

Monorepo for **shadcn/ui React components** styled from a **Tokens Studio (Figma) design tokens JSON** file.

**Status:** Code Connect pipeline complete — 60 mapping files covering 100% of Figma component sets.

## Repo structure

- `packages/tokens`: **source of truth** for tokens + generated artifacts
  - Source: `packages/tokens/tokens/tokens.json`
  - Outputs (generated): `packages/tokens/dist/`
- `packages/ui`: shadcn/ui component set + Vite demo that **imports generated token CSS** (intended for shadcn-style copy/paste into consuming apps)
- `packages/ui/src/figma`: Code Connect mapping files (`*.figma.tsx`)

## Quick start

Install:

```bash
pnpm install
```

## Baseline runbook (known-good checks)

Use these commands to quickly confirm the repo is in a healthy state.

- Note: This repo’s package.json lives in `fdb-ui-components/` (this folder). If you run `pnpm` from the parent folder, it will fail with “No package.json found”.

- Install deps (should be fast when lockfile is unchanged):

```bash
pnpm install
```

- Build tokens (writes `packages/tokens/dist/*`):

```bash
pnpm tokens:build
```

- Run the UI dev gallery (Vite app):

```bash
pnpm dev
```

- Typecheck + production build (includes a prebuild tokens step):

```bash
pnpm --filter ui build
```

- Lint:

```bash
pnpm --filter ui lint
```

## Code Connect (local validation + publish)

Code Connect validation requires a Figma access token (even for `--dry-run`) so the CLI can validate node IDs.

- PowerShell:

```powershell
cd fdb-ui-components
$env:FIGMA_ACCESS_TOKEN = "<your token>"
pnpm codeconnect:dry-run
# optional:
pnpm codeconnect:publish
Remove-Item Env:FIGMA_ACCESS_TOKEN
```

**Expected outcomes**

- `pnpm tokens:build` prints `✔︎ dist/tokens.css` and `✔︎ dist/shadcn-theme.css`.
- `pnpm --filter ui build` completes with `✓ built in ...` and produces `packages/ui/dist/`.
- `pnpm --filter ui lint` completes with no errors.

## Documentation

- **`GET_STARTED.md`** — **Start here!** Instructions for coding agents to set up a new project
- `QUICK_START.md` — Quick setup and verification checklist
- `AGENTS.md` — AI governance rules for code generation
- `CONSUME_IN_APP.md` — How to copy components into a consuming app
- `API_CONVENTIONS.md` — Component API conventions checklist
- `COMPONENT_MAPPINGS.md` — Figma → props mapping reference (source of truth)
- `PUBLISH_TOKENS.md` — Publishing tokens to npm registry
- `figma to code pipeline.md` — Architecture and session log

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


