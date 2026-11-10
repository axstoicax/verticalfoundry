#!/usr/bin/env bash
# Post-deploy smoke test. Requires curl. User-Agent strings are diagnostic only;
# this does not authenticate or guarantee access by the real search engines.
set -euo pipefail
SITE="${1:-https://getverticalfoundry.com}"
SITE="${SITE%/}"

printf 'Checking public site: %s\n' "$SITE"
for path in '/' '/store/' '/robots.txt' '/sitemap.xml' '/llms.txt' '/llms-full.txt' '/agents.md' '/og-image.png' '/images/alexandru-stoica-founder.webp' '/logos/VerticalFoundry_Primary_Horizontal_OUTLINED.svg'; do
  code=$(curl -L -sS -o /dev/null -w '%{http_code}' --connect-timeout 10 --max-time 25 "${SITE}${path}")
  printf '%s %s\n' "$code" "$path"
  [[ "$code" == '200' ]] || { echo "ERROR: Not accessible: ${path}" >&2; exit 1; }
done

robots=$(curl -fsSL "${SITE}/robots.txt")
grep -Eq '^User-agent:[[:space:]]*\*$' <<< "$robots" || { echo 'ERROR: no wildcard user-agent' >&2; exit 1; }
grep -Eq '^Allow:[[:space:]]*/[[:space:]]*$' <<< "$robots" || { echo 'ERROR: no global allow' >&2; exit 1; }
if grep -Eiq '^[[:space:]]*Disallow[[:space:]]*:' <<< "$robots"; then echo 'ERROR: a Disallow directive is present' >&2; exit 1; fi
headers=$(curl -fsSIL "${SITE}/")
if grep -Eiq '^x-robots-tag:.*noindex' <<< "$headers"; then echo 'ERROR: X-Robots-Tag noindex' >&2; exit 1; fi
html=$(curl -fsSL "${SITE}/")
if grep -Eiq '<meta[^>]+noindex' <<< "$html"; then echo 'ERROR: meta robots noindex' >&2; exit 1; fi

for ua in 'Googlebot' 'Bingbot' 'GPTBot' 'OAI-SearchBot' 'ClaudeBot' 'PerplexityBot'; do
  code=$(curl -L -sS -A "$ua" -o /dev/null -w '%{http_code}' --connect-timeout 10 --max-time 25 "${SITE}/")
  printf 'UA %-20s %s\n' "$ua" "$code"
  [[ "$code" == '200' ]] || { echo "WARNING: $ua user-agent got HTTP $code" >&2; exit 1; }
done
printf 'PASS: Public responses and selected user-agent smoke checks. Review actual Vercel firewall logs and Google Search Console separately.\n'
