var express = require('express');
var fs = require('fs');
var app = express();

//미들웨어 설정
//static 미들웨어를 사용하면 지정한 폴더에 있는 내용을 모두 웹 서버 루트 폴더에 올림
app.use(express.static(__dirname+"/public"));


app.get("/", function(req, res){
    fs.readFile('/index.html', function(error, data){
        if(error){
            // 조기 return
            return console.log(error);
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
            
    })
})

app.all("*", function(req, res){
    console.log("잘못된 url")
})

//서버 실행
app.listen(52273, function(){
    console.log("52273 port open")
})