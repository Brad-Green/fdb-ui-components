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

### Session summary (2026-01-30)

#### Figma Code Connect — Button

- Fixed icon toggles not emitting in Dev Mode by expanding boolean enum handling:
  - `Show left icon` / `Show right icon` now handle both `True/False` and `true/false` values.
- Kept icon identity intentionally as a placeholder (`SquareDashed`) in generated code:
  - This validates slot parity without overfitting to Figma instance-swapped icon names.

#### Figma Code Connect — Select & Combobox

- Wired missing Figma axes into code so snippets actually change:
  - `Lines` axis now maps to `lines: "one" | "two"` on `SelectTrigger`.
- Extended `SelectTrigger` to support the full Figma `Size` axis:
  - Added `mini` and `small` size variants (previously only `regular`/`large`).
- Fixed parity for the toggles shown in Figma:
  - `Show Prepend` now emits `prepend="Prepend:"` (text prefix)
  - `Show Decoration` now emits `leftIcon={<SquareDashed className="size-4" />}` (left icon)
- Added mapping/debug signals:
  - `SelectTrigger` now emits `data-lines` (in addition to existing axis `data-*`).
- Fixed a styling bug introduced during the 2-line work:
  - Replaced invalid Tailwind class `h-13` with `h-[52px]`.

#### Validation + publish

- Verified TypeScript build + Code Connect validity before each publish:
  - `pnpm --filter ui build`
  - `pnpm codeconnect:dry-run`
  - `pnpm codeconnect:publish`

---

## 🗓️ What’s next (tomorrow)

### 1) Golden Test the remaining anchor components

- Dialog:
  - Confirm Dev Mode snippet changes correctly for the `Type` axis (desktop/mobile) and structure is idiomatic (no inline conditional logic in strings).
- Input:
  - Validate `size`, `roundness`, `decoration`, `disabled`, and `aria-invalid` mappings in Dev Mode.

### 2) Tighten Select parity (only if needed)

- If Figma exposes more meaningful Select properties (nested decorations, right-side variants), decide whether to:
  - map as additional props (preferred), or
  - intentionally treat as out-of-scope for the snippet (documented).

### 3) Optional: lock in CI reliability

- Add `FIGMA_ACCESS_TOKEN` as a GitHub Actions secret so PRs can run `pnpm codeconnect:dry-run` automatically.

