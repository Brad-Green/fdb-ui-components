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

3) **Publish to your internal registry**

Run publish from `packages/tokens`:

```bash
pnpm -C packages/tokens publish --registry "https://npm.pkg.github.com"
```

Notes:

- Keep publishes **restricted/private** within your org, using your registry’s access controls.
- `dist/` should be generated during publish time; it is **not intended to be committed** in git.

## Consumer `.npmrc` example (scope mapping)

Add this to your consumer repo’s `.npmrc` (or a shared org template). Replace `@fdb` with your actual GitHub org/user scope if different.

```ini
@brad-green:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
always-auth=true
```

## Recommended next automation (later)

When you’re ready, automate publishing with CI:

- on merge/tag to your tokens source-of-truth, run `tokens:build` and publish a new `@brad-green/tokens` version
- use Renovate/Dependabot to open PRs bumping `@brad-green/tokens` in downstream repos

