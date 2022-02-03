var express = require('express');

var app = express();

var routerA = express.Router();
var routerB = express.Router();


routerA.get("/index", function(req, res){
    console.log("routerA index in!");
    res.status(200).send('<a href = "/b/index">b로 이동합니다. </a>')
});

routerB.get("/index", function(req, res){
    console.log("routerB index in!");
    res.status(200).send('<a href = "/a/index">a로 이동합니다. </a>')
});


// 라우터 설정 
/**
 *  이렇게 설정하면 routerA 는 /a/index 경로에 페이지를 생성 
 *              routerB 는 /b/index 경로에 페이지를 생성
 * 
 * 
 */
app.use('/a',routerA);
app.use('/b',routerB);

app.listen(52273, function(){
    console.log("52273 server open")
})
