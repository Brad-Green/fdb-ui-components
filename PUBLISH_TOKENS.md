# Publish `@brad-green/tokens` (GitHub Packages)

This repo’s intended strategy is to distribute design tokens via **GitHub Packages (npm registry)** so consumers can install:

```bash
pnpm add @brad-green/tokens
```

and import:

```css
@import "@brad-green/tokens/dist/tokens.css";
@import "@brad-green/tokens/dist/shadcn-theme.css";
```

## Important GitHub Packages constraint (npm scope)

For GitHub Packages (npm), the **package scope must match your GitHub user/org**. In practice:

- If your GitHub org/user is `Brad-Green`, publish as `@brad-green/tokens` (recommended on GitHub Packages).
- If your GitHub org/user is something else, publish as `@<YOUR_GITHUB_ORG>/tokens`, or use a registry that allows arbitrary scopes (Nexus/Artifactory), or accept a different package name and update imports/docs accordingly.

For publishing from a GitHub user account `Brad-Green`, the scope must match the username (lowercased), so this repo assumes `@brad-green/tokens`.

## One-time setup (GitHub Packages)

- **Registry**: `https://npm.pkg.github.com`
- **Configure auth + scope mapping** for all consumers via `.npmrc` (example below).
- Ensure `packages/tokens/package.json` is publishable:
  - `"name": "@brad-green/tokens"`
  - `"private": false`
  - `"files"` includes `dist/` (and ideally the README).
  - Recommended: add `publishConfig.registry` (this repo will do that).

## Auth (who needs what)

- **Publishing**: a PAT with `write:packages` (and `read:packages`), plus repository access.
- **Consuming**: a PAT with `read:packages` (and repository access if the package is private).

## Manual publish (human-driven)

## Release checklist (copy/paste)

Use this sequence for each release.

1) **Ensure auth is available in this terminal**

- `GITHUB_TOKEN` must be set (PAT with at least `write:packages` + `read:packages`).

2) **Bump version**

- Edit `packages/tokens/package.json` `"version"` (semver).

3) **Sync + build tokens (from repo root)**

```bash
pnpm install
pnpm --filter @brad-green/tokens tokens:sync
pnpm --filter @brad-green/tokens tokens:build
```

4) **Publish (from tokens package folder)**

```bash
cd packages/tokens
pnpm publish --registry "https://npm.pkg.github.com" --access public --no-git-checks
```

5) **Smoke test install (from any other folder)**

```bash
mkdir -p /tmp/tokens-smoke-test && cd /tmp/tokens-smoke-test
pnpm init
pnpm add @brad-green/tokens
```

Then confirm the artifacts exist:

```bash
ls node_modules/@brad-green/tokens/dist
```

### Windows (PowerShell) smoke test

```powershell
$testDir = "C:\temp\tokens-smoke-test"
Remove-Item -Recurse -Force $testDir -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Force $testDir | Out-Null
Set-Location $testDir

# pnpm init doesn't support -y; use npm for non-interactive init
npm init -y | Out-Null
pnpm add @brad-green/tokens

Get-ChildItem ".\node_modules\@brad-green\tokens\dist" | Format-Table Name, Length
```

1) **Build the artifacts**

From repo root:

```bash
pnpm install
pnpm --filter @brad-green/tokens tokens:build
```

Optionally refresh the source JSON first:

```bash
pnpm --filter @brad-green/tokens tokens:sync
pnpm --filter @brad-green/tokens tokens:build
```

2) **Bump the version**

Update `packages/tokens/package.json` `"version"` using semver:

- **patch**: safe token tweaks (no contract breaks)
- **minor**: additive tokens / new semantics
- **major**: breaking token contract changes (renames/removals or meaning changes)

3) **Publish to GitHub Packages**

Run publish from `packages/tokens`:

```bash
cd packages/tokens
pnpm publish --registry "https://npm.pkg.github.com" --access public --no-git-checks
```

Notes:

- If you want this package to be public, publish with `--access public` (as shown above).
- If you want this package to be private, publish with `--access restricted` and ensure consumers have access + `read:packages`.
- `dist/` should be generated during publish time; it is **not intended to be committed** in git.

## Consumer `.npmrc` example (scope mapping)

Add this to your consumer repo’s `.npmrc` (or your user-level `~/.npmrc`) so installs from GitHub Packages can authenticate.

```ini
@brad-green:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

## Recommended next automation (later)

When you’re ready, automate publishing with CI:

- on merge/tag to your tokens source-of-truth, run `tokens:build` and publish a new `@brad-green/tokens` version
- use Renovate/Dependabot to open PRs bumping `@brad-green/tokens` in downstream repos

