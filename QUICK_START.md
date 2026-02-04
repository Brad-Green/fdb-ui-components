# Quick Start & Verification Checklist

Use this checklist to quickly verify your environment is set up correctly.

## Prerequisites

- [ ] Node.js 20+ installed (`node --version`)
- [ ] pnpm installed (`pnpm --version`)
- [ ] Git configured
- [ ] (Optional) Figma account with Code Connect access

## First-Time Setup (5 minutes)

```bash
# 1. Clone and install
git clone https://github.com/Brad-Green/fdb-ui-components.git
cd fdb-ui-components/fdb-ui-components
pnpm install

# 2. Build tokens
pnpm tokens:build

# 3. Start dev server
pnpm dev
```

Open http://localhost:5173 - you should see the Component Gallery.

## Quick Verification Commands

| Command | Expected Result |
|---------|-----------------|
| `pnpm build` | Exit code 0, no errors |
| `pnpm lint` | Exit code 0, no warnings |
| `pnpm tokens:audit` | "Token audit passed" (or shows violations to fix) |

## Figma Code Connect Verification

### Setup (One-Time)

1. Get a Figma Personal Access Token:
   - Figma → Settings → Security → Personal access tokens
   - Scopes needed: `code_connect:write`

2. Set the token:
   ```bash
   # PowerShell
   $env:FIGMA_ACCESS_TOKEN = "your-token"
   
   # Bash
   export FIGMA_ACCESS_TOKEN="your-token"
   ```

### Dry-Run Test

```bash
pnpm codeconnect:dry-run
```

**Expected output:**
```
Parsing Code Connect files...
Found 60 Code Connect files
✓ All files parsed successfully
```

### Publish to Figma

```bash
pnpm codeconnect:publish
```

After publishing, open any component in Figma Dev Mode - you should see code snippets.

## Token Update Workflow

When design tokens change in Figma:

```bash
# 1. Pull latest tokens
pnpm tokens:sync

# 2. Rebuild CSS variables
pnpm tokens:build

# 3. Verify components still look correct
pnpm dev
```

## Adding a New Component

1. **Create component** in `packages/ui/src/components/ui/`
2. **Create Code Connect mapping** in `packages/ui/src/figma/`
3. **Add to ComponentGallery** in `packages/ui/src/dev/ComponentGallery.tsx`
4. **Run audit** to verify token compliance:
   ```bash
   pnpm tokens:audit
   ```
5. **Publish Code Connect**:
   ```bash
   pnpm codeconnect:publish
   ```

## Troubleshooting

### "Module not found" errors

```bash
pnpm install
pnpm tokens:build
```

### Styles look wrong / tokens not applied

```bash
pnpm tokens:build
# Then restart dev server
pnpm dev
```

### Code Connect dry-run fails

- Verify `FIGMA_ACCESS_TOKEN` is set
- Check token has `code_connect:write` scope
- Ensure you're in the correct directory (with `figma.config.json`)

### Token audit shows violations

The audit script found hardcoded values. Fix by:
1. Replace hex colors with semantic tokens (`bg-primary`, not `bg-[#672cbf]`)
2. Replace pixel values with Tailwind scale (`p-4`, not `p-[16px]`)
3. See `AGENTS.md` for token guidelines

## Key Documentation

| Document | Purpose |
|----------|---------|
| `AGENTS.md` | AI governance rules for code generation |
| `API_CONVENTIONS.md` | Component API standards |
| `COMPONENT_MAPPINGS.md` | Figma → props reference |
| `CONSUME_IN_APP.md` | How to use in consuming apps |
| `PUBLISH_TOKENS.md` | Publishing tokens to npm |

## Release Workflow

```bash
# 1. Bump version in packages/tokens/package.json
# 2. Commit and tag
git add -A
git commit -m "chore: bump tokens to vX.Y.Z"
git tag -a vX.Y.Z -m "vX.Y.Z - Description"
git push --follow-tags

# CI will auto-publish @brad-green/tokens
```
