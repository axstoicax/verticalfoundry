import assert from 'node:assert/strict';import {readFile,stat} from 'node:fs/promises';
const read=async p=>readFile(new URL('../'+p,import.meta.url),'utf8');
const home=await read('app/page.js'),style=await read('app/globals.css'),sitemap=await read('public/sitemap.xml'),vercel=JSON.parse(await read('vercel.json'));
assert.match(home,/Powerful Inside/);assert.match(home,/promise-bracket-left/);assert.match(home,/promise-bracket-right/);assert.match(home,/Google Preferred Sources/);assert.match(home,/brand-wordmark/);assert.match(style,/margin-top: 36px/);
for(const route of ['products','store','about','contact','terms-of-service','privacy-policy','privacy']){await stat(new URL('../app/'+route+'/page.js',import.meta.url));assert.ok(sitemap.includes('https://getverticalfoundry.com/'+route+'/'))}
assert.ok(vercel.headers?.[0]?.headers?.find(x=>x.key==='Content-Security-Policy'));
for(const item of ['public/images/alexandru-stoica-founder.webp','public/images/alexandru-stoica-founder-thumb.webp','public/logos/VerticalFoundry_Primary_Horizontal_OUTLINED.svg'])await stat(new URL('../'+item,import.meta.url));
console.log('PASS v5.2 eight pages, locked v4.10 hero, contact, policy links, sitemap, CSP, original logos and founder photo');
