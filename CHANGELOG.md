# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
- `PHASE5_MAPPINGS.md` - Figma → props mapping reference
- `PUBLISH_TOKENS.md` - Token publishing guide
- `figma to code pipeline.md` - Architecture and session log

[1.0.0]: https://github.com/Brad-Green/fdb-ui-components/releases/tag/v1.0.0
