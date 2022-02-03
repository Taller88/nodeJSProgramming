var express = require('express');

var app = express();

app.get("/page/:id", function(req, res){
    var name = req.params.id;
    console.log("router / come name: "+ name);
    res.send('<h1>'+name+' Page </h1>')
});

app.listen(52273, function(){
    console.log("52273 port open ")
})