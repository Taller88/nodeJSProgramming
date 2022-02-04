var express = require('express');
var morgan = require('morgan');
/***
 * 
 * 
 * morgan 미들웨어 
 *  - morgan 미들웨어는 웹 요청이 왔을때 로그를 출력하는 미들웨어 
 * 
 */
var fs = require('fs');

var app = express();

// static 미들웨어 등록하면 웹 서버에 해당 폴더에 있는 파일을 웹 루트에 등록
app.use(morgan('short'));
app.use(express.static(__dirname+"/public"));

app.get("/", function(req, res){
    fs.readFile("/index.html", function(err, data){
        if (err){
            return console.log("File read Error");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    })
});

// url routing 이외의 요청은 잘못된 요청으로 판단
app.all("*", function(req, res){
    console.log('404 잘못된 요청');
    res.send('<h1>404 잘못된 url 요청 </h1><br><a href = "/">정상 index 페이지로 이동</a>');
});

app.listen(52273, function(){
    console.log("Server open port: 52273");
})

