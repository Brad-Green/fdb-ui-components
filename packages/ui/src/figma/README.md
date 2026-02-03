# Code Connect Mappings

This folder contains `*.figma.tsx` files used by Figma Code Connect to map Figma design-system components to the canonical implementations in `src/components/ui/*`.

## Coverage

**60 mapping files** covering **100%** of Figma component sets.

## File List

### Core Controls
- `button.figma.tsx` — Button with variants, sizes, roundness
- `input.figma.tsx` — Input with decoration, sizes
- `textarea.figma.tsx` — Textarea
- `select.figma.tsx` — Select trigger and content
- `checkbox.figma.tsx` — Checkbox with sizes
- `radio-group.figma.tsx` — RadioGroup and RadioGroupItem
- `switch.figma.tsx` — Switch toggle
- `slider.figma.tsx` — Horizontal slider
- `slider-vertical.figma.tsx` — Vertical slider
- `spinner.figma.tsx` — Loading spinner

### Button Variants
- `icon-button.figma.tsx` — Icon-only button
- `link-button.figma.tsx` — Button as link
- `toggle-button.figma.tsx` — Toggle button with pressed state
- `loading-button.figma.tsx` — Button with spinner
- `button-group.figma.tsx` — Grouped buttons
- `toggle.figma.tsx` — Two-state toggle
- `toggle-group.figma.tsx` — Grouped toggles

### Overlays & Dialogs
- `dialog.figma.tsx` — Modal dialog
- `dialog-footer.figma.tsx` — Dialog with sticky footer
- `sheet.figma.tsx` — Side sheet
- `alert-dialog.figma.tsx` — Alert/confirmation dialog
- `tooltip.figma.tsx` — Tooltip
- `toast.figma.tsx` — Toast notification (Radix)
- `sonner.figma.tsx` — Toast notification (Sonner)
- `popover.figma.tsx` — Popover
- `hover-card.figma.tsx` — Hover card
- `command.figma.tsx` — Command palette

### Menus
- `dropdown-menu.figma.tsx` — Dropdown menu
- `context-menu.figma.tsx` — Context menu
- `menubar.figma.tsx` — Menu bar
- `navigation-menu.figma.tsx` — Navigation menu

### Data Display
- `tabs.figma.tsx` — Tabs
- `accordion.figma.tsx` — Accordion
- `collapsible.figma.tsx` — Collapsible section
- `table.figma.tsx` — Table
- `pagination.figma.tsx` — Pagination
- `card.figma.tsx` — Card
- `badge.figma.tsx` — Badge
- `alert.figma.tsx` — Alert
- `avatar.figma.tsx` — Avatar
- `avatar-stack.figma.tsx` — Avatar stack
- `progress.figma.tsx` — Progress bar
- `separator.figma.tsx` — Separator
- `skeleton.figma.tsx` — Skeleton loader
- `breadcrumb.figma.tsx` — Breadcrumb navigation

### Layout
- `calendar.figma.tsx` — Calendar
- `date-picker.figma.tsx` — Date picker
- `carousel.figma.tsx` — Carousel
- `resizable.figma.tsx` — Resizable panels
- `scroll-area.figma.tsx` — Scroll area
- `aspect-ratio.figma.tsx` — Aspect ratio container
- `sidebar.figma.tsx` — Sidebar navigation
- `label.figma.tsx` — Form label

### Forms
- `input-otp.figma.tsx` — OTP input
- `input-file.figma.tsx` — File input
- `form-field.figma.tsx` — Vertical form field
- `horizontal-field.figma.tsx` — Horizontal form field
- `rich-checkbox-group.figma.tsx` — Card-style checkboxes
- `rich-switch-group.figma.tsx` — Card-style switches
- `rich-radio-group.figma.tsx` — Card-style radios

## Notes

- These files are **not executed** by Code Connect; the CLI treats snippet code as strings.
- Keep prop/value mappings aligned with `COMPONENT_MAPPINGS.md`.
- Prefer stable selectors via `data-*`/`data-slot` emitted by components.

## Validation

```bash
# Dry run (validates without publishing)
pnpm codeconnect:dry-run

# Publish to Figma
pnpm codeconnect:publish
```

Both commands require `FIGMA_ACCESS_TOKEN` environment variable.
