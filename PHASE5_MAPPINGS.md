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
  - `Toast` primitives: `@/components/ui/toast`
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
- Emits `data-slot="sheet-content"` on the sheet content root.

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

- Emits `data-slot="dialog-content"` on the dialog content root.
- `DialogOverlay` emits `data-slot="dialog-overlay"` (useful for Code Connect mapping/debugging).

---

## PopoverContent

- **Component**: `PopoverContent` (part of `Popover`)
- **Import**: `@/components/ui/popover`

### Axes (Figma → code)

- **Align** → `align: "start" | "center" | "end"` (default: `"center"`)

### State (Figma → code)

- **Open/close** → controlled by Radix Popover state (`<Popover>` root + `<PopoverTrigger>`).
- **Placement** → Radix sets `data-side="top" | "right" | "bottom" | "left"` on the content (drives directional animation).

### Data attributes

- Emits `data-align` on the popover content root.
- Emits `data-slot="popover-content"` on the popover content root.
- Radix emits `data-state` and `data-side` on the content (useful for Code Connect mapping/debugging).

---

## TooltipContent

- **Component**: `TooltipContent` (part of `Tooltip`)
- **Import**: `@/components/ui/tooltip`

### Axes (Figma → code)

- None (tooltip content is primarily state/placement-driven).

### State (Figma → code)

- **Open/close** → controlled by Radix Tooltip state.
- **Placement** → Radix sets `data-side="top" | "right" | "bottom" | "left"` on the content (drives directional animation).

### Data attributes

- Emits `data-slot="tooltip-content"` on the tooltip content root.
- Radix emits `data-state` and `data-side` on the content (useful for Code Connect mapping/debugging).

---

## AlertDialogContent

- **Component**: `AlertDialogContent` (part of `AlertDialog`)
- **Import**: `@/components/ui/alert-dialog`

### Axes (Figma → code)

- None (modal surface).

### State (Figma → code)

- **Open/close** → controlled by Radix AlertDialog state (`<AlertDialog>` root + `<AlertDialogTrigger>`).
- **Overlay/backdrop** → `AlertDialogOverlay` uses the `bg-backdrop` semantic token.

### Data attributes

- Emits `data-slot="alert-dialog-content"` on the alert dialog content root.
- `AlertDialogOverlay` emits `data-slot="alert-dialog-overlay"` (useful for Code Connect mapping/debugging).

---

## HoverCardContent

- **Component**: `HoverCardContent` (part of `HoverCard`)
- **Import**: `@/components/ui/hover-card`

### Axes (Figma → code)

- **Align** → `align: "start" | "center" | "end"` (default: `"center"`)

### State (Figma → code)

- **Open/close** → controlled by Radix HoverCard state.
- **Placement** → Radix sets `data-side="top" | "right" | "bottom" | "left"` on the content (drives directional animation).

### Data attributes

- Emits `data-align` on the hover card content root.
- Emits `data-slot="hover-card-content"` on the hover card content root.
- Radix emits `data-state` and `data-side` on the content (useful for Code Connect mapping/debugging).

---

## ContextMenuContent / ContextMenuItem

- **Component**: `ContextMenuContent`, `ContextMenuItem` (part of `ContextMenu`)
- **Import**: `@/components/ui/context-menu`

### Axes (Figma → code)

- None (content + items are state/placement-driven).

### State (Figma → code)

- **Open/close** → controlled by Radix ContextMenu state (right click trigger).
- **Placement** → Radix sets `data-side="top" | "right" | "bottom" | "left"` on content/sub-content (drives directional animation).
- **Focused / highlighted** → Radix sets `data-highlighted` on the active item.
- **Disabled** → `disabled` prop on items; Radix sets `data-disabled`.
- **Submenu open** → Radix sets `data-state="open"` on sub-triggers and `data-state` on sub-content.

### Data attributes

- Emits `data-slot="context-menu-content"` on the content root.
- Emits `data-slot="context-menu-item"` on each item.
- Emits `data-slot="context-menu-sub-trigger"` and `data-slot="context-menu-sub-content"` for submenus.
- Emits `data-slot="context-menu-checkbox-item"` and `data-slot="context-menu-radio-item"` on those item types.
- Radix emits `data-state`, `data-side`, `data-disabled`, and `data-highlighted` (useful for Code Connect mapping/debugging).

---

## AccordionTrigger / AccordionContent

- **Component**: `AccordionTrigger`, `AccordionContent` (part of `Accordion`)
- **Import**: `@/components/ui/accordion`

### Axes (Figma → code)

- None (styling is state-driven).

