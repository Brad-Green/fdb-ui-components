🎯 Design System → Code System (Shadcn + Tokens + Figma Code Connect)
✅ Goal

Create a single monorepo UI package containing all shadcn/ui components, fully:

Styled via design tokens exported from Figma

Using semantic Tailwind variables (not hardcoded colors)

With component APIs that map 1:1 to Figma component variants

Ready for Figma Code Connect bindings

This repo will become the source of truth design system.

🧱 Current Architecture (Completed)
Monorepo
packages/
  ui/                    ← design system package
    src/
      components/ui/     ← all shadcn components live here
      lib/utils.ts
    styles/
      tokens.css         ← generated from Figma tokens
    tailwind.config.ts
    postcss.config.js

Tokens

Tokens exported from Figma → JSON

Transformed via Style Dictionary

Output to tokens.css

Tailwind uses semantic CSS variables:

--color-border
--color-input
--color-primary
--color-destructive
etc.


Mapped in Tailwind:

colors: {
  border: "hsl(var(--color-border))",
  input: "hsl(var(--color-input))",
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
- ✅ **Phase 5 kickoff** — started API normalization for Figma parity:
  - `SelectTrigger`: renamed `type` → `variant` and added `decoration` (“none/leftIcon/rightIcon/both”)
  - `Input`: replaced boolean icon flags with `decoration` (“none/leftIcon/rightIcon/both”)
  - Added `data-*` attributes for future Code Connect mapping (`data-variant`, `data-size`, `data-roundness`, `data-decoration`)

ComponentGallery has been updated with new examples (Input + Select decoration, plus state/validation matrices).

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

component → import path

variant → props

state → ARIA

Example target:

import { Button } from "@repo/ui"

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

1) Continue Phase 5 API alignment for remaining “high-impact” controls (Checkbox, Switch, RadioGroupItem, Slider)
2) Lock naming conventions across the library (`variant`, `size`, `roundness`, `decoration`, optional `density`)
3) Begin Phase 6 Code Connect wiring for Button/Input/Select using `data-*` attributes + aria states for mapping

Good stopping point — you’re doing this the right way.