# Consumer contract (shadcn-style copy/paste + `@brad-green/tokens`)

This repo is the **canonical source** for UI components, but the intended consumption model is **shadcn-style copy/paste** into a consuming app.

This doc defines the **minimum contract** a consuming app must follow so copied components work without “mystery fixes” and so Code Connect/AI agents can generate consistent imports.

## Assumptions

- React + TypeScript
- Tailwind CSS
- Path alias `@/*` → `src/*`
- The consuming app can install `@brad-green/tokens` from an **internal npm registry** (preferred; see below)

## 0) Internal registry requirement (recommended)

The intended model is that `@brad-green/tokens` is **published to your internal registry** (GitHub Packages / Azure Artifacts / Nexus / Artifactory).

Why:

- **Reproducible builds**: consumers depend on `@brad-green/tokens@x.y.z` rather than a moving git target.
- **Controlled rollout**: semver + lockfiles prevent accidental breaking theme changes.

At a minimum, your app must be able to resolve the `@fdb/*` scope from your registry (via `.npmrc` / org config). This repo does not configure registry auth for you.

## 1) Install required packages

Install tokens (source of truth):

```bash
pnpm add @brad-green/tokens
```

Install runtime deps required by the components you copy (safe default: install all used by `packages/ui`):

```bash
pnpm add \
  class-variance-authority clsx tailwind-merge lucide-react \
  react-hook-form \
  @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio \
  @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible \
  @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu \
  @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar \
  @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress \
  @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select \
  @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot \
  @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-tooltip \
  embla-carousel-react react-day-picker react-resizable-panels
```

## 2) Copy the code into your app

From this repo:

- Copy `packages/ui/src/components/ui/*` → your app `src/components/ui/*`
- Copy `packages/ui/src/lib/utils.ts` → your app `src/lib/utils.ts`
- Copy `packages/ui/src/lib/types.ts` → your app `src/lib/types.ts`
- Copy `packages/ui/src/hooks/*` → your app `src/hooks/*` (only if a copied component imports them)

## 3) Add token CSS imports to your global CSS

In your app’s global CSS (commonly `src/index.css`), add these **before** the Tailwind directives:

```css
@import "@brad-green/tokens/dist/tokens.css";
@import "@brad-green/tokens/dist/shadcn-theme.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 4) Tailwind config contract

Your Tailwind config must:

- Use **class-based dark mode** (`darkMode: ["class"]`)
- Include your source files in `content` (e.g. `./src/**/*.{ts,tsx}`)
- Include the shadcn-style token mapping used by the copied components (`bg-background`, `text-foreground`, `border-input`, etc.)

Recommended approach: copy/merge the `theme.extend` section from `packages/ui/tailwind.config.js` into your app’s Tailwind config.

## 5) TypeScript path alias contract (`@/*`)

In your app `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

If you use Vite, also add the runtime alias (tsconfig affects types, not bundling):

```ts
// vite.config.ts
import path from "path"

export default {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}
```

## Quick validation

After copying + config, you should be able to render:

```tsx
import { Button } from "@/components/ui/button"

export function Smoke() {
  return <Button variant="secondary">Hello</Button>
}
```

## Common failure modes

- **Styles look unthemed**: `@brad-green/tokens/dist/*.css` imports missing or placed after `@tailwind` directives.
- **“Cannot find module '@/…'”**: TS alias (`paths`) and/or bundler alias not configured.
- **Missing Radix module**: install the Radix package referenced by the component you copied.

