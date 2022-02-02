var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function(req, res){
    console.log('http Create Server init!')
    fs.readFile('ejsPage2.ejs', 'utf8', function(err, data){
        console.log("readFile test")
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(ejs.render(data,{
            name:"jjw",
            description:"Hello ejs With node js"
        }));
    })
}).listen(52273, function(){
    console.log("52273 port Open!")
})