### State (Figma → code)

- **Open/close** → Radix sets `data-state="open" | "closed"` on trigger + content.

### Data attributes

- Emits `data-slot="accordion-item"`, `data-slot="accordion-trigger"`, and `data-slot="accordion-content"`.
- Radix emits `data-state` (useful for Code Connect mapping/debugging).

---

## ScrollArea / ScrollBar

- **Component**: `ScrollArea`, `ScrollBar`
- **Import**: `@/components/ui/scroll-area`

### Axes (Figma → code)

- None (layout surface).

### State (Figma → code)

- Scrollbars appear based on overflow/content; Radix manages scrollbar visibility/interaction.

### Data attributes

- Emits `data-slot="scroll-area"` on the root.
- Emits `data-slot="scroll-area-viewport"`, `data-slot="scroll-area-scrollbar"`, `data-slot="scroll-area-thumb"`, and `data-slot="scroll-area-corner"`.

---

## Collapsible / CollapsibleTrigger / CollapsibleContent

- **Component**: `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent`
- **Import**: `@/components/ui/collapsible`

### Axes (Figma → code)

- None (state-driven).

### State (Figma → code)

- **Open/close** → controlled by Radix Collapsible state (`open`, `defaultOpen`, `onOpenChange`).
- Radix sets `data-state="open" | "closed"` on trigger/content.

### Data attributes

- Emits `data-slot="collapsible"`, `data-slot="collapsible-trigger"`, and `data-slot="collapsible-content"`.
- Radix emits `data-state` (useful for Code Connect mapping/debugging).

---

## ResizablePanelGroup / ResizableHandle

- **Component**: `ResizablePanelGroup`, `ResizableHandle` (part of `Resizable`)
- **Import**: `@/components/ui/resizable`

### Axes (Figma → code)

- None (layout primitive).

### State (Figma → code)

- Orientation and sizing are managed by `react-resizable-panels` via the `orientation` prop on `ResizablePanelGroup`.

### Data attributes

- `ResizablePanelGroup` emits `data-slot="resizable-panel-group"`.
- `ResizablePanelGroup` emits `data-orientation="horizontal" | "vertical"` (for Code Connect mapping/debugging).
- `ResizableHandle` emits:
  - `data-slot="resizable-handle"`
  - `data-with-handle="true"` when `withHandle` is enabled
  - `data-slot="resizable-handle-grip"` on the grip element when enabled

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

---

## PaginationPrevious / PaginationNext

- **Component**: `PaginationPrevious`, `PaginationNext` (part of `Pagination`)
- **Import**: `@/components/ui/pagination`

### Axes (Figma → code)

- Inherit from `PaginationLink`:
  - `size` (defaults to `"regular"` in these wrappers)

### State (Figma → code)

- **Disabled** → via `aria-disabled` passed through to the underlying `PaginationLink`.

### Data attributes

- Inherit from `PaginationLink`: `data-active`, `data-disabled`.

---

## Pagination

- **Component**: `Pagination` (nav container)
- **Import**: `@/components/ui/pagination`

### Axes (Figma → code)

- None.

### State (Figma → code)

- None (layout container).

### Data attributes

- None.

---

## RadioGroup

- **Component**: `RadioGroup` (root)
- **Import**: `@/components/ui/radio-group`

### Axes (Figma → code)

- None (axes live on `RadioGroupItem`).

### State (Figma → code)

- **Disabled** → `disabled` on the group root (`<RadioGroup disabled />`)

### Data attributes

- None.

---

## Select / SelectContent / SelectItem

- **Component**: `Select`, `SelectContent`, `SelectItem` (part of `Select`)
- **Import**: `@/components/ui/select`

### Axes (Figma → code)

- `Select` (root): none (state-driven).
- `SelectContent`: none (placement-driven).
- `SelectItem`: none (state-driven).

### State (Figma → code)

- **Open/close** → controlled by Radix Select state.
- **Placement** → Radix sets `data-side` and `data-state` on `SelectContent`.
- **Focused/highlighted** → Radix sets `data-highlighted` on the active item.
- **Disabled item** → `disabled` on `SelectItem`; Radix sets `data-disabled`.

### Data attributes

- `SelectTrigger` emits axis `data-*` (documented above).
- `SelectContent`: currently relies on Radix `data-side` / `data-state` for placement/animation.
- `SelectItem`: currently relies on Radix `data-disabled` / `data-highlighted` for state.

---

## Card / CardHeader / CardContent / CardFooter / CardTitle / CardDescription

