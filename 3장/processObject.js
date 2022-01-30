console.log("process.env: "+process.env);
console.log("process.version: "+process.version);
console.log("process.versions: "+process.versions);
console.log("process.arch: "+process.arch);
console.log("process.platform: "+process.platform);
/**
 * 
 *  process.env: [object Object]
    process.version: v12.19.0
    process.versions: [object Object]
    process.arch: x64
    process.platform: win32
 * 
 * 
 */


process.argv.forEach(function(item, index) {
    console.log(index+" : "+ typeof(item)+": "+ item)
});
/*
실행 operation  : node processObject.js 1000 2000

0 : string: C:\Program Files\nodejs\node.exe
1 : string: C:\Users\user\Desktop\NodeJSProgramming\3장\processObject.js
2 : string: 1000
3 : string: 2000


*/