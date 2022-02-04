var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var morgan = require('morgan');

var app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('short'));
// app.use(express.static(__dirname+"/public"));

app.get("/", function(req, res){
    console.log("__dirname: "+ __dirname);
    console.log("__filename: "+ __filename);
    
    console.log("/ url routing check")
    if(req.cookies.auth){
        console.log("cookie.auth O")

        res.send("<h1>정상 로그인 확인</h1>")
    }else{
        console.log("cookie.auth X");

        res.redirect("/login");
    }
});

app.get("/login", function(req, res){
    console.log("[get] login ")
    fs.readFile("./public/login.html", function(err, data){
        if(err){
            console.log(err)
            return console.log("File read Error");
            
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    })
});

app.post("/login", function(req, res){
    var id = req.body.login;
    var pwd = req.body.password;

    console.log("id: "+ id);
    console.log("pw: "+ pwd);

    if(id === "iod1124" && pwd === '1234'){
        res.cookie('auth', true);
        res.redirect("/");
    }else{
        res.redirect("/login");
    }
});

// app.all("*", function(req, res){
//     console.log("404 잘못된 url 요청");
//     res.status(404).send('<h1>잘못된 url 요청</h1><br><a href ="/">index 이동</a> ')
// })

app.listen(52273, function(){
    console.log("login.js open")
    console.log("Server open port")
})