import StyleDictionary from "style-dictionary"
import { register } from "@tokens-studio/sd-transforms"

// Register Tokens Studio transforms
register(StyleDictionary)

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n))
}

StyleDictionary.registerFilter({
  name: "fdb/valid-css-custom-properties",
  filter: (token) => {
    // Drop tokens that would generate invalid CSS custom properties.
    //
    // This repo treats the Tokens Studio JSON as source-of-truth, but not all
    // token entries are valid as CSS custom properties when using the stock
    // Style Dictionary `css/variables` formatter (e.g. tokens with names that
    // start with digits, or values that still contain "{...}" reference strings).
    //
    // Example invalid output we intentionally prevent:
    //   --5xl: {absolute.16};
    //   --font-family-body: {font definitions.font-family-sans};
    const name = token?.name
    const value = token?.value

    if (typeof name === "string" && /^[0-9]/.test(name)) return false
    if (typeof value === "string" && value.includes("{")) return false
    return true
  },
})

StyleDictionary.registerFilter({
  name: "fdb/shadcn-theme-inputs",
  filter: (token) => {
    // The shadcn theme bridge only needs semantic colors + raw palette colors (for dark fallback)
    // plus a single radius token.
    const name = token?.name
    if (typeof name !== "string") return false
    return (
      name.startsWith("semanticColorsFdb") ||
      name.startsWith("rawColorsMode1") ||
      name === "borderRadiiFdbAbsoluteRadius8"
    )
  },
})

function hexToRgb(hex) {
  const cleaned = hex.replace("#", "").trim()
  if (cleaned.length === 3) {
    const r = parseInt(cleaned[0] + cleaned[0], 16)
    const g = parseInt(cleaned[1] + cleaned[1], 16)
    const b = parseInt(cleaned[2] + cleaned[2], 16)
    return { r, g, b, a: 1 }
  }
  if (cleaned.length === 6) {
    const r = parseInt(cleaned.slice(0, 2), 16)
    const g = parseInt(cleaned.slice(2, 4), 16)
    const b = parseInt(cleaned.slice(4, 6), 16)
    return { r, g, b, a: 1 }
  }
  if (cleaned.length === 8) {
    const r = parseInt(cleaned.slice(0, 2), 16)
    const g = parseInt(cleaned.slice(2, 4), 16)
    const b = parseInt(cleaned.slice(4, 6), 16)
    const a = parseInt(cleaned.slice(6, 8), 16) / 255
    return { r, g, b, a }
  }
  return null
}

// Returns Tailwind-friendly HSL channels string: "H S% L%"
function rgbToHslChannels({ r, g, b }) {
  let rn = r / 255
  let gn = g / 255
  let bn = b / 255

  const max = Math.max(rn, gn, bn)
  const min = Math.min(rn, gn, bn)
  const delta = max - min

  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1))

    switch (max) {
      case rn:
        h = ((gn - bn) / delta) % 6
        break
      case gn:
        h = (bn - rn) / delta + 2
        break
      default:
        h = (rn - gn) / delta + 4
        break
    }

    h = h * 60
    if (h < 0) h += 360
  }

  const hInt = Math.round(h)
  const sPct = Math.round(clamp(s * 100, 0, 100))
  const lPct = Math.round(clamp(l * 100, 0, 100))

  return `${hInt} ${sPct}% ${lPct}%`
}

function valueToHslChannels(value) {
  if (typeof value !== "string") return null
  const v = value.trim()
  if (v.startsWith("rgba(") || v.startsWith("rgb(")) {
    // Supports:
    //  - rgba(r, g, b, a)
    //  - rgb(r, g, b)
    const m = v.match(/^rgba?\((.+)\)$/)
    if (!m) return null
    const parts = m[1]
      .split(",")
      .map((p) => p.trim())
      .filter(Boolean)
    if (parts.length < 3) return null
    const r = Number(parts[0])
    const g = Number(parts[1])
    const b = Number(parts[2])
    const a = parts.length >= 4 ? Number(parts[3]) : 1
    if (![r, g, b, a].every((n) => Number.isFinite(n))) return null
    const channels = rgbToHslChannels({ r, g, b })
    if (a >= 0.999) return channels
    const aPct = Math.round(clamp(a * 100, 0, 100))
    return `${channels} / ${aPct}%`
  }
  if (v.startsWith("#")) {
    const rgb = hexToRgb(v)
    if (!rgb) return null
    const channels = rgbToHslChannels(rgb)
    const a = typeof rgb.a === "number" ? rgb.a : 1
    if (a >= 0.999) return channels
    const aPct = Math.round(clamp(a * 100, 0, 100))
    return `${channels} / ${aPct}%`
  }
  return null
}

