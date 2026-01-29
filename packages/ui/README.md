# UI (copy/paste source + demo)

shadcn/ui-style React components, with a Vite demo (`src/dev/ComponentGallery.tsx`).

This package is **not intended to be published/installed as a library**. The intended workflow is shadcn-style:
copy the component files from `src/components/ui/*` (plus shared helpers in `src/lib/*` and `src/hooks/*`) into a
consuming app that uses the standard `@/*` path alias.

## Styling + tokens

This package does **not** maintain its own theme colors. It imports generated CSS artifacts from `@brad-green/tokens`:

- `@brad-green/tokens/dist/tokens.css`: full token set as CSS variables
- `@brad-green/tokens/dist/shadcn-theme.css`: shadcn contract vars (`--background`, `--primary`, etc.)

Those are imported in `src/index.css`, and Tailwind maps the shadcn color keys to `hsl(var(--...))`.

## Commands

From the workspace root:

```bash
pnpm dev
```

Or run just this package:

```bash
pnpm --filter ui dev
```

Build (includes token generation via `prebuild`):

```bash
pnpm --filter ui build
```

## Token updates

This package delegates token operations to `@brad-green/tokens`:

```bash
pnpm --filter ui tokens:sync
pnpm --filter ui tokens:build
```
