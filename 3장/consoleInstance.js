/**
 * console 객체 
 * 
 *  - log()     : 로그 출력 
 *  - time()    : 시간 측정을 시작
 *  - timeEnd() : 시간 측정을 종료
 * 
 * 
 * 특수 문자 
 *  - %d : 숫자
 *  - %s : 문자열
 *  - %j : JSON
 */

 console.log("output: %d + %d = %d", 273,52,273+52);
 console.log("output: %s", 'test');
 console.log("output: %j", {name: "test"});


 // time, timeEnd에 있는 param을 통해 timer 구분
 console.time('alpha');

 var output = 1
 for(var i=1; i<100; i++){
    output*=i;
 }
 console.log(output)
 console.timeEnd('alpha');
