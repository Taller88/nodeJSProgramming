var crypto = require('crypto');

/**
 * 
    var shasum = crypto.createHash('sha256');
    shasum.update('crypto-hash');
    var output = shasum.digest('hex');

    var cryptoInstance = crypto.createHash("알고리즘 종류"); : crypto 인스턴스 생성
    cryptoInstance.update(평문데이터);
    cryptoInstance.digest("hex"/base64) <- hex형식으로 출력
    
 * 
 */
var shasum = crypto.createHash('sha256');
shasum.update('crypto-hash');
// var outputBase64 = shasum.digest('base64');
var outputHex = shasum.digest('hex');



// console.log("outputBase64: "+ outputBase64);
console.log("outputHex: "+ outputHex);
