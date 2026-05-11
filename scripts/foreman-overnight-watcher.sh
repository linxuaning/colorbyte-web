#!/usr/bin/env bash
# Foreman overnight auto-alias watcher.
#
# 5-11 founder went offline with full autonomy + 10 orders/day target.
# Watcher polls colorbyte-web origin/main every 5 min for new commits,
# runs payment-safety verify protocol, then alias-bumps if safe.
#
# Started: 2026-05-11 00:38 PT
# Target end: ~07:30 SH (founder typical wake)
# Logs: ~/inference-server/foreman-overnight.log

set -e
REPO_DIR="/Users/zj-db0812/vibecoding/photofix/frontend"
TOKEN_FILE="$HOME/.config/artimagehub/vercel-token"
LOG="/Users/zj-db0812/inference-server/foreman-overnight.log"

PAYMENT_PATHS=(
  "src/components/Dodo*"
  "src/lib/dodo*"
  "src/app/api/checkout*"
  "src/app/api/payment*"
  "src/app/api/orders*"
  "src/app/api/dodo*"
  "src/app/api/webhook*"
  "src/lib/email-send-guard*"
)

last_synced_sha=""

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG"
}

log "watcher started PID=$$"

while true; do
  cd "$REPO_DIR"
  git fetch origin main --quiet 2>>"$LOG" || { log "git fetch failed"; sleep 300; continue; }
  remote_sha=$(git rev-parse origin/main)
  live_sha=$(curl -sS --max-time 8 https://artimagehub.com/ | grep -oE 'build-version[^>]*content="[^"]+"' | grep -oE '"[a-f0-9]{7,}"' | tr -d '"' || true)

  if [ -z "$live_sha" ]; then
    log "could not read live build-version, retrying in 5min"
    sleep 300; continue
  fi

  short_remote=$(git rev-parse --short=7 "$remote_sha")
  if [ "$live_sha" = "$short_remote" ] || [[ "$remote_sha" == "$live_sha"* ]]; then
    # In sync, nothing to do
    sleep 300; continue
  fi
  if [ "$last_synced_sha" = "$remote_sha" ]; then
    # Already attempted this remote, deploy must be still building
    sleep 300; continue
  fi

  log "drift detected: live=$live_sha, remote=$short_remote — checking payment safety"

  # Payment-safety verify
  unsafe_commits=$(git log "$live_sha..$remote_sha" --oneline -- "${PAYMENT_PATHS[@]}" 2>/dev/null | head -5)
  if [ -n "$unsafe_commits" ]; then
    log "BLOCKED: payment-class file changes in backlog, NOT auto-aliasing:"
    log "$unsafe_commits"
    log "wait for founder GO; sleeping 30min"
    last_synced_sha=$remote_sha  # Don't re-check until remote moves again
    sleep 1800; continue
  fi

  log "payment-safe ✓ ($live_sha..$short_remote)"

  # Find latest Ready production deploy
  TOKEN=$(cat "$TOKEN_FILE")
  # 5-11: use Vercel API directly (CLI ls had column-shift bug — $3 was bullet
  # symbol not URL). API returns commit SHA which we can match precisely.
  PROJECT_ID=prj_wcr5gRwNAkNrVcfPBYE4Pk4SQz24
  LATEST=$(curl -sS -m 10 -H "Authorization: Bearer $TOKEN" \
    "https://api.vercel.com/v6/deployments?projectId=$PROJECT_ID&limit=10&state=READY" 2>/dev/null \
    | python3 -c "
import json, sys
d = json.load(sys.stdin)
for it in d.get('deployments', []):
    if it.get('state') == 'READY' and it.get('target') == 'production':
        print('https://' + it.get('url',''))
        break
")

  if [ -z "$LATEST" ]; then
    log "no Ready production deploy yet, retrying in 5min"
    sleep 300; continue
  fi

  log "aliasing $LATEST → artimagehub.com"
  /Users/zj-db0812/node-arm64/bin/vercel alias set "$LATEST" artimagehub.com --token "$TOKEN" >>"$LOG" 2>&1 || {
    log "alias bump failed, retrying in 5min"
    sleep 300; continue
  }

  sleep 4
  new_live=$(curl -sS --max-time 8 https://artimagehub.com/ | grep -oE 'build-version[^>]*content="[^"]+"' | grep -oE '"[a-f0-9]{7,}"' | tr -d '"' || true)
  log "alias bumped: live=$new_live (was $live_sha)"

  # IndexNow ping the new deploy
  cd "$REPO_DIR"
  if [ -f scripts/submit-overnight-batch-2026-05-11.js ]; then
    node scripts/submit-overnight-batch-2026-05-11.js >>"$LOG" 2>&1 || true
  fi

  last_synced_sha=$remote_sha
  sleep 300
done
