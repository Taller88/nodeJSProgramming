var mysql = require('mysql');

var client = mysql.createConnection({
    user:'root',
    password:'jjwoo616!',
    database:'Company'
});

console.log("DB Connection success")


exports.client= client;