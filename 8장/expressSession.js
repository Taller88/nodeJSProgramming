var express = require('express');
var session = require('exprsss-session');

var app = express();

app.use(session({
    secret:'secret key',
    resave:false,
    saveUninitialized: true
}))

app.use(function(req, res){
    req.session.now = (new Date()).toUTCString();

    res.send(req.session);
    
})

app.listen(52273, function(){
    console.log("express session server open")
})