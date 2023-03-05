var http  = require('http');
var mymd  = require('./myModule.js');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end('hello world! now you write your  '+mymd.myDateTime());
}).listen(8080);