- **Component**: `Card` family (layout surfaces)
- **Import**: `@/components/ui/card`

### Axes (Figma → code)

- None.

### State (Figma → code)

- None.

### Data attributes

- Recommend emitting stable `data-slot` values on each exported subcomponent (e.g. `card`, `card-header`, `card-content`, etc.) for Code Connect targeting/debugging.

---

## Table / TableHeader / TableBody / TableFooter / TableRow / TableHead / TableCell / TableCaption

- **Component**: `Table` family (data display)
- **Import**: `@/components/ui/table`

### Axes (Figma → code)

- None.

### State (Figma → code)

- `TableRow` supports `data-state="selected"` (consumer-managed) to style selected rows.

### Data attributes

- Recommend emitting stable `data-slot` values on exported subcomponents for Code Connect targeting/debugging.
- `TableRow` uses `data-state` when provided (useful for mapping selected state).

---

## Separator

- **Component**: `Separator`
- **Import**: `@/components/ui/separator`

### Axes (Figma → code)

- **Orientation** → `orientation: "horizontal" | "vertical"` (default: `"horizontal"`)

### State (Figma → code)

- None.

### Data attributes

- Recommend emitting `data-orientation` when the axis is meaningful for Code Connect mapping/debugging.

---

## Progress

- **Component**: `Progress`
- **Import**: `@/components/ui/progress`

### Axes (Figma → code)

- None.

### State (Figma → code)

- **Value** → `value?: number` (0–100); drives the indicator translate.
- **Disabled** → if needed, use native `disabled`/`aria-disabled` patterns outside; component does not define a disabled axis today.

### Data attributes

- Recommend `data-slot="progress"` on the root and `data-slot="progress-indicator"` on the indicator for Code Connect targeting/debugging.

---

## Skeleton

- **Component**: `Skeleton`
- **Import**: `@/components/ui/skeleton`

### Axes (Figma → code)

- None.

### State (Figma → code)

- None.

### Data attributes

- Recommend `data-slot="skeleton"` for Code Connect targeting/debugging.

---

## Avatar / AvatarImage / AvatarFallback

- **Component**: `Avatar` family
- **Import**: `@/components/ui/avatar`

### Axes (Figma → code)

- None today (size/shape are class-driven by consumers).

### State (Figma → code)

- **Image loaded vs fallback** → driven by Radix Avatar behavior and image loading.

### Data attributes

- Recommend emitting stable `data-slot` values on avatar root/image/fallback for Code Connect targeting/debugging.

---

## AspectRatio

- **Component**: `AspectRatio`
- **Import**: `@/components/ui/aspect-ratio`

### Axes (Figma → code)

- **Ratio** → `ratio?: number` (Radix prop)

### State (Figma → code)

- None.

### Data attributes

- Recommend emitting `data-ratio` (or at least `data-slot="aspect-ratio"`) for Code Connect mapping/debugging when ratio is a meaningful design axis.

---

## Breadcrumb / BreadcrumbList / BreadcrumbItem / BreadcrumbLink / BreadcrumbPage / BreadcrumbSeparator / BreadcrumbEllipsis

- **Component**: `Breadcrumb` family
- **Import**: `@/components/ui/breadcrumb`

### Axes (Figma → code)

- None.

### State (Figma → code)

- `BreadcrumbPage` uses `aria-current="page"` + `aria-disabled="true"` semantics.
- `BreadcrumbSeparator`/`BreadcrumbEllipsis` are presentational (`aria-hidden`, `role="presentation"`).

### Data attributes

- Recommend emitting stable `data-slot` values across the breadcrumb subcomponents for Code Connect targeting/debugging.

---

## Carousel / CarouselContent / CarouselItem / CarouselPrevious / CarouselNext

- **Component**: `Carousel` family
- **Import**: `@/components/ui/carousel`

### Axes (Figma → code)

- **Orientation** → `orientation: "horizontal" | "vertical"` (default: `"horizontal"`)

### State (Figma → code)

- **Can scroll prev/next** → derived from Embla; previous/next buttons set `disabled` when scrolling isn’t possible.
- **Keyboard** → arrow keys trigger scroll (handled by `Carousel` root).

### Data attributes

- Recommend emitting `data-orientation` and stable `data-slot` values across carousel parts for Code Connect targeting/debugging.

---

## Label

- **Component**: `Label`
- **Import**: `@/components/ui/label`

### Axes (Figma → code)

- None (styling is base only today).

### State (Figma → code)

- `peer-disabled:*` styles apply when associated control is disabled.

### Data attributes

- None.

---

## FormField (layout wrapper)

