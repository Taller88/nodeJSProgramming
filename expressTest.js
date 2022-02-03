var express = require('express');

var app = express();


// request 이벤트 리스너
app.use(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("<h1>Check by jjw </h1>")
})


app.listen(52273, function(){
    console.log("Server Running at 52273")
});

/**
 * 다른 서버 실행 방법 
 * var http = require('http');
 * var express = require('express')
 * 
 * http.createServer(app).listen(52273, function(){
 *  console.log("52273 Server Running ")
 * })
 */