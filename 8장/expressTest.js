var express = require('express');

var app = express();


// request 이벤트 리스너
// app.use(function(req, res){
//     var output = [];
//     for(var i=0; i< 3; i++){
//         output.push({
//             count: i,
//             name: 'name -'+i
//         });
//     }

//     res.send(output);
// })


app.use(function(req, res){
   res.status(404).send("<h1>제공하지 않는 페이지</h1>")
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