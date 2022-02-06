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
    fs.readFile("./public/insert.html", function(err, data){
        if(err){
            console.log("fs error : insert.html ");
            return;
        }
        res.send(data);

    })
});
app.post("/insert", function(req, res){
    
    var name = req.body.name;
    var modelNumber = req.body.modelNumber;
    var series = req.body.series;

    client.query("INSERT INTO products(name, modulenumber, series) VALUES(?,?,?)",[
        name, modelNumber, series
    ],function(){
        res.redirect("/");
    })
    
});
app.get("/edit/:id", function(req, res){
    var id = req.params.id;
    fs.readFile("./public/edit.html",'utf8' , function(err, data){
        if(err){
            console.log("fs Error : edit.html");
            return;
        }
        client.query("SELECT * FROM products WHERE id = ?",[
          id  
        ], function(err, result){//DB 결과
            res.send(ejs.render(data, {
                data:result[0]
            }))
        })

    })
});
app.post("/edit/:id", function(req, res){
    var id = req.body.id;
    var name = req.body.name;
    var modelNumber = req.body.modelNumber;
    var series = req.body.series;
    console.log(id +","+name+", "+modelNumber+", "+series)
    client.query("UPDATE products SET name =?, modelNumber = ?, series = ? WHERE id = ?",[
         name, modelNumber, series, id
    ], function(){
        res.redirect("/");
    })
});


app.listen(52273, function(){
    console.log("DB test Server open 52273");
});