function byName(dictionary, name) {
  return dictionary.allTokens.find((t) => t.name === name) ?? null
}

StyleDictionary.registerFormat({
  name: "fdb/shadcn-theme",
  format: function ({ dictionary }) {
    // Light theme: use FDB semantic tokens where available
    const light = {
      background: byName(dictionary, "semanticColorsFdbGeneralBackground")?.value,
      foreground: byName(dictionary, "semanticColorsFdbGeneralForeground")?.value,
      primary: byName(dictionary, "semanticColorsFdbGeneralPrimary")?.value,
      primaryForeground: byName(dictionary, "semanticColorsFdbGeneralPrimaryForeground")?.value,
      primaryHover: byName(dictionary, "semanticColorsFdbUnofficialPrimaryHover")?.value,
      secondary: byName(dictionary, "semanticColorsFdbGeneralSecondary")?.value,
      secondaryForeground: byName(dictionary, "semanticColorsFdbGeneralSecondaryForeground")?.value,
      secondaryHover: byName(dictionary, "semanticColorsFdbUnofficialSecondaryHover")?.value,
      muted: byName(dictionary, "semanticColorsFdbGeneralMuted")?.value,
      mutedForeground: byName(dictionary, "semanticColorsFdbGeneralMutedForeground")?.value,
      accent: byName(dictionary, "semanticColorsFdbGeneralAccent")?.value,
      accentForeground: byName(dictionary, "semanticColorsFdbGeneralAccentForeground")?.value,
      ghostHover: byName(dictionary, "semanticColorsFdbUnofficialGhostHover")?.value,
      outlineHover: byName(dictionary, "semanticColorsFdbUnofficialOutlineHover")?.value,
      destructive: byName(dictionary, "semanticColorsFdbGeneralDestructive")?.value,
      destructiveBorder: byName(dictionary, "semanticColorsFdbUnofficialDestructiveBorder")?.value,
      // Destructive buttons need a light foreground in light mode.
      // Prefer an explicit white token (matches shadcn defaults).
      destructiveForeground:
        byName(dictionary, "rawColorsMode1White")?.value ??
        byName(dictionary, "semanticColorsFdbGeneralPrimaryForeground")?.value,
      border: byName(dictionary, "semanticColorsFdbGeneralBorder")?.value,
      // shadcn's `--input` is the default control border/track color, not the input background.
      // Prefer the FDB "unofficial" border level used for form controls; fall back to general border.
      input:
        byName(dictionary, "semanticColorsFdbUnofficialBorder3")?.value ??
        byName(dictionary, "semanticColorsFdbGeneralBorder")?.value,
      ring: byName(dictionary, "semanticColorsFdbFocusRing")?.value,
      ringError: byName(dictionary, "semanticColorsFdbFocusRingError")?.value,
      backdrop: byName(dictionary, "semanticColorsFdbUnofficialBackdrop")?.value,
      card: byName(dictionary, "semanticColorsFdbCardCard")?.value,
      cardForeground: byName(dictionary, "semanticColorsFdbCardCardForeground")?.value,
      // Figma/Obra "popover" surfaces (menus, dropdowns, selects) are light in the design system.
      // The source token set currently defines `semanticColorsFdbPopoverPopover` as black, which
      // makes all `bg-popover` surfaces render dark in light mode. For the shadcn bridge, treat
      // popovers as elevated surfaces that match card/background in light mode.
      popover:
        byName(dictionary, "semanticColorsFdbCardCard")?.value ??
        byName(dictionary, "semanticColorsFdbGeneralBackground")?.value,
      popoverForeground:
        byName(dictionary, "semanticColorsFdbCardCardForeground")?.value ??
        byName(dictionary, "semanticColorsFdbGeneralForeground")?.value,
    }

    // Dark theme: FDB dark semantic set isn't present; derive from raw palette tokens
    const dark = {
      background: byName(dictionary, "rawColorsMode1Slate950")?.value,
      foreground: byName(dictionary, "rawColorsMode1Slate50")?.value,
      primary: byName(dictionary, "semanticColorsFdbGeneralPrimary")?.value,
      primaryForeground: byName(dictionary, "rawColorsMode1Slate50")?.value,
      primaryHover: byName(dictionary, "semanticColorsFdbUnofficialPrimaryHover")?.value,
      secondary: byName(dictionary, "rawColorsMode1Slate900")?.value,
      secondaryForeground: byName(dictionary, "rawColorsMode1Slate50")?.value,
      secondaryHover: byName(dictionary, "semanticColorsFdbUnofficialSecondaryHover")?.value,
      muted: byName(dictionary, "rawColorsMode1Slate900")?.value,
      mutedForeground: byName(dictionary, "rawColorsMode1Slate300")?.value,
      accent: byName(dictionary, "rawColorsMode1Slate900")?.value,
      accentForeground: byName(dictionary, "rawColorsMode1Slate50")?.value,
      ghostHover: byName(dictionary, "semanticColorsFdbUnofficialGhostHover")?.value,
      outlineHover: byName(dictionary, "semanticColorsFdbUnofficialOutlineHover")?.value,
      destructive: byName(dictionary, "rawColorsMode1Red900")?.value,
      destructiveBorder: byName(dictionary, "semanticColorsFdbUnofficialDestructiveBorder")?.value,
      destructiveForeground: byName(dictionary, "rawColorsMode1Slate50")?.value,
      border: byName(dictionary, "rawColorsMode1Slate900")?.value,
      input: byName(dictionary, "rawColorsMode1Slate900")?.value,
      ring: byName(dictionary, "rawColorsMode1Slate300")?.value,
      ringError: byName(dictionary, "rawColorsMode1Red300")?.value,
      backdrop: byName(dictionary, "semanticColorsFdbUnofficialBackdrop")?.value,
      card: byName(dictionary, "rawColorsMode1Slate950")?.value,
      cardForeground: byName(dictionary, "rawColorsMode1Slate50")?.value,
      popover: byName(dictionary, "rawColorsMode1Slate950")?.value,
      popoverForeground: byName(dictionary, "rawColorsMode1Slate50")?.value,
    }

    const radiusPx = byName(dictionary, "borderRadiiFdbAbsoluteRadius8")?.value

    function emitRoot(vars) {
      const lines = []
      const pairs = [
        ["--background", vars.background],
        ["--foreground", vars.foreground],
        ["--primary", vars.primary],
        ["--primary-foreground", vars.primaryForeground],
        ["--primary-hover", vars.primaryHover],
        ["--secondary", vars.secondary],
        ["--secondary-foreground", vars.secondaryForeground],
        ["--secondary-hover", vars.secondaryHover],
        ["--muted", vars.muted],
        ["--muted-foreground", vars.mutedForeground],
        ["--accent", vars.accent],
        ["--accent-foreground", vars.accentForeground],
        ["--ghost-hover", vars.ghostHover],
        ["--outline-hover", vars.outlineHover],
        ["--destructive", vars.destructive],
        ["--destructive-border", vars.destructiveBorder],
        ["--destructive-foreground", vars.destructiveForeground ?? vars.foreground],
        ["--border", vars.border],
        ["--input", vars.input],
        ["--ring", vars.ring],
        ["--ring-error", vars.ringError],
        ["--backdrop", vars.backdrop],
        ["--card", vars.card],
        ["--card-foreground", vars.cardForeground],
        ["--popover", vars.popover],
        ["--popover-foreground", vars.popoverForeground],
      ]

      for (const [cssVar, tokenValue] of pairs) {
        const hsl = valueToHslChannels(tokenValue)
        if (hsl) lines.push(`    ${cssVar}: ${hsl};`)
      }

      if (typeof radiusPx === "number") {
        lines.push(`    --radius: ${radiusPx}px;`)
      } else if (typeof radiusPx === "string" && radiusPx.trim() !== "") {
        // tokens-studio emits radii as unitless numbers; assume px
        const n = Number(radiusPx)
        if (Number.isFinite(n)) lines.push(`    --radius: ${n}px;`)
      }

      return lines
    }

    const out = []
    out.push("@layer base {")
    out.push("  :root {")
    out.push(...emitRoot(light))
    out.push("  }")
    out.push("")
    out.push("  .dark {")
    out.push(...emitRoot(dark))
    out.push("  }")
    out.push("}")
    out.push("")
    return out.join("\n")
  },
})

export default {
  source: ["tokens/tokens.json"],
  preprocessors: ["tokens-studio"],
  log: {
    verbosity: "default",
    warnings: "warn",
    errors: {
      brokenReferences: "disabled",
    },
  },
  platforms: {
    css: {
      transformGroup: "tokens-studio",
      buildPath: "dist/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          filter: "fdb/valid-css-custom-properties",
          options: {
            outputReferences: true,
          },
        },
        {
          destination: "shadcn-theme.css",
          format: "fdb/shadcn-theme",
          filter: "fdb/shadcn-theme-inputs",
        },
      ],
    },
  },
}


