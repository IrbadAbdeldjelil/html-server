<h1>Html server</h1>

<tt>a quite server that serve a static web-site : </tt> 
<li>Html</li>
<li>CSS</li>
<hr />
<h3>in this project : </h3>
<tt> I did use just cors package : </tt>
<li>http : </li> <tt> to create a nodejs server with the method <mark>createServer</mark></tt>
``` js
   const server = http.createServer((req, res)=> {
     /// server code
   });
```
<li>fs : </li> <tt> to read the static files, using the method <mark>createReadStream</mark></tt>
``` js 
  function readFile(file, res) {
     return (
         res.writeHead(200,{'Content-Type':'text/html'}),
         fs.createReadStream(`/assets/${file}.html`).pipe(res)
            )
   }
```