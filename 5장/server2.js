var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res){

    fs.readFile('HTMLPage.html', function(error, data){
        if(error){
            // 조기 return
            return console.log(error);
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
            
    })
}).listen(52273, function(){
    console.log("52273 Server open");
}).on('connection', function(code){
    console.log("Connection open")
}).on('request', function(code){
    console.log("Request Open");
})


