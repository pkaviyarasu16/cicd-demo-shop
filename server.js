import http from 'node:http';
import { buttonLabel } from './src/shop.js';

const page = `<!doctype html><title>shop</title><h1>Mug</h1><p>$12.99</p><button>${buttonLabel}</button>`;

http.createServer((req, res) => {
  if (req.url === '/healthz') { res.writeHead(200); return res.end('ok'); }
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(page);
}).listen(3000, () => console.log('shop listening on :3000'));
