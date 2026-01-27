# Phase 5 mappings (Figma → props)

This doc is the **source of truth for component prop contracts** during Phase 5.

Format:

- **Component**: Figma name
- **Import**: consumer import path (`@/...`)
- **Axes**: variant axes in Figma → props in code (names + allowed values + default)
- **State**: how Figma states map to code state (ARIA / disabled / Radix)
- **Data attributes**: required `data-*` emitted for Code Connect mapping/debugging

---

## RadioGroupItem

- **Component**: `RadioGroupItem`
- **Import**: `@/components/ui/radio-group`

### Axes (Figma → code)

- **Size** → `size: "regular" | "large"` (default: `"regular"`)

### State (Figma → code)

- **Invalid** → `aria-invalid` on the *item* (`<RadioGroupItem aria-invalid />`)
- **Disabled (group)** → `disabled` on the group root (`<RadioGroup disabled />`)
- **Disabled (item)** → `disabled` on the *item* (`<RadioGroupItem disabled />`)

### Data attributes

- Emits `data-size` on each item.

---

## Checkbox

- **Component**: `Checkbox`
- **Import**: `@/components/ui/checkbox`

### Axes (Figma → code)

- **Size** → `size: "regular" | "large"` (default: `"regular"`)
- **Roundness** → `roundness: "default" | "round"` (default: `"default"`)

### State (Figma → code)

- **Checked** → Radix `checked` / `defaultChecked`
- **Invalid** → `aria-invalid` on the control (`<Checkbox aria-invalid />`)
- **Disabled** → `disabled` on the control (`<Checkbox disabled />`)

### Data attributes

- Emits `data-size` and `data-roundness` on the root.

---

## Switch

- **Component**: `Switch`
- **Import**: `@/components/ui/switch`

### Axes (Figma → code)

- **Size** → `size: "regular" | "large"` (default: `"regular"`)

### State (Figma → code)

- **Checked** → Radix `checked` / `defaultChecked`
- **Invalid** → `aria-invalid` on the control (`<Switch aria-invalid />`)
- **Disabled** → `disabled` on the control (`<Switch disabled />`)

### Data attributes

- Emits `data-size` on the root.

---

## Slider

- **Component**: `Slider`
- **Import**: `@/components/ui/slider`

### Axes (Figma → code)

- None yet (add only if Figma defines a real axis like size/variant/track style).

### State (Figma → code)

- **Invalid** → `aria-invalid` on the slider root (`<Slider aria-invalid />`)
  - If using `FormField`, invalid can also be injected via `aria-invalid` on the child.
- **Disabled** → `disabled` on the slider root (`<Slider disabled />`)

### Data attributes

- None (until an axis exists).

---

## Input

- **Component**: `Input`
- **Import**: `@/components/ui/input`

### Axes (Figma → code)

- **Size** → `size: "mini" | "small" | "regular" | "large"` (default: `"regular"`)
- **Roundness** → `roundness: "default" | "round"` (default: `"default"`)
- **Decoration** → `decoration: FieldDecoration` (default: `"none"`)
  - `FieldDecoration = "none" | "leftIcon" | "rightIcon" | "both"` (source: `@/lib/types`)

### State (Figma → code)

- **Invalid** → `aria-invalid` on the control (`<Input aria-invalid />`)
- **Disabled** → `disabled` on the control (`<Input disabled />`)

### Data attributes

- Emits `data-size`, `data-roundness`, and `data-decoration` on the input.

---

## Textarea

- **Component**: `Textarea`
- **Import**: `@/components/ui/textarea`

### Axes (Figma → code)

- **Size** → `size: "mini" | "small" | "regular" | "large"` (default: `"regular"`)
- **Roundness** → `roundness: "default" | "round"` (default: `"default"`)

### State (Figma → code)

- **Invalid** → `aria-invalid` on the control (`<Textarea aria-invalid />`)
- **Disabled** → `disabled` on the control (`<Textarea disabled />`)

### Data attributes

- Emits `data-size` and `data-roundness` on the textarea.

---

## SelectTrigger

- **Component**: `SelectTrigger` (part of `Select`)
- **Import**: `@/components/ui/select`

### Axes (Figma → code)

