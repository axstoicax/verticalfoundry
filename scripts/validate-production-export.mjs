import assert from 'node:assert/strict';
import {stat,readFile} from 'node:fs/promises';
const r= new URL('../out/',import.meta.url);
for(const p of ['index.html','store/index.html','agents.md','llms.txt','llms-full.txt','about/index.html','contact/index.html','privacy/index.html','privacy-policy/index.html','terms-of-service/index.html','robots.txt','sitemap.xml','logos/VerticalFoundry_Primary_Horizontal_OUTLINED.svg','images/alexandru-stoica-founder.webp'])await stat(new URL(p,r));
const home=await readFile(new URL('index.html',r),'utf8');
assert.match(home,/Powerful Inside/);assert.match(home,/Google Preferred Sources/);assert.match(home,/30 N Gould/);
console.log('PASS v5 exported pages, official assets, business contact details and original v4.10 hero');
