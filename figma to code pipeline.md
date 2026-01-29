🎯 Design System → Code System (Shadcn + Tokens + Figma Code Connect)
✅ Goal

Create a single monorepo containing the canonical shadcn/ui-style component implementations, fully:

Styled via design tokens exported from Figma

Using semantic Tailwind variables (not hardcoded colors)

With component APIs that map 1:1 to Figma component variants

Ready for Figma Code Connect bindings

This repo will become the source of truth design system.

🧱 Current Architecture (Completed)
Monorepo
packages/
  tokens/                ← token source + generated artifacts
    tokens/tokens.json   ← Tokens Studio export (synced)
    dist/
      tokens.css         ← generated CSS custom properties
      shadcn-theme.css   ← shadcn contract vars (e.g. --background, --primary, --border)
  ui/                    ← component source + Vite demo
    src/
      components/ui/     ← all shadcn components live here
      lib/utils.ts
      lib/types.ts       ← shared UI types (e.g. FieldDecoration)
    tailwind.config.js
    postcss.config.js

Tokens

Tokens exported from Figma → JSON

Transformed via Style Dictionary

Output to:

- `packages/tokens/dist/tokens.css`
- `packages/tokens/dist/shadcn-theme.css`

Tailwind uses semantic CSS variables:

--border
--input
--primary
--destructive
etc.


Mapped in Tailwind:

colors: {
  border: "hsl(var(--border))",
  input: "hsl(var(--input))",
  primary: ...
}

✅ Components Already Implemented / Modified

All using semantic tokens + ARIA states (no custom error props):

✅ Button (variants, size, roundness)

✅ Input (size, roundness, decoration, ARIA error)

✅ Textarea (ARIA error, disabled)

✅ Select (Trigger updated for aria-invalid + disabled; `variant` prop for destructive; decoration support)

✅ Checkbox

✅ RadioGroup

✅ Switch (basic)

Form system:

✅ Form, FormField, FormItem, FormLabel, FormControl, FormMessage

Uses aria-invalid="true" for visual error states

Component gallery page exists for visual testing.

✅ Drift / Token Purity Audits (Completed)

- ✅ **Hardcoded color audit**: replaced any Tailwind palette colors / hardcoded colors found in UI components (ex: toast destructive close/action styles)
- ✅ **Opacity “drift” audit (Option B)**: removed all `bg-*/NN`, `text-*/NN`, `border-*/NN`, `ring-*/NN` alpha utilities from `packages/ui/src/components/ui`
  - Added explicit semantic/theme-backed values instead (ex: `bg-backdrop`, `bg-primary-subtle`, `bg-primary-soft`, `border-primary-border-subtle`, `bg-muted-soft`)
  - Note: we still allow defining *semantic* colors that include alpha in `tailwind.config.js` (e.g. `primary-subtle`), but we avoid sprinkling `/NN` alpha utilities throughout component source.

✅ Tokens / Tailwind Updates (Completed)

- ✅ Added explicit error ring token mapping (`--ring-error` → `ring-ring-error`)
- ✅ Added explicit semantic vars + Tailwind colors for hover/subtle/backdrop:
  - `--primary-hover`, `--secondary-hover`
  - `--ghost-hover`, `--outline-hover`
  - `--destructive-border`
  - `--backdrop` (used for modal overlays)

🛑 Where We Paused (Updated)

We have completed:

- ✅ **Phase 4.5** — ARIA invalid + disabled parity across controls (Input/Textarea/Select/Checkbox/RadioGroup/Switch/Slider)
- ✅ **Phase 4.6** — missing shadcn components are present (Accordion/Tabs/Tooltip/Popover/Dropdown Menu, plus others)
- ✅ **Phase 5 (in progress)** — API normalization + “binding signals” for Figma parity + Code Connect readiness:
  - `SelectTrigger`: renamed `type` → `variant` and added `decoration` (“none/leftIcon/rightIcon/both”)
  - `Input`: replaced boolean icon flags with `decoration` (“none/leftIcon/rightIcon/both”)
  - Added `data-*` attributes for Code Connect mapping/debugging (`data-variant`, `data-size`, `data-roundness`, `data-decoration`)
  - Added `data-disabled="true"` for non-native disabled semantics where `aria-disabled` is used (e.g. Pagination)
  - Expanded Phase 5 mapping coverage (see `PHASE5_MAPPINGS.md`) for:
    - Pagination (`PaginationLink` active/disabled)
    - Calendar (navigation disabled semantics)
    - Dropdown menu (item highlighted/disabled, sub trigger/content, content placement)
    - Menubar (content placement, submenu trigger/content)
    - Navigation menu (trigger open state, content motion, viewport sizing, indicator visibility)

ComponentGallery has been updated with new examples and DevTools verification notes, so drift and missing `data-*` signals are visually obvious.