- **Component**: `FormField` (simple label/description/error wrapper in `form-field.tsx`)
- **Import**: `@/components/ui/form-field`

### Axes (Figma → code)

- None (this is a composition wrapper).

### State (Figma → code)

- **Invalid** → driven by `error?: string`; wrapper injects `aria-invalid` and `aria-describedby` onto its single child control.
- **Disabled** → driven by `disabled?: boolean`; wrapper injects `disabled` onto its single child control and dims the label.

### Data attributes

- None today (recommend `data-slot="form-field"` for mapping/debugging if this becomes a Code Connect target).

---

## Form (react-hook-form primitives)

- **Component**: `Form`, `FormItem`, `FormLabel`, `FormControl`, `FormDescription`, `FormMessage`, `FormField`
- **Import**: `@/components/ui/form`

### Axes (Figma → code)

- None.

### State (Figma → code)

- **Invalid** → derived from `react-hook-form` field state; `FormControl` sets `aria-invalid` and `aria-describedby` accordingly.
- `FormLabel` changes styling when the field has an error.

### Data attributes

- None today (if Code Connect needs to target these wrappers, add stable `data-slot` values and document them here).

---

## Toaster

- **Component**: `Toaster` (toast renderer)
- **Import**: `@/components/ui/toaster`

### Axes (Figma → code)

- None.

### State (Figma → code)

- Renders active toast items from `useToast()` store.

### Data attributes

- Inherits toast `data-variant` on each `Toast` (documented above).

---

## Code Connect Status

The following components have Figma Code Connect files (`packages/ui/src/figma/*.figma.tsx`):

### Core Controls
- **Button** (`button.figma.tsx`) - variant, size, roundness, disabled, leftIcon, rightIcon
- **Input** (`input.figma.tsx`) - size, roundness, decoration, disabled, aria-invalid
- **Textarea** (`textarea.figma.tsx`) - size, roundness, disabled, aria-invalid
- **Select** (`select.figma.tsx`) - size, lines, leftIcon, prepend, disabled, aria-invalid
- **Checkbox** (`checkbox.figma.tsx`) - size, roundness, disabled, aria-invalid
- **RadioGroup** (`radio-group.figma.tsx`) - size, disabled, aria-invalid
- **Switch** (`switch.figma.tsx`) - size, disabled, aria-invalid
- **Slider** (`slider.figma.tsx`, `slider-vertical.figma.tsx`) - disabled, aria-invalid

### Overlays and Dialogs
- **Dialog** (`dialog.figma.tsx`) - Type axis → contentClassName
- **Sheet** (`sheet.figma.tsx`) - side axis
- **AlertDialog** (`alert-dialog.figma.tsx`) - standard structure
- **Tooltip** (`tooltip.figma.tsx`) - side axis
- **Toast** (`toast.figma.tsx`) - variant axis

### Data Display
- **Tabs** (`tabs.figma.tsx`) - standard structure
- **Accordion** (`accordion.figma.tsx`) - type axis
- **Table** (`table.figma.tsx`) - standard structure
- **Pagination** (`pagination.figma.tsx`) - standard structure
- **Card** (`card.figma.tsx`) - standard structure
- **Badge** (`badge.figma.tsx`) - variant axis
- **Alert** (`alert.figma.tsx`) - variant axis
- **Avatar** (`avatar.figma.tsx`) - standard structure
- **Progress** (`progress.figma.tsx`) - standard structure
- **Separator** (`separator.figma.tsx`) - orientation axis

### Layout Components
- **Calendar** (`calendar.figma.tsx`) - mode (single)
- **Carousel** (`carousel.figma.tsx`) - orientation axis
- **Resizable** (`resizable.figma.tsx`) - orientation axis
- **ScrollArea** (`scroll-area.figma.tsx`) - standard structure
- **Label** (`label.figma.tsx`) - standard structure

### Button Variants
- **Icon Button** (`icon-button.figma.tsx`) - Button with icon only, square aspect
- **Link Button** (`link-button.figma.tsx`) - Button with asChild wrapping anchor
- **Toggle Button** (`toggle-button.figma.tsx`) - Button with aria-pressed state

### Components without Code Connect (out of scope or layout helpers)
- Loading Button (needs loading prop/state on Button component)
- Button Group (layout pattern, needs ButtonGroup component)
- DropdownMenu, ContextMenu, Menubar, NavigationMenu (complex nested menus)
- Form, FormField (react-hook-form wrappers)
- Breadcrumb, Collapsible, HoverCard, Popover (may be added later)
- Skeleton, AspectRatio (utility components)

