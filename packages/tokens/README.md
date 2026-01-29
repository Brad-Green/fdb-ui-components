# @brad-green/tokens

Single source of truth for FDB design tokens (Tokens Studio JSON) and generated token artifacts used by UI packages.

## Source of truth

- **Source tokens file**: `tokens/tokens.json` (Tokens Studio export synced from GitHub)
- **Generated outputs**: `dist/` (generated locally/CI; not intended to be committed)
  - When using the **internal registry publish** strategy, CI generates `dist/` and publishes it as part of the `@brad-green/tokens` package.

## Publishing (GitHub Packages)

This package is intended to be published to **GitHub Packages (npm)** so consuming apps can `pnpm add @brad-green/tokens`.

See `PUBLISH_TOKENS.md` at the repo root for the GitHub Packages publish checklist and consumer `.npmrc` scope mapping (including the npm scope constraint).

## Scripts

- `pnpm tokens:sync`: download the latest Tokens Studio JSON into `tokens/tokens.json` and apply reference fixes
- `pnpm tokens:fix`: apply reference fixes to the current `tokens/tokens.json`
- `pnpm tokens:build`: generate CSS artifacts into `dist/`

From the workspace root, you can also run:

```bash
pnpm --filter @brad-green/tokens tokens:sync
pnpm --filter @brad-green/tokens tokens:build
```

## Outputs

- `dist/tokens.css`: all generated CSS custom properties from tokens (Style Dictionary)
- `dist/shadcn-theme.css`: shadcn-compatible theme variables (`--background`, `--primary`, etc.) generated from the token source

## Notes

- `dist/tokens.css` is filtered to exclude token entries that would produce **invalid CSS custom properties** (for example, names starting with digits or unresolved `{...}` reference strings). This keeps downstream builds warning-free.


