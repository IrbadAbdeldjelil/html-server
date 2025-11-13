    const http = require('http');
    const fs = require('fs');
    
    const server = http.createServer((req, res)=> {
      console.log('تم طلب : ' + req.url);
      if(req.url == '/' || req.url == '/index'){
        readFile('/index', res);
      }else if(req.url == '/about'){
        readFile(req.url, res);
      }else if(req.url == '/me'){
        readFile(req.url, res);
      }else if(req.url == '/articles'){
        readFile(req.url, res);
      }else if(req.url == '/thoughts'){
        readFile(req.url, res);
      }else if(req.url == '/css/styles.css'){
        res.writeHead(200,{'Content-Type':'text/css'});
       fs.createReadStream(`./assets/css/styles.css`).pipe(res);
      }else{
        res.writeHead(404);
        res.end('not found');
      }
    });


server.listen(9319, ()=>console.log('runing on http://localhost:9319));

function readFile(file, res) {
     return (
         res.writeHead(200,{'Content-Type':'text/html'}),
         fs.createReadStream(`./assets/${file}.html`).pipe(res)
            )
}