Note: `pnpm --filter ui lint` includes an existing Fast Refresh rule (`react-refresh/only-export-components`) that flags shadcn-style exports like `buttonVariants`. This is not part of the design-system work; we can address it later if desired.

🚀 Next Roadmap (In Order)
🔹 Phase 5 — Align Component APIs with Figma Variants

For each component:

Compare Figma properties to component props

Normalize names and values

Examples:

Figma	Code
Size: Regular/Large	`size="regular"
Variant: Destructive	variant="destructive"
Roundness	roundness="round"

Add one standardized pattern for icon/decorations:

- `decoration="none" | "leftIcon" | "rightIcon" | "both"` (instead of multiple booleans)

Use cva() for:

variant

size

roundness

density

Avoid:

boolean visual props

visual-only state props

🔹 Phase 6 — Figma Code Connect Wiring

For each mapped component:

Add Code Connect metadata in Figma

Map:

component → import path (consumer app)

variant → props

state → ARIA

Example target:

import { Button } from "@/components/ui/button"

<Button variant="secondary" size="large" />


Goal:
Designers can copy exact production components from Figma.

✅ Architectural Rules Going Forward

❌ No hardcoded hex colors

❌ No visual-only props (error, focused)

✅ All error state via aria-invalid

✅ Layout handled outside components

✅ Variants via CVA only

✅ Tokens → Tailwind → Components

🧭 Ultimate End State

You will have:

A production-ready design system package

Fully token-driven theming

Exact Figma → code component parity

Zero design drift

AI agents (Cursor) able to generate correct code from Figma designs

If you want, when you start the new session you can open with:

We are starting Phase 5 (API parity) and Phase 6 (Code Connect) for the anchor components: Button, Input, Select.

Immediate next steps:

1) Continue Phase 5 API alignment + mapping for remaining “high-impact” components (overlays like Dialog/Sheet/Popover/Tooltip, plus any remaining controls)
2) Lock naming conventions across the library (`variant`, `size`, `roundness`, `decoration`, optional `density`)
3) Begin Phase 6 Code Connect wiring for a small anchor set (Button/Input/Select) using the documented `data-*` and ARIA/Radix state signals

Good stopping point — you’re doing this the right way.

---

## ✅ Today’s summary (what changed)

### Tokens publishing (completed)

- Published **`@brad-green/tokens@0.1.0`** to **GitHub Packages** and verified install + artifacts (`dist/tokens.css`, `dist/shadcn-theme.css`) in a clean consumer smoke test.
- Updated the repo to consistently use the correct GitHub Packages scope (`@brad-green/*`) and removed stale references.
- Hardened token sync on Windows:
  - Replaced `curl` with `scripts/sync-tokens.js` (Node fetch + PowerShell fallbacks, retries, optional `FDB_TOKENS_URL` override).

### Dev + lint quality-of-life (completed)

- Made `pnpm --filter ui lint` pass by scoping off `react-refresh/only-export-components` for shadcn-style `src/components/ui/*` and `src/hooks/*`.
- Fixed `use-toast.ts` to use `actionTypes` at runtime (removes the unused-vars lint).
- Updated publish docs + release checklist to match the working Windows workflow (and removed outdated `always-auth` guidance).

### Phase 5 parity + Code Connect “signals” (continued)

- Expanded `PHASE5_MAPPINGS.md` with mappings for additional components and state/placement signals.
- Added stable `data-slot` (and where relevant `data-align`, etc.) for Code Connect mapping/debugging:
  - Dialog / Sheet / Popover / Tooltip
  - AlertDialog / HoverCard / ContextMenu / Accordion
  - ScrollArea / Collapsible / Resizable
- Updated `ComponentGallery` with new sections and DevTools verification notes for the above.

---

## 🗓️ Tomorrow plan (start here)

### 1) Finish Phase 5 coverage for remaining components

Goal: every component in `packages/ui/src/components/ui/*` has:
- documented mapping entry (axes + state + required signals)
- stable `data-slot` (and axis data like `data-align`, `data-side`, etc. where meaningful)
- a small `ComponentGallery` demo that makes drift obvious

Suggested order:
- Layout/display primitives: `Card`, `Table`, `Separator`, `Progress`, `Skeleton`, `AspectRatio`, `Avatar`, `Breadcrumb`, `Label`
- Interaction primitives: `Carousel`, `ScrollArea` (done), `Collapsible` (done), `Resizable` (done)

### 2) Start Phase 6 Code Connect on an anchor set

Pick 3–5 anchor components and wire them end-to-end in Figma Code Connect:
- Button / Input / Select (anchors)
- plus one overlay: Dialog or Sheet

Goal: designers can copy production-accurate code from Figma with correct props/state mapping.

### 3) Optional automation (only if time)

- Add CI automation to publish `@brad-green/tokens` on tag/release and run a smoke install check.
- Add Renovate/Dependabot config to bump tokens in downstream apps.

