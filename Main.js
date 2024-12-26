//console.log("Hello world!");



var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello from Node.js App')
}).listen(8081);
console.log('appl runs local1host:8081')



