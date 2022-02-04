var mysql = require('mysql');

var client = mysql.createConnection({
    user:"root",
    password:"jjwoo616!",
    database:'Company'
});

client.query('SELECT * FROM products', function(error, result, fields){
    if(error){
        console.log("Query 문자에 오류가 있습니다.")
    }else{
        console.log(result);
    }
});

/**
 * ? 토큰 
 * client.query(
 *  'INSERT INTO products(name, modelnumber, series) VALUES (?,?,?)'
 *  ,['Name Value' , '01089297330', 'teacher']
 *  ,function(err, results, fields){
 * 
 * });
 *  
 */