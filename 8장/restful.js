var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));

// 모든 사용자 정보 조회
app.get("/user", function(req, res){
    console.log("[GET] user Data select")
    res.send(DummyDB.get());
});

// 특정 사용자 조회
app.get("/user/:id", function(req, res){
    var id = req.params.id;
    console.log("[GET] user Data id: "+ id);
    res.send(DummyDB.get(id));
});

// 사용자를 추가
app.post("/user", function(req, res){
    console.log("[POST] user Data insert")
    var name = req.body.name;
    var region = req.body.region;
    console.log(name+": "+ region);

    if(name&&region){
        res.send(DummyDB.insert({
            name:name,
            region:region
        }));
    }else{
        console.log("[Error] test")
        throw new Error('error');
    }

});

//특정 사용자 정보를 수정
app.put("/user", function(req, res){

});

// 특정사용자 정보를 제거
app.delete("/user", function(req, res){

});

app.listen(52273, function(){
    console.log("restful api Server open")
})

var DummyDB = (function(){
    var DummyDB = {};
    var storage = [];
    var count = 1;

    DummyDB.get = function(id){
        if(id){
            id = (typeof id === 'string')? Number(id): id;

            for(var i in storage){
                if(storage[i].id == id){
                    return storage[i];
                }
            }
    
        }else{
            return storage;
        }
    }

    DummyDB.insert = function(data){
        data.id = count++;

        storage.push(data);
        return data;
    }

    DummyDB.remove = function(id){
        if(id){
            id = (typeof id === 'string')?Number(id): id;
            
            for(var i in storage){
                if(storage[i].id === id){
                    storage.splice(i,1);
                    return true;
                }
            }

        }
        return false;
    }
    return DummyDB;
})();