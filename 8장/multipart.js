var fs = require('fs');
var multiparty = require('connect-multiparty');
var express = require('express');

var app = express();

app.use(multiparty({uploadDir: __dirname+"/multipart"}))

app.get('/', function(req, res){
    console.log("index init")
    fs.readFile("./public/HTMLPage.html", function(err, data){
        if(err){
            console.log("err: "+ err);
            console.log("File error");
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    })
});

app.post("/file", function(req, res){
    console.log('[POST] init');
    console.log(req.body);
    console.log(req.files);

    res.redirect("/")
})


app.listen(52273, function(){
    console.log("multipart Server open")

})