- **Size** → `size: "regular" | "large"` (default: `"regular"`)
- **Roundness** → `roundness: "default" | "round"` (default: `"default"`)
- **Variant** → `variant: "default" | "destructive"` (default: `"default"`)
- **Decoration** → `decoration: FieldDecoration` (default: `"none"`)
  - `FieldDecoration = "none" | "leftIcon" | "rightIcon" | "both"` (source: `@/lib/types`)

### State (Figma → code)

- **Invalid** → `aria-invalid` on the trigger (`<SelectTrigger aria-invalid />`)
- **Disabled** → `disabled` on the trigger (`<SelectTrigger disabled />`)

### Data attributes

- Emits `data-size`, `data-roundness`, `data-variant`, and `data-decoration` on the trigger.

---

## Button

- **Component**: `Button`
- **Import**: `@/components/ui/button`

### Axes (Figma → code)

- **Variant** → `variant: "primary" | "secondary" | "outline" | "ghost" | "ghostMuted" | "destructive"` (default: `"primary"`)
- **Size** → `size: "mini" | "small" | "regular" | "large"` (default: `"regular"`)
- **Roundness** → `roundness: "default" | "round"` (default: `"default"`)
- **Decoration** → `decoration: FieldDecoration` (optional; controls Code Connect axis + `data-decoration`)
  - `FieldDecoration = "none" | "leftIcon" | "rightIcon" | "both"` (source: `@/lib/types`)
  - Icon content is passed via `leftIcon` / `rightIcon`.

### State (Figma → code)

- **Invalid** → `aria-invalid` on the control (`<Button aria-invalid />`)
- **Disabled** → `disabled` on the control (`<Button disabled />`)

### Data attributes

- Emits `data-variant`, `data-size`, `data-roundness`, and `data-decoration` on the button.

---

## Calendar

- **Component**: `Calendar`
- **Import**: `@/components/ui/calendar`

### Axes (Figma → code)

- None (calendar surface is mostly state-driven).

### State (Figma → code)

- **Navigation disabled** → DayPicker will set `aria-disabled` on the previous/next navigation buttons when month navigation is constrained.
  - Example (forces disabled nav): `<Calendar fromMonth={m} toMonth={m} />`

### Data attributes

- Root emits `data-slot="calendar"`.
- Day buttons emit `data-day` and selection/range flags (`data-selected-single`, `data-range-start`, `data-range-middle`, `data-range-end`).

---

## Badge

- **Component**: `Badge`
- **Import**: `@/components/ui/badge`

### Axes (Figma → code)

- **Variant** → `variant: "default" | "secondary" | "destructive" | "outline"` (default: `"default"`)

### State (Figma → code)

- None (display component).

### Data attributes

- Emits `data-variant` on the badge root.

---

## Alert

- **Component**: `Alert`
- **Import**: `@/components/ui/alert`

### Axes (Figma → code)

- **Variant** → `variant: "default" | "destructive"` (default: `"default"`)

### State (Figma → code)

- None (display component; use variant for semantic styling).

### Data attributes

- Emits `data-variant` on the alert root.

---

## Toast

- **Component**: `Toast` (rendered via `Toaster` store)
- **Import**:
  - `Toaster`: `@/components/ui/toaster`
  - API: `toast()` / `useToast()` from `@/hooks/use-toast`

### Axes (Figma → code)

- **Variant** → `variant: "default" | "destructive"` (default: `"default"`)

### State (Figma → code)

- **Open/close** → controlled by the toast store (`toast({ ... })`) and Radix `open` / `onOpenChange`.

### Data attributes

- Emits `data-variant` on the toast root.

---

## SheetContent

- **Component**: `SheetContent` (part of `Sheet`)
- **Import**: `@/components/ui/sheet`

### Axes (Figma → code)

- **Side** → `side: "top" | "right" | "bottom" | "left"` (default: `"right"`)

### State (Figma → code)

- **Open/close** → controlled by Radix Dialog state (`<Sheet>` root + `<SheetTrigger>`).

### Data attributes

- Emits `data-side` on the sheet content root.

---

## DialogContent

- **Component**: `DialogContent` (part of `Dialog`)
- **Import**: `@/components/ui/dialog`

### Axes (Figma → code)

- None (modal surface).

### State (Figma → code)

- **Open/close** → controlled by Radix Dialog state (`<Dialog>` root + `<DialogTrigger>`).
- **Overlay/backdrop** → `DialogOverlay` uses the `bg-backdrop` semantic token.

