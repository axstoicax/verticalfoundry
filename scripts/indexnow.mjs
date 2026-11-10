import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';

const action=process.argv[2];
const site='https://getverticalfoundry.com';
const configFile=path.resolve('.indexnow.local.json');
const root=path.resolve('public');
const home=new URL(site);

if (action === 'prepare') {
  if (fs.existsSync(configFile)) {
    console.log('IndexNow already prepared; not overwriting the existing key.');
    process.exit(0);
  }
  const key=crypto.randomBytes(20).toString('hex');
  const keyFile=path.join(root, `${key}.txt`);
  fs.writeFileSync(keyFile, key, {flag:'wx'});
  fs.writeFileSync(configFile, JSON.stringify({key, keyFileName:`${key}.txt`},null,2)+'\n', {flag:'wx'});
  console.log('Prepared IndexNow verification file:', path.relative(process.cwd(), keyFile));
  console.log('Publish a production deployment containing this file, confirm its public URL is readable, THEN run npm run indexnow:submit.');
  console.log('Do not submit on a staging/private domain.');
} else if (action === 'submit') {
  if (!fs.existsSync(configFile)) throw new Error('Run npm run indexnow:prepare first.');
  const c=JSON.parse(fs.readFileSync(configFile,'utf8'));
  const url=site+'/'+c.keyFileName;
  const check=await fetch(url, {redirect:'error'});
  if (!check.ok || (await check.text()).trim()!==c.key) throw new Error(`Key not available at ${url} or mismatched; deploy first.`);
  const page=site+'/';
  const request=new URL('https://api.indexnow.org/indexnow');
  request.searchParams.set('url',page);
  request.searchParams.set('key',c.key);
  request.searchParams.set('keyLocation',url);
  const response=await fetch(request);
  const result=await response.text();
  console.log(`IndexNow HTTP ${response.status}: ${result.slice(0,400) || 'No body'}`);
  if (!response.ok && response.status!==202) process.exitCode=1;
} else {
  console.log('Usage: node scripts/indexnow.mjs prepare | submit');
  process.exitCode=1;
}
