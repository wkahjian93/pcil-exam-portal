// Local preview server for docs/: node tools/serve.js
const http=require('http'),fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..','docs'),types={'.html':'text/html','.pdf':'application/pdf','.png':'image/png','.webmanifest':'application/manifest+json','.js':'text/javascript'};
http.createServer((q,r)=>{let p=decodeURIComponent(q.url.split('?')[0]);if(p.endsWith('/'))p+='index.html';const f=path.join(root,p);
 if(!f.startsWith(root)||!fs.existsSync(f)){r.writeHead(404);return r.end('not found')}
 r.writeHead(200,{'Content-Type':types[path.extname(f)]||'application/octet-stream'});fs.createReadStream(f).pipe(r)}).listen(5195,()=>console.log('http://localhost:5195'));
