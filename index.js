const http = require('http');
const fs = require('fs');

const hostname = 'localhost'
const port = 8080

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url=== '/'){
        fs.readFile('index.html',(err,data)=>{
            if(err){
                res.writeHead(500,{'Content-Type':'text/plain'});
                res.end('Internal Server error');
            }
            else{
                res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
            }
        })
    }
    if(url=== '/about'){
        fs.readFile('about.html',(err,data)=>{
            if(err){
                res.writeHead(500,{'Content-Type':'text/plain'});
                res.end('Internal Server error');
            }
            else{
                res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
            }
        })
    }
    if(url=== '/contact-me'){
        fs.readFile('contact-me.html',(err,data)=>{
            if(err){
                res.writeHead(500,{'Content-Type':'text/plain'});
                res.end('Internal Server error');
            }
            else{
                res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
            }
        })
    }
    else{
        fs.readFile('404.html',(err,data)=>{
            if(err){
                res.writeHead(500,{'Content-Type':'text/plain'});
                res.end('Internal Server error');
            }
            else{
                res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
            }
        })
    }
  })

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  })