import assert from 'node:assert/strict';import{readFile}from'node:fs/promises';
const read=async p=>readFile(new URL('../'+p,import.meta.url),'utf8');
for(const file of ['public/llms.txt','public/llms-full.txt','public/agents.md']){const s=await read(file);assert.match(s,/Alexandru Stoica/);assert.match(s,/Quant Data Intelligence LLC/);assert.match(s,/crawl/i)}
assert.match(await read('public/robots.txt'),/Allow:\s*\//);assert.match(await read('public/sitemap.xml'),/privacy-policy/);assert.match(await read('public/sitemap.xml'),/\/store\//);assert.doesNotMatch(await read('public/sitemap.xml'),/\/etsy\//);assert.match(await read('public/llms.txt'),/\/store\//);
console.log('PASS crawl documentation and sitemap');
