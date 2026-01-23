import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const tokensPath = path.join(__dirname, "..", "tokens", "tokens.json")

// Read the tokens file
const tokens = JSON.parse(fs.readFileSync(tokensPath, "utf8"))

// Fix typography tokens by replacing broken references with actual values
console.log("Fixing typography token references...")

// Extract typography values from typography/fdb section before it's removed
const typographyValues = {}
if (tokens["typography/fdb"]) {
  const typoSection = tokens["typography/fdb"]

  // Extract heading weights
  if (typoSection["heading 1"]?.weight?.value) {
    typographyValues["heading 1.weight"] = typoSection["heading 1"].weight.value
  }
  if (typoSection["heading 2"]?.weight?.value) {
    typographyValues["heading 2.weight"] = typoSection["heading 2"].weight.value
  }
  if (typoSection["heading 3"]?.["heading 3 weight"]?.value) {
    typographyValues["heading 3.weight"] =
      typoSection["heading 3"]["heading 3 weight"].value
  }
  if (typoSection["heading 4"]?.weight?.value) {
    typographyValues["heading 4.weight"] = typoSection["heading 4"].weight.value
  }

  // Extract paragraph weights
  if (typoSection.paragraph?.["paragraph-weight"]?.value) {
    typographyValues["paragraph.paragraph-weight"] =
      typoSection.paragraph["paragraph-weight"].value
  }
  if (typoSection.paragraph?.["paragraph-medium-weight"]?.value) {
    typographyValues["paragraph.paragraph-medium-weight"] =
      typoSection.paragraph["paragraph-medium-weight"].value
  }
  if (typoSection.paragraph?.["paragraph-bold-weight"]?.value) {
    typographyValues["paragraph.paragraph-bold-weight"] =
      typoSection.paragraph["paragraph-bold-weight"].value
  }

  // Extract monospaced weight
  if (typoSection.monospaced?.["font-weight"]?.value) {
    typographyValues["monospaced.font-weight"] =
      typoSection.monospaced["font-weight"].value
  }

  console.log("Extracted typography values:", typographyValues)
}

// Now fix the typography tokens in "raw colors/Mode 1"
function fixTypographyReferences(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      if (obj[key].value && typeof obj[key].value === "object") {
        // This is a composite token (like typography)
        const value = obj[key].value

        // Fix fontWeight references
        if (
          value.fontWeight &&
          typeof value.fontWeight === "string" &&
          value.fontWeight.startsWith("{")
        ) {
          const ref = value.fontWeight.slice(1, -1) // Remove { and }
          if (typographyValues[ref]) {
            value.fontWeight = typographyValues[ref]
            console.log(`Fixed reference: ${ref} -> ${typographyValues[ref]}`)
          }
        }
      }
      fixTypographyReferences(obj[key])
    }
  }
}

// Remove composite typography tokens from "raw colors/Mode 1" as they can't be converted to CSS
if (tokens["raw colors/Mode 1"]) {
  const typographyTokensToRemove = [
    "heading 1",
    "heading 2",
    "heading 3",
    "heading 4",
    "monospaced",
    "paragraph",
    "paragraph small",
    "paragraph mini",
  ]

  typographyTokensToRemove.forEach((token) => {
    if (tokens["raw colors/Mode 1"][token]) {
      delete tokens["raw colors/Mode 1"][token]
      console.log(`Removed composite token: raw colors/Mode 1.${token}`)
    }
  })
}

console.log(
  "\nKeeping individual typography property tokens from typography/fdb and typography/shadcn sections..."
)

// Fix broken references by adding the proper path prefix
function fixReferences(obj, currentPath = []) {
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      if (obj[key].value && typeof obj[key].value === "string") {
        // Fix references that don't have the full path
        const value = obj[key].value

        // Some token sets contain short refs like:
        //   {absolute.16} or {absolute.radius-8} or {font definitions.font-family-sans}
        // These need a fully-qualified path for Style Dictionary to resolve them.
        let scopedValue = value
        const root = currentPath[0] // e.g. "spacing/fdb", "border radii/fdb", "typography/fdb"

        // Typography font-family aliases
        if (scopedValue.includes("{font definitions.")) {
          if (root === "typography/fdb") {
            scopedValue = scopedValue.replace(
              /\{font definitions\./g,
              "{typography/fdb.font definitions."
            )
          } else if (root === "typography/shadcn") {
            scopedValue = scopedValue.replace(
              /\{font definitions\./g,
              "{typography/shadcn.font definitions."
            )
          }
        }

        // Spacing semantic aliases -> spacing/<set>.absolute.*
        if (scopedValue.includes("{absolute.") && (root === "spacing/fdb" || root === "spacing/shadcn")) {
          scopedValue = scopedValue.replace(/\{absolute\./g, `{${root}.absolute.`)
        }

        // Border radii semantic aliases -> border radii/<set>.absolute.*
        if (
          scopedValue.includes("{absolute.") &&
          (root === "border radii/fdb" || root === "border radii/shadcn")
        ) {
          scopedValue = scopedValue.replace(/\{absolute\./g, `{${root}.absolute.`)
        }

        // Map of short references to full paths
        const referenceMap = {
          "{white}": "{raw colors/Mode 1.white}",
          "{black}": "{raw colors/Mode 1.black}",
          "{slate.": "{raw colors/Mode 1.slate.",
          "{gray.": "{raw colors/Mode 1.gray.",
          "{red.": "{raw colors/Mode 1.red.",
          "{orange.": "{raw colors/Mode 1.orange.",
          "{amber.": "{raw colors/Mode 1.amber.",
          "{yellow.": "{raw colors/Mode 1.yellow.",
          "{lime.": "{raw colors/Mode 1.lime.",
          "{green.": "{raw colors/Mode 1.green.",
          "{emerald.": "{raw colors/Mode 1.emerald.",
          "{teal.": "{raw colors/Mode 1.teal.",
          "{cyan.": "{raw colors/Mode 1.cyan.",
          "{sky.": "{raw colors/Mode 1.sky.",
          "{blue.": "{raw colors/Mode 1.blue.",
          "{indigo.": "{raw colors/Mode 1.indigo.",
          "{violet.": "{raw colors/Mode 1.violet.",
          "{purple.": "{raw colors/Mode 1.purple.",
          "{fuchsia.": "{raw colors/Mode 1.fuchsia.",
          "{pink.": "{raw colors/Mode 1.pink.",
          "{rose.": "{raw colors/Mode 1.rose.",
          "{neutral.": "{raw colors/Mode 1.neutral.",
          "{fdb official.": "{raw colors/Mode 1.fdb official.",
        }

        let newValue = scopedValue
        for (const [shortRef, fullRef] of Object.entries(referenceMap)) {
          if (newValue.includes(shortRef)) {
            newValue = newValue.replace(shortRef, fullRef)
          }
        }

        if (newValue !== value) {
          obj[key].value = newValue
        }
      }
      fixReferences(obj[key], [...currentPath, key])
    }
  }
}

console.log("\nFixing broken references...")
fixReferences(tokens)

// Write the fixed tokens back
fs.writeFileSync(tokensPath, JSON.stringify(tokens, null, 2))
console.log("\n✅ Tokens file fixed successfully!")