### Data attributes

- None (until an axis exists).

---

## DropdownMenuItem

- **Component**: `DropdownMenuItem` (part of `DropdownMenu`)
- **Import**: `@/components/ui/dropdown-menu`

### Axes (Figma → code)

- None (menu item styling is state-driven).

### State (Figma → code)

- **Focused / highlighted** → Radix sets `data-highlighted` on the active item (drives hover/keyboard highlight).
  - Visual styling also uses `focus:bg-accent` and `focus-visible:ring-*` on the item.
- **Disabled** → `disabled` prop on the item (`<DropdownMenuItem disabled />`).
  - Radix sets `data-disabled` and prevents interaction.

### Data attributes

- Radix emits `data-highlighted` on the active item (useful for Code Connect mapping/debugging).
- Radix emits `data-disabled` when disabled (useful for Code Connect mapping/debugging).

---

## DropdownMenuSubTrigger

- **Component**: `DropdownMenuSubTrigger` (part of `DropdownMenuSub`)
- **Import**: `@/components/ui/dropdown-menu`

### Axes (Figma → code)

- None (trigger styling is state-driven).

### State (Figma → code)

- **Open** → Radix sets `data-state="open"` on the sub-trigger when its submenu is open.
- **Disabled** → `disabled` prop on the trigger (`<DropdownMenuSubTrigger disabled />`).
  - Radix sets `data-disabled` and prevents opening.

### Data attributes

- Radix emits `data-state="open"` when open (useful for Code Connect mapping/debugging).
- Radix emits `data-disabled` when disabled (useful for Code Connect mapping/debugging).

---

## DropdownMenuSubContent

- **Component**: `DropdownMenuSubContent` (part of `DropdownMenuSub`)
- **Import**: `@/components/ui/dropdown-menu`

### Axes (Figma → code)

- None (content styling is state/placement-driven).

### State (Figma → code)

- **Open/close** → Radix sets `data-state="open" | "closed"` on the sub-content (drives enter/exit animation).
- **Placement** → Radix sets `data-side="top" | "right" | "bottom" | "left"` on the sub-content (drives directional animation).

### Data attributes

- Radix emits `data-state` and `data-side` on the sub-content (useful for Code Connect mapping/debugging).

---

## DropdownMenuContent

- **Component**: `DropdownMenuContent` (part of `DropdownMenu`)
- **Import**: `@/components/ui/dropdown-menu`

### Axes (Figma → code)

- None (content styling is state/placement-driven).

### State (Figma → code)

- **Open/close** → Radix sets `data-state="open" | "closed"` on the content (drives enter/exit animation).
- **Placement** → Radix sets `data-side="top" | "right" | "bottom" | "left"` on the content (drives directional animation).

### Data attributes

- Radix emits `data-state` and `data-side` on the content (useful for Code Connect mapping/debugging).

---

## TabsTrigger

- **Component**: `TabsTrigger` (part of `Tabs`)
- **Import**: `@/components/ui/tabs`

### Axes (Figma → code)

- None (selection styling is state-driven).

### State (Figma → code)

- **Active** → `data-state="active"` (Radix) drives surface/text styles.
- **Focused** → `focus-visible:ring-*` styles.
- **Disabled** → `disabled` on the trigger (`<TabsTrigger disabled />`).

### Data attributes

- None (until an axis exists).

---

## MenubarTrigger / MenubarItem

- **Component**: `MenubarTrigger`, `MenubarItem` (part of `Menubar`)
- **Import**: `@/components/ui/menubar`

### Axes (Figma → code)

- None (styling is state-driven).

### State (Figma → code)

- **Open** (trigger) → `data-state="open"` drives active trigger styling.
- **Focused** → `focus-visible:ring-*` + `focus:bg-accent` (trigger + items).
- **Disabled** → `disabled` on triggers; `data-disabled` on items (Radix).

### Data attributes

- None (until an axis exists).

---

## MenubarContent

- **Component**: `MenubarContent` (part of `Menubar`)
- **Import**: `@/components/ui/menubar`

### Axes (Figma → code)

- None (content styling is state/placement-driven).

### State (Figma → code)

- **Open/close** → Radix sets `data-state="open" | "closed"` on the content (drives enter/exit animation).
- **Placement** → Radix sets `data-side="top" | "right" | "bottom" | "left"` on the content (drives directional animation).

