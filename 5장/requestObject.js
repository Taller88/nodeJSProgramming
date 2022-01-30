var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function(req, res){
    var pathName = url.parse(req.url).pathname;
    console.log("req Method: "+ req.method);
    if(pathName == '/'){
        fs.readFile("HTMLPage.html", function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        })
    }else if(pathName == "/OtherPage"){
        fs.readFile("OtherPage.html", function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        })
    }
}).listen(52273, function(){
    console.log("52273 port Server open!")
})