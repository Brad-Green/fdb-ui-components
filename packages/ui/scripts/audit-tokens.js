#!/usr/bin/env node

/**
 * Token Audit Script
 * 
 * Scans component source files for:
 * - Hardcoded hex/rgb colors
 * - Tailwind color scale utilities (slate-500, gray-600, etc.)
 * - Arbitrary bracket values (p-[16px], bg-[#fff])
 * 
 * Run: node scripts/audit-tokens.js
 * Or:  pnpm tokens:audit
 */

import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { glob } from "glob"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Patterns that indicate token violations
const VIOLATION_PATTERNS = [
  // Hardcoded hex colors
  {
    pattern: /#[0-9a-fA-F]{3,8}\b/g,
    name: "Hardcoded hex color",
    suggestion: "Use semantic token (bg-primary, text-foreground, etc.)",
  },
  // Hardcoded rgb/rgba
  {
    pattern: /rgba?\([^)]+\)/g,
    name: "Hardcoded rgb/rgba color",
    suggestion: "Use semantic token",
  },
  // Tailwind color scales (should use semantic tokens)
  {
    pattern: /\b(bg|text|border|ring|from|to|via)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d+/g,
    name: "Tailwind color scale",
    suggestion: "Use semantic token (bg-primary, text-muted-foreground, etc.)",
  },
  // Arbitrary bracket values for colors
  {
    pattern: /\b(bg|text|border|ring)-\[#[^\]]+\]/g,
    name: "Arbitrary color value",
    suggestion: "Use semantic token",
  },
  // Arbitrary pixel values (except common exceptions)
  {
    pattern: /\b(p|m|w|h|gap|space|top|right|bottom|left)-\[\d+px\]/g,
    name: "Arbitrary pixel value",
    suggestion: "Use Tailwind spacing scale (p-4, w-80, etc.)",
  },
]

// Patterns that are acceptable exceptions
const EXCEPTIONS = [
  // Focus ring colors are often needed
  /ring-primary/,
  /ring-ring/,
  /ring-destructive/,
  // Hover states on primitives (when semantic doesn't have hover)
  /hover:(bg|text|border)-primary-\d+/,
  // Focus-visible patterns
  /focus-visible:ring/,
  // Comments and documentation
  /\/\/.*#[0-9a-fA-F]/,
  /\/\*[\s\S]*?#[0-9a-fA-F][\s\S]*?\*\//,
  // Import statements
  /from\s+["'][^"']+["']/,
  // String literals that might contain colors for documentation
  /["'].*#[0-9a-fA-F].*["']/,
]

// Files/directories to skip
const SKIP_PATTERNS = [
  /node_modules/,
  /\.figma\.(ts|tsx|js|jsx)$/, // Code Connect files may have examples
  /dist/,
  /build/,
]

function shouldSkipFile(filePath) {
  return SKIP_PATTERNS.some((pattern) => pattern.test(filePath))
}

function isException(line, match) {
  return EXCEPTIONS.some((exception) => exception.test(line))
}

function auditFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8")
  const lines = content.split("\n")
  const issues = []

  lines.forEach((line, lineIndex) => {
    VIOLATION_PATTERNS.forEach(({ pattern, name, suggestion }) => {
      // Reset regex lastIndex for global patterns
      pattern.lastIndex = 0
      
      let match
      while ((match = pattern.exec(line)) !== null) {
        // Skip if it's an exception
        if (isException(line, match[0])) continue

        issues.push({
          file: filePath,
          line: lineIndex + 1,
          column: match.index + 1,
          match: match[0],
          type: name,
          suggestion,
          context: line.trim().substring(0, 100),
        })
      }
    })
  })

  return issues
}

async function main() {
  const srcDir = path.join(__dirname, "..", "src")
  
  // Find all TypeScript/JavaScript files in src/components
  const files = await glob("components/**/*.{ts,tsx,js,jsx}", {
    cwd: srcDir,
    absolute: false,
  })

  let allIssues = []

  for (const file of files) {
    const fullPath = path.join(srcDir, file)
    
    if (shouldSkipFile(fullPath)) continue
    
    const issues = auditFile(fullPath)
    allIssues = allIssues.concat(issues)
  }

  // Report results
  if (allIssues.length === 0) {
    console.log("\n✅ Token audit passed! No violations found.\n")
    console.log("All components use semantic design tokens correctly.\n")
    process.exit(0)
  }

  console.log(`\n⚠️  Token Audit: Found ${allIssues.length} violation(s)\n`)

  // Group by file
  const byFile = allIssues.reduce((acc, issue) => {
    if (!acc[issue.file]) acc[issue.file] = []
    acc[issue.file].push(issue)
    return acc
  }, {})

  // Print grouped results
  Object.entries(byFile).forEach(([file, issues]) => {
    const relativePath = path.relative(path.join(__dirname, ".."), file)
    console.log(`\n📄 ${relativePath}`)
    console.log("─".repeat(60))
    
    issues.forEach((issue) => {
      console.log(`  Line ${issue.line}: ${issue.type}`)
      console.log(`  Found: ${issue.match}`)
      console.log(`  → ${issue.suggestion}`)
      console.log(`  Context: ${issue.context}`)
      console.log()
    })
  })

  console.log("\n💡 Resources:")
  console.log("  - See AGENTS.md for styling rules")
  console.log("  - See COMPONENT_MAPPINGS.md for token reference")
  console.log("  - Run 'pnpm tokens:build' after adding new tokens\n")

  process.exit(1)
}

main().catch((err) => {
  console.error("Audit script error:", err)
  process.exit(1)
})
