var http  = require('http');

// server 객체 생성
// server 객체는 EventEmitter 객체를 기반으로 생성되었으므로 이벤트를 연결할 수 있다.
var server = http.createServer();

server.on('request', function(code){
    console.log("Request On code: "+code);
})

server.on('connection', function(code){
    console.log("Connection On code: "+code);
})


server.on('close', function(code){
    console.log("close On code: "+code);
})

// 서버 실행
server.listen(52273);



