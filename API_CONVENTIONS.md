# API conventions checklist (Phase B)

Use this checklist for **every** component in `packages/ui/src/components/ui/*`.

Goal: **1:1 Figma → props**, **token-pure styling**, and **predictable structure** for both humans and AI agents.

## 0) Identity + file contract

- **File name**: matches the component name in kebab-case (e.g. `button.tsx`, `radio-group.tsx`).
- **Exported symbols**: match shadcn conventions (named exports) and are stable over time.
- **Import paths**: only use the canonical alias style:
  - `@/components/ui/*`
  - `@/lib/*`
  - `@/hooks/*`

## 1) Props must map to Figma variants (no “mystery props”)

- **Every Figma variant axis** maps to a **real prop** (string union), not multiple booleans.
- **Prop names are standardized** across components wherever meaningful:
  - `variant`
  - `size`
  - `roundness`
  - `decoration`
  - `density` (optional; only when Figma has a density axis)
- **Defaults** match the Figma default variant.
- **No visual-only state props** like `error`, `focused`, `pressed`, `isInvalid`.

## 2) State is driven by ARIA + platform conventions

- **Disabled**: use native `disabled` where applicable; Radix components should respect `disabled` / `data-disabled`.
- **Invalid**: style via `aria-invalid="true"` / `aria-invalid` (never via custom props).
- **Focus**: use `:focus-visible` patterns (no always-on rings).
- **No state duplication**: don’t introduce prop-driven state that conflicts with Radix `data-state` or ARIA.

## 3) Variants are implemented with CVA (single source)

- All visual variants are expressed through `cva()`:
  - `variant`, `size`, `roundness`, `decoration`, `density` (as applicable)
- Avoid ad-hoc string concatenation outside the CVA definition (except simple wrapper layout).
- `defaultVariants` are always set for any axis that exists.

## 4) Data attributes for Code Connect + debugging

If a component has these axes, it must emit the corresponding `data-*` attributes:

- `variant` → `data-variant`
- `size` → `data-size`
- `roundness` → `data-roundness`
- `decoration` → `data-decoration`
- `density` → `data-density`

Notes:

- If a component derives decoration from slots (e.g. left/right icons), set `data-decoration` from the derived value.
- Keep values **stable** (don’t rename values casually; treat them as a contract with Figma).
- If a component has an additional “axis-like” prop outside the standard list (e.g. `side` for sheets), emit `data-<propName>` (e.g. `data-side`).

## 5) Token purity rules (no drift)

- **No hardcoded hex/rgb/hsl colors** in component classes or CSS.
- Use Tailwind semantic tokens only (`bg-background`, `text-foreground`, `border-input`, `ring-ring-error`, etc.).
- Avoid palette utilities (`text-slate-500`, etc.).
- Avoid `/NN` alpha utilities inside component source:
  - OK: semantic alpha colors defined in Tailwind config (e.g. `primary-subtle`)
  - Not OK: `bg-primary/20` in component code

## 6) Accessibility + composition

- Use `forwardRef` for all leaf components that render DOM elements or Radix primitives.
- Preserve DOM semantics (correct element type; don’t turn links into buttons, etc.).
- For shadcn-style polymorphism, use Radix `Slot` only when needed and keep the API consistent.

## 7) Types + shared contracts

- Shared UI enums/types live in `@/lib/types` (e.g. `FieldDecoration`).
- Don’t duplicate the same union types across multiple components.
- If a type is part of the public copy/paste contract, export it intentionally.

## 8) Demo coverage (required)

- Add a section to `packages/ui/src/dev/ComponentGallery.tsx` for:
  - each axis (variant/size/roundness/decoration/density)
  - disabled state
  - invalid state (`aria-invalid`)
- Include a small “matrix” view when feasible so drift is visually obvious.

## 9) Refactor safety

- If you rename a prop/value for Figma parity, update:
  - component implementation
  - gallery examples
  - any “contract” docs that mention the prop/value
- Prefer additive changes (support old value temporarily) only when you have active consumers; otherwise keep it clean and consistent.

