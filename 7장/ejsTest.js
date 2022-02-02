var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function(req, res){
    fs.readFile('ejsPage.ejs', 'utf8', function(err, data){
        //ejsPage페이지를 HTML페이지로 변환할 때는 ejs모듈의 render() 메서드를 사용
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(ejs.render(data))
    })
}).listen(52273, function(){
    console.log("Server Open 52273")
})