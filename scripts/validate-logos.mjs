import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';

const root = new URL('../public/logos/', import.meta.url);
const manifest = JSON.parse(await readFile(new URL('./logo-manifest.json', import.meta.url), 'utf8'));
assert.equal(manifest.length, 6, 'Expected six official logos');
const geometry = [
  '0,15 22,15 40,100 0,100',
  '78,15 100,15 100,100 60,100',
  '32,0 68,0 50,85',
];
for (const entry of manifest) {
  const data = await readFile(new URL(entry.file, root));
  const svg = data.toString('utf8');
  const digest = createHash('sha256').update(data).digest('hex');
  assert.equal(digest, entry.sha256, `${entry.file} changed from approved master`);
  for (const polygon of geometry) {
    assert(svg.includes(`points="${polygon}"`), `${entry.file}: approved geometry missing`);
  }
  assert(!/<(?:[\w-]+:)?(?:text|image|script|foreignObject)\b/i.test(svg), `${entry.file}: prohibited element`);
  assert(!/@import|@font-face|(?:href|src)\s*=|url\s*\(/i.test(svg), `${entry.file}: external dependency`);
  console.log(`PASS ${entry.file} — official geometry, vector-only, SHA256 match`);
}
const masterIcon = await readFile(new URL('VerticalFoundry_Icon.svg', root));
const favicon = await readFile(new URL('../public/favicon.svg', import.meta.url));
assert.deepEqual(favicon, masterIcon, 'favicon.svg must equal the approved icon');
console.log('PASS favicon.svg — exactly matches approved icon');
