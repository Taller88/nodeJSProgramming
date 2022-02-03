var express = require('express');

var router = express.Router();

router.get("/index", function(req, res){
    console.log("router A index page init!");
    res.send("<h1>/index</h1>")
});

exports.router = router;