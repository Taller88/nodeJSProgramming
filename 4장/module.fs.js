var fs= require('fs');

var text =fs.readFileSync('textFile.txt', 'utf8');
console.log(text);


/**
 *  readFile 
 *      : readFileAsync를 비동기로 구현한 메소드 
 *      : 따라서 readFile 메서드를 만나는 순간 리스터를 등록하고 파일을 모두 읽게 만들어 이벤트 리스터를 실행
 * 
 */

//파일을 정상적으로 읽으면 콜백 함수의 두번째 매개변수에 읽은 데이터를 전달
var txt = fs.readFile('textFile.txt', 'utf8', function(error, data){
    console.log(data);
});
console.log("txt: "+txt)