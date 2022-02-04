/***
 * 폴더 구성 
 * 1. app.js
 * 2. edit.html 
 * 3. insert.html
 * 4. select.html 
 *  * 
 */


var express = require('express');
var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var db = require('./db.js');
var client = db.client;

var app = express();

app.use(bodyParser.urlencoded({
    extended:false
}));



app.get("/", function(req, res){
    console.log("/ url routing init!")
    fs.readFile("./public/list.html",'utf8' ,function(err, data){
        if(err){
            console.log("error list.html not found");
            return;
        }
        console.log("Sucess File open");
        client.query('SELECT * FROM products', function(err, results){
            if(err){
                console.log("Query Error");
                console.log(err);
                return;
            }
            console.log("Query ok");
            res.send(ejs.render(data,{data:results}));
        })
    })
});
app.get("/delete/:id", function(req, res){
    console.log("[Delete] Test");
    client.query("Delete from products WHERE id = ?", [req.params.id], function(err, data){
        if(err){
            console.log("[Delete] error");
            return;
        }
        res.redirect("/");
    })

});
app.get("/insert", function(req, res){

});
app.post("/insert", function(req, res){

});
app.get("/edit/:id", function(req, res){

});
app.post("/edit/:id", function(req, res){

});


app.listen(52273, function(){
    console.log("DB test Server open 52273");
});

