import { spawnSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const TOKENS_URL =
  "https://raw.githubusercontent.com/Brad-Green/FDB-Design-Tokens/refs/heads/main/fdb-design-tokens.json"
const TOKENS_URL_FALLBACK =
  "https://github.com/Brad-Green/FDB-Design-Tokens/raw/refs/heads/main/fdb-design-tokens.json"

const tokensPath = path.join(__dirname, "..", "tokens", "tokens.json")

fs.mkdirSync(path.dirname(tokensPath), { recursive: true })

function run(cmd, args, options = {}) {
  const res = spawnSync(cmd, args, {
    stdio: "inherit",
    shell: false,
    ...options,
  })
  if (typeof res.status === "number" && res.status !== 0) {
    process.exit(res.status)
  }
}

if (process.platform === "win32") {
  // Windows networks (proxy/certs) can cause schannel/IWR failures. We try multiple strategies:
  // 1) Node fetch (often works even when schannel/curl doesn't)
  // 2) PowerShell BITS transfer (proxy-friendly on many enterprise setups)
  // 3) PowerShell Invoke-WebRequest with TLS12 + retries
  let fetched = false
  for (const url of [process.env.FDB_TOKENS_URL, TOKENS_URL, TOKENS_URL_FALLBACK].filter(
    Boolean
  )) {
    try {
      const res = await fetch(url, { redirect: "follow" })
      if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`)
      const buf = Buffer.from(await res.arrayBuffer())
      fs.writeFileSync(tokensPath, buf)
      fetched = true
      break
    } catch {
      // Continue to other strategies below
    }
  }

  if (!fetched) {
    const outFile = tokensPath.replace(/'/g, "''")
    const urls = [process.env.FDB_TOKENS_URL, TOKENS_URL, TOKENS_URL_FALLBACK]
      .filter(Boolean)
      .map((u) => `'${String(u).replace(/'/g, "''")}'`)
      .join(", ")

    const ps = [
      "$ErrorActionPreference = 'Stop';",
      "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12;",
      `$urls = @(${urls});`,
      "$max = 4;",
      "$delay = 2;",
      "foreach ($u in $urls) {",
      "  for ($i = 1; $i -le $max; $i++) {",
      "    try {",
      // Try BITS first (often succeeds where IWR fails)
      `      try { Start-BitsTransfer -Source $u -Destination '${outFile}' -ErrorAction Stop } catch {`,
      `        Invoke-WebRequest -Uri $u -OutFile '${outFile}' -ErrorAction Stop`,
      "      }",
      "      $u = $null; break;",
      "    } catch {",
      "      if ($i -eq $max) { break }",
      "      Start-Sleep -Seconds $delay;",
      "      $delay = [Math]::Min($delay * 2, 15);",
      "    }",
      "  }",
      "  if (Test-Path -LiteralPath " + `'${outFile}'` + ") { break }",
      "}",
      `if (-not (Test-Path -LiteralPath '${outFile}')) { throw 'Failed to download tokens JSON from all sources.' }`,
    ].join(" ")

    run("powershell.exe", ["-NoProfile", "-Command", ps])
  }
} else {
  const url = process.env.FDB_TOKENS_URL ?? TOKENS_URL
  const res = await fetch(url)
  if (!res.ok) {
    console.error(`Failed to download tokens: ${res.status} ${res.statusText}`)
    process.exit(1)
  }
  const buf = Buffer.from(await res.arrayBuffer())
  fs.writeFileSync(tokensPath, buf)
}

// Apply reference fixes / cleanup after sync.
run("node", [path.join(__dirname, "fix-tokens.js")], {
  cwd: path.join(__dirname),
})

