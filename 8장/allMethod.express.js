var express = require('express');

var app = express();

app.get("/", function(req, res){
    console.log(" initial page init!")
    res.send('<a href = "/index">Go to index</a>');
});
app.get("/index", function(req, res){
    console.log(" initial page init!")
    res.send('<a href = "/">Go to initial page</a>');
});

app.all("*", function(req, res){
    res.status(404).send('<a href = "/">잘못된 경로입니다. </a>')
})
app.listen(52273, function(){
    console.log("Server open 52273")
})
