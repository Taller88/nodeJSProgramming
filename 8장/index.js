var express = require('express');
var routerA = require('./routerA');
var routerB = require('./routerB');
var routerC = require('./routerC');
 
var app = express();

app.use('/a', routerA.router);
app.use('/b', routerB.router);
app.use('/c', routerC.router);

app.all("*", function(req, res){
    res.status(404).send("<h1>404 Error</h1>")
})
app.listen(52273, function(){
    console.log('Server open 52273')
})