### Data attributes

- Radix emits `data-state` and `data-side` on the content (useful for Code Connect mapping/debugging).

---

## MenubarSubTrigger

- **Component**: `MenubarSubTrigger` (part of `MenubarSub`)
- **Import**: `@/components/ui/menubar`

### Axes (Figma → code)

- None (trigger styling is state-driven).

### State (Figma → code)

- **Open** → Radix sets `data-state="open"` on the sub-trigger when its submenu is open.
- **Disabled** → `disabled` prop on the trigger (`<MenubarSubTrigger disabled />`).
  - Radix sets `data-disabled` and prevents opening.

### Data attributes

- Radix emits `data-state` (open/closed) and `data-disabled` on the sub-trigger (useful for Code Connect mapping/debugging).

---

## MenubarSubContent

- **Component**: `MenubarSubContent` (part of `MenubarSub`)
- **Import**: `@/components/ui/menubar`

### Axes (Figma → code)

- None (content styling is state/placement-driven).

### State (Figma → code)

- **Open/close** → Radix sets `data-state="open" | "closed"` on the sub-content (drives enter/exit animation).
- **Placement** → Radix sets `data-side="top" | "right" | "bottom" | "left"` on the sub-content (drives directional animation).

### Data attributes

- Radix emits `data-state` and `data-side` on the sub-content (useful for Code Connect mapping/debugging).

---

## NavigationMenuTrigger

- **Component**: `NavigationMenuTrigger` (part of `NavigationMenu`)
- **Import**: `@/components/ui/navigation-menu`

### Axes (Figma → code)

- None (styling is state-driven).

### State (Figma → code)

- **Open** → `data-state="open"` drives styling and chevron rotation.
- **Focused** → `focus-visible:ring-*` + focus/hover surface token styles.
- **Disabled** → `disabled` on trigger.

### Data attributes

- Radix emits `data-state` (e.g. `open`/`closed`) on the trigger (useful for Code Connect mapping/debugging).

---

## NavigationMenuContent

- **Component**: `NavigationMenuContent` (part of `NavigationMenu`)
- **Import**: `@/components/ui/navigation-menu`

### Axes (Figma → code)

- None (content styling is motion-driven).

### State (Figma → code)

- **Motion** → Radix sets `data-motion` on the content (e.g. `from-start`, `from-end`, `to-start`, `to-end`), which drives enter/exit + directional animation.

### Data attributes

- Radix emits `data-motion` on the content (useful for Code Connect mapping/debugging).

---

## NavigationMenuViewport

- **Component**: `NavigationMenuViewport` (part of `NavigationMenu`)
- **Import**: `@/components/ui/navigation-menu`

### Axes (Figma → code)

- None (viewport styling is state + layout driven).

### State (Figma → code)

- **Open/close** → Radix sets `data-state="open" | "closed"` on the viewport (drives enter/exit animation).
- **Sizing** → Radix provides CSS variables for layout:
  - `--radix-navigation-menu-viewport-height`
  - `--radix-navigation-menu-viewport-width`

### Data attributes

- Radix emits `data-state` on the viewport; sizing comes from the CSS vars above (useful for Code Connect mapping/debugging).

---

## NavigationMenuIndicator

- **Component**: `NavigationMenuIndicator` (part of `NavigationMenu`)
- **Import**: `@/components/ui/navigation-menu`

### Axes (Figma → code)

- None (indicator is state-driven).

### State (Figma → code)

- **Visible/hidden** → Radix sets `data-state="visible" | "hidden"` on the indicator (drives fade in/out animation).

### Data attributes

- Radix emits `data-state` on the indicator (useful for Code Connect mapping/debugging).

---

## PaginationLink

- **Component**: `PaginationLink` (part of `Pagination`)
- **Import**: `@/components/ui/pagination`

### Axes (Figma → code)

- **Active** → `isActive?: boolean` (default: `false`)

### State (Figma → code)

- **Active** semantics → `aria-current="page"` when active.
- **Disabled** semantics → `aria-disabled` (used by `PaginationPrevious` in the gallery); prevents interaction via CSS.

### Data attributes

- Emits `data-active="true"` when active (for Code Connect mapping/debugging).
- Emits `data-disabled="true"` when `aria-disabled` is set (for Code Connect mapping/debugging).

