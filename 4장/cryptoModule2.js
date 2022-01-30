var crypto = require('crypto');

var key = "정진우";
var plainText = "PASSWORD";

// aes192로 암호화후 base64로 인코딩
var cipher = crypto.createCipher("aes192", key);
// DeprecationWarning: crypto.createCipher is deprecated.
//아마도 utf8인코딩 데이터를 base64로 인코딩한다는 뜻이 아닐까
cipher.update(plainText, 'utf8', 'base64');
var cipherOutput = cipher.final('base64');

console.log("cipherOutput: "+cipherOutput)

// 디코딩
var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipherOutput, 'base64', 'utf8');
var decipheredOutput = decipher.final('utf8');
console.log("decipheredOutput: "+ decipheredOutput);


