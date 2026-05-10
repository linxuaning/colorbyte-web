#!/usr/bin/env node
/* eslint-disable */

// Pre-push / CI guard: scan all blog MD files for YAML frontmatter that
// doesn't parse. Catches the c39f671 incident class (zh-CN nested inline
// ASCII " inside double-quoted scalars) before push, not after Vercel build
// fails 4 min later.
//
// Exit 0 if all clean, exit 1 with file list if any broken.
//
// Usage:
//   node scripts/check-yaml-frontmatter.js
// Run automatically via:
//   git config core.hooksPath .githooks  (or add to CI)

const fs = require('fs');
const path = require('path');

let yaml;
try {
  yaml = require('js-yaml');
} catch (e) {
  // js-yaml is a project dep (Next.js / blog libs); fall back to gray-matter
  try {
    const matter = require('gray-matter');
    yaml = { load: (str) => matter(`---\n${str}\n---`).data };
  } catch (e2) {
    console.error('No YAML parser available (need js-yaml or gray-matter). Skipping check.');
    process.exit(0);
  }
}

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, results);
    else if (entry.name.endsWith('.md')) results.push(full);
  }
  return results;
}

const ROOT = path.join(__dirname, '..', 'src', 'content', 'blog');
if (!fs.existsSync(ROOT)) {
  console.error(`blog dir not found: ${ROOT}`);
  process.exit(2);
}

const files = walk(ROOT);
console.log(`Scanning ${files.length} MD files...`);

const broken = [];
for (const fp of files) {
  const text = fs.readFileSync(fp, 'utf8');
  const parts = text.split('---');
  if (parts.length < 3) continue; // no frontmatter
  const fm = parts[1];
  try {
    yaml.load(fm);
  } catch (e) {
    broken.push({ file: path.relative(process.cwd(), fp), error: String(e).slice(0, 200) });
  }
}

if (broken.length === 0) {
  console.log('✅ All YAML frontmatter parses cleanly.');
  process.exit(0);
}

console.error(`❌ ${broken.length} files have YAML frontmatter errors:`);
for (const b of broken) {
  console.error(`  - ${b.file}`);
  console.error(`      ${b.error.replace(/\n/g, ' ')}`);
}
console.error('\nFix: replace ASCII "..." inside double-quoted YAML scalars with 「...」');
console.error('or escape: \\"...\\". Run scripts/fix-yaml-frontmatter.py for auto-fix.');
process.exit(1);
