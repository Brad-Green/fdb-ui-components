# Design System → Code System (Shadcn + Tokens + Figma Code Connect)

## Goal

A single monorepo containing canonical shadcn/ui-style component implementations, fully:

- Styled via design tokens exported from Figma
- Using semantic Tailwind variables (not hardcoded colors)
- With component APIs that map 1:1 to Figma component variants
- Ready for Figma Code Connect bindings

This repo is the **source of truth design system**.

## Architecture

```
packages/
  tokens/                  ← token source + generated artifacts
    tokens/tokens.json     ← Tokens Studio export (synced from Figma)
    dist/
      tokens.css           ← generated CSS custom properties
      shadcn-theme.css     ← shadcn contract vars (--background, --primary, etc.)
  ui/                      ← component source + Vite demo
    src/
      components/ui/       ← all shadcn components
      figma/               ← Code Connect mapping files (*.figma.tsx)
      dev/                 ← ComponentGallery for visual testing
      lib/utils.ts
      lib/types.ts         ← shared UI types (e.g. FieldDecoration)
      hooks/               ← custom hooks (use-toast, use-mobile, etc.)
    tailwind.config.js
```

## Token Pipeline

1. Tokens exported from Figma → Tokens Studio → JSON
2. Transformed via Style Dictionary
3. Output to `packages/tokens/dist/`
4. Tailwind uses semantic CSS variables (`--border`, `--primary`, `--destructive`, etc.)

## Architectural Rules

- No hardcoded hex colors in components
- No visual-only props (error, focused) — use `aria-invalid` instead
- All error state via `aria-invalid`
- Layout handled outside components
- Variants via CVA only
- Tokens → Tailwind → Components

---

## Session Log

### 2026-02-03 (Final Session)

#### Code Connect Pipeline Complete

Achieved **100% Code Connect coverage** (60 mapping files covering all 67 Figma component sets).

**New Components Implemented:**
- `Spinner` — loading indicator with size variants
- `ButtonGroup` — groups related action buttons (horizontal/vertical)
- `Toggle` / `ToggleGroup` — two-state toggle buttons
- `InputOTP` — one-time password input
- `Command` — command palette / search (cmdk)
- `Sonner` — toast notifications with variants (success, error, warning, info, promise, action)
- `Sidebar` — composable sidebar navigation
- `FormField` — form field wrapper (vertical/horizontal orientation)
- `RichCheckboxGroup` — card-style checkboxes with descriptions
- `RichSwitchGroup` — card-style switches with descriptions
- `RichRadioGroup` — card-style radios with descriptions
- `AvatarStack` — overlapping avatars with +N indicator
- `DialogFooter` with `sticky` prop — sticky footer for scrollable dialogs

**New Code Connect Files (26 new):**
- Core: `spinner`, `button-group`, `toggle`, `toggle-group`, `loading-button`
- Inputs: `input-otp`, `input-file`, `date-picker`
- Overlays: `sonner`, `command`, `sidebar`, `dialog-footer`, `collapsible`
- Menus: `dropdown-menu`, `context-menu`, `menubar`, `navigation-menu`, `popover`, `hover-card`
- Display: `skeleton`, `breadcrumb`, `aspect-ratio`
- Forms: `form-field`, `horizontal-field`, `rich-checkbox-group`, `rich-switch-group`, `rich-radio-group`, `avatar-stack`

**CI/Validation:**
- All 60 Code Connect files parse successfully
- `pnpm codeconnect:dry-run` validates against Figma API
- CI workflow runs Code Connect validation on every push

### 2026-02-03 (Earlier)

- Expanded Code Connect from 17 to 29 components
- Added overlays: Sheet, AlertDialog, Tooltip, Toast
- Added data display: Pagination, Table, Accordion, Label
- Added layout: Calendar, Carousel, Resizable, ScrollArea

### 2026-01-30

- Fixed Figma Code Connect for Button (icon toggles)
- Wired Select & Combobox axes (Lines, Size, Show Prepend, Show Decoration)
- Extended SelectTrigger with `mini` and `small` sizes

---

## Validation Commands

```bash
# Build everything
pnpm build

# Lint
pnpm lint

# Code Connect dry-run (requires FIGMA_ACCESS_TOKEN)
pnpm codeconnect:dry-run

# Code Connect publish
pnpm codeconnect:publish

# Run dev gallery
pnpm dev
```

---

## Related Documentation

- `README.md` — Quick start and baseline commands
- `CONSUME_IN_APP.md` — How to copy components into a consuming app
- `API_CONVENTIONS.md` — Component API conventions checklist
- `PHASE5_MAPPINGS.md` — Figma → props mapping reference
- `PUBLISH_TOKENS.md` — Publishing tokens to npm registry
