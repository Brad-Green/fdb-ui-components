# AI Agent Governance Rules

This document provides rules and guidelines for AI agents (Cursor, Copilot, Claude, etc.) when generating or modifying code in this design system.

## Project Overview

This is a **shadcn/ui-style component library** with:
- **Tailwind CSS** for all styling (no CSS-in-JS)
- **Design tokens** from Figma via Style Dictionary
- **Figma Code Connect** for design-to-code sync
- **Copy/paste consumption model** (not an npm-installed library)

## The Three Cardinal Rules

### 1. Always Use Design Tokens

**All styling MUST reference design tokens via Tailwind classes or CSS variables.**

```jsx
// ✅ CORRECT - Uses semantic tokens
<button className="bg-primary text-primary-foreground border-border">

// ❌ WRONG - Hardcoded values
<button className="bg-[#672cbf] text-white border-[#e2e8f0]">
<button style={{ backgroundColor: '#672cbf' }}>
```

### 2. Use Tailwind for All Styling

**No CSS-in-JS, no inline styles (except computed values), no separate CSS files for components.**

```jsx
// ✅ CORRECT - Tailwind classes
<div className="flex flex-col gap-4 p-6 bg-background rounded-lg">

// ❌ WRONG - Inline styles
<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

// ✅ EXCEPTION - Computed dynamic values
<div style={{ width: `${progress}%` }}>
```

### 3. Zero Tolerance for Hardcoded Values

Before committing any code, verify:
- No hex codes (`#3b82f6`, `#ffffff`)
- No rgb/rgba values (`rgb(59, 130, 246)`)
- No pixel values in arbitrary brackets (`p-[16px]`, `w-[200px]`)
- No color scale utilities (`bg-slate-500`, `text-gray-600`)

## Available Token Classes

### Colors (Semantic)

```jsx
// Backgrounds
bg-background        // Page background
bg-card              // Card/panel background
bg-popover           // Popover/dropdown background
bg-primary           // Primary action background
bg-secondary         // Secondary action background
bg-muted             // Muted/subtle background
bg-accent            // Accent background
bg-destructive       // Destructive/error background

// Text
text-foreground           // Primary text
text-muted-foreground     // Secondary/muted text
text-primary-foreground   // Text on primary background
text-secondary-foreground // Text on secondary background
text-destructive          // Error text

// Borders
border-border        // Default border
border-input         // Input/control border
border-ring          // Focus ring
```

### Spacing

Use Tailwind's spacing scale: `p-1` through `p-12`, `gap-1` through `gap-8`, etc.

### Border Radius

```jsx
rounded-sm    // Small radius
rounded-md    // Medium radius (default)
rounded-lg    // Large radius
rounded-full  // Pill/circle
```

## Component Patterns

### Use shadcn/ui as Foundation

Always check if a shadcn/ui component exists before building custom:

```jsx
// ✅ CORRECT - Use existing components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog } from "@/components/ui/dialog"

// ❌ WRONG - Building from scratch when shadcn exists
<button className="...">Click me</button>
```

### Props Must Map to Figma Variants

Component props should mirror Figma variant axes:

```jsx
// ✅ CORRECT - Props match Figma variants
<Button variant="secondary" size="large">
<Input decoration="both" size="small">

// ❌ WRONG - Made-up props not in Figma
<Button isRounded isPrimary>
<Input hasError showIcon>
```

### State via ARIA, Not Props

```jsx
// ✅ CORRECT - ARIA for invalid state
<Input aria-invalid="true" />

// ❌ WRONG - Custom error prop
<Input error={true} />
<Input isInvalid />
```

### Use CVA for Variants

All variant styling goes through `cva()`:

```jsx
// ✅ CORRECT
const buttonVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", secondary: "..." },
    size: { regular: "...", large: "..." },
  },
  defaultVariants: { variant: "default", size: "regular" },
})

// ❌ WRONG - Ad-hoc conditionals
className={`base ${isLarge ? 'text-lg p-4' : 'text-sm p-2'}`}
```

## File Structure

When creating new components:

```
packages/ui/src/
├── components/ui/
│   ├── my-component.tsx       # Component implementation
├── figma/
│   ├── my-component.figma.tsx # Code Connect mapping
```

## Code Connect Requirements

Every component needs a corresponding `.figma.tsx` file:

```tsx
import figma from "@figma/code-connect"
import { MyComponent } from "@/components/ui/my-component"

figma.connect(
  MyComponent,
  "https://www.figma.com/design/...",
  {
    example: () => <MyComponent variant="default" />,
  }
)
```

## Checklist Before Committing

- [ ] No hardcoded hex/rgb colors
- [ ] No hardcoded pixel values in brackets
- [ ] No color scale utilities (slate-500, gray-600)
- [ ] Uses existing shadcn/ui components where available
- [ ] Props match Figma variant axes
- [ ] State uses ARIA attributes (not custom props)
- [ ] Variants use CVA
- [ ] Has Code Connect mapping file
- [ ] Added to ComponentGallery.tsx for visual testing

## Common Mistakes to Avoid

### Don't Use Tailwind Color Scales

```jsx
// ❌ WRONG
className="bg-slate-100 text-slate-900 border-slate-200"

// ✅ CORRECT
className="bg-muted text-foreground border-border"
```

### Don't Create Visual-Only State Props

```jsx
// ❌ WRONG
<Input error focused pressed />

// ✅ CORRECT
<Input aria-invalid="true" /> // Style via aria-invalid
```

### Don't Hardcode in Arbitrary Values

```jsx
// ❌ WRONG
className="w-[320px] p-[18px] rounded-[6px]"

// ✅ CORRECT
className="w-80 p-4 rounded-md"
```

### Don't Skip Code Connect

Every component in `components/ui/` needs a matching `figma/*.figma.tsx` file. This is how Figma shows code snippets to designers.

## Token Update Workflow

If you need a color/token that doesn't exist:

1. Check if a semantic token already covers your use case
2. If not, the token should be added in Figma first
3. Run `pnpm tokens:sync && pnpm tokens:build`
4. Use the new token via Tailwind

**Never create one-off colors in components.**

## Questions?

- See `API_CONVENTIONS.md` for detailed prop/type conventions
- See `COMPONENT_MAPPINGS.md` for Figma → props reference
- See `CONSUME_IN_APP.md` for consumer integration guide
