#!/usr/bin/env python3
"""Auto-fix YAML frontmatter where inline ASCII " breaks double-quoted scalars.
Replaces inner " with Chinese corner brackets 「」 alternating open/close.

Usage:
  python3 scripts/fix-yaml-frontmatter.py [path1 path2 ...]
  # If no args: scans src/content/blog/**.md, fixes anything broken.
"""
import re, sys
from pathlib import Path

try:
    import yaml
except ImportError:
    print('FATAL: pip install pyyaml (or use system python3)', file=sys.stderr)
    sys.exit(2)

def fix_line(line):
    m = re.match(r'^(\s*(?:- )?\w[\w-]*:\s+)"(.*)"\s*$', line)
    if not m: return line
    prefix, value = m.groups()
    if '"' not in value: return line
    out, opening = [], True
    for ch in value:
        if ch == '"':
            out.append('「' if opening else '」'); opening = not opening
        else:
            out.append(ch)
    return f'{prefix}"{"".join(out)}"\n'

def parse_or_none(fm):
    try: yaml.safe_load(fm); return True
    except yaml.YAMLError: return False

def fix_file(fp):
    src = fp.read_text(encoding='utf-8')
    parts = src.split('---', 2)
    if len(parts) < 3: return None
    head, fm, body = parts
    if parse_or_none(fm): return False
    new_fm = ''.join(fix_line(l) for l in fm.splitlines(keepends=True))
    if not parse_or_none(new_fm):
        return None  # auto-fix didn't help
    fp.write_text(head + '---' + new_fm + '---' + body, encoding='utf-8')
    return True

def main():
    targets = [Path(a) for a in sys.argv[1:]] if len(sys.argv) > 1 else list(Path('src/content/blog').rglob('*.md'))
    fixed = bad = 0
    for fp in targets:
        if not fp.exists(): continue
        result = fix_file(fp)
        if result is True:
            fixed += 1; print(f'FIXED {fp}')
        elif result is None and not parse_or_none((fp.read_text().split('---',2)[1] if '---' in fp.read_text() else '')):
            bad += 1; print(f'UNFIXABLE {fp}')
    print(f'\nFixed {fixed}, unfixable {bad}')

if __name__ == '__main__':
    main()
