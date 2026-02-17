# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.3] - 2026-02-17

### Changed
- **Tokens**: Refreshed design tokens with new `success` color tokens synced from Figma (Brad-Green/FDB-Design-Tokens)
- `@brad-green/tokens` bumped to v1.0.3

### Fixed
- **Input (file)**: Added `file:` pseudo-class styling, vertical centering across all sizes, muted text for "No file chosen" with foreground text when file is selected
- **Label**: Changed font weight from `font-medium` to `font-normal` to match Figma design

### Improved
- **Input File Code Connect**: Added size and roundness variant prop mappings
- **Component Gallery**: Added labels to Radio Group items; expanded Input File section with size, roundness, and state variants

### Documentation
- `GET_STARTED.md`: Added font loading instructions for design token fonts (Work Sans, Geist Mono)

## [1.0.1] - 2026-02-03

### Fixed
- **Tabs**: Inactive tab text now uses `text-foreground` (was `text-muted-foreground`) to match Figma's `general/foreground` and improve accessibility contrast
- **Toggle**: Hover state now uses `text-foreground` (was `text-muted-foreground`) for better visibility
- **Input/Textarea**: Changed from `bg-transparent` to `bg-background` so fields have proper white background per Figma design
- **Tailwind v4 border compatibility**: Added `border-border` to 12 components (Card, Dialog, Select, Popover, HoverCard, DropdownMenu, ContextMenu, Menubar, NavigationMenu, Toast, Resizable, AlertDialog)
- **Token resolution**: Fixed Style Dictionary cross-references within semantic color sets (e.g., `--card` now correctly resolves)

### Changed
- `@brad-green/tokens` bumped to v1.0.2

### Documentation
- `GET_STARTED.md`: Added troubleshooting for Tailwind v4 `border` behavior, `divide-border` usage, and Input/Textarea component guidance

## [1.0.0] - 2026-02-03

### Added

**Components (54 total):**
- Core: Button, Input, Textarea, Label, Checkbox, Radio Group, Select, Switch, Slider, Progress
- Layout: Card, Separator, Aspect Ratio, Scroll Area, Resizable
- Navigation: Tabs, Accordion, Breadcrumb, Pagination, Navigation Menu, Menubar, Sidebar
- Feedback: Alert, Badge, Toast, Sonner, Skeleton, Spinner
- Overlay: Dialog, Sheet, Alert Dialog, Popover, Tooltip, Hover Card, Dropdown Menu, Context Menu, Command
- Data Display: Table, Avatar, Avatar Stack, Calendar, Carousel
- Form: Form, Form Field, Input OTP, Button Group, Toggle, Toggle Group
- Rich Groups: Rich Checkbox Group, Rich Switch Group, Rich Radio Group
- Utility: Collapsible

**Code Connect:**
- 60 Figma Code Connect mapping files covering all 67 Figma component sets
- Full variant/prop mapping for design-to-code parity

**Tokens:**
- `@brad-green/tokens` v1.0.0 published to GitHub Packages
- Design tokens pipeline: Figma → Tokens Studio → Style Dictionary → CSS variables
- shadcn-compatible theme variables

**Infrastructure:**
- CI/CD with lint, build, and Code Connect validation
- Automated token publishing on git tags
- MIT License
- Complete documentation

### Documentation
- `README.md` - Quick start guide
- `CONSUME_IN_APP.md` - Consumer integration guide
- `API_CONVENTIONS.md` - Component API standards
- `COMPONENT_MAPPINGS.md` - Figma → props mapping reference
- `PUBLISH_TOKENS.md` - Token publishing guide
- `figma to code pipeline.md` - Architecture and session log

[1.0.3]: https://github.com/Brad-Green/fdb-ui-components/releases/tag/v1.0.3
[1.0.1]: https://github.com/Brad-Green/fdb-ui-components/releases/tag/v1.0.1
[1.0.0]: https://github.com/Brad-Green/fdb-ui-components/releases/tag/v1.0.0
