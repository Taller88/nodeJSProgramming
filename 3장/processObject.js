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