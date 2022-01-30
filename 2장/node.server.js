var http = require('http');


http.createServer(function(req, res){
    // header에 넣는 과정
    res.writeHead(200, {'Content-Type':'text/html'});
    // 아마 body겠지
    res.end('<h1>Hello world</h1>');

}).listen(52273, function(){
    console.log("Server open 52273 port")
})