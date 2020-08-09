//underscore 라는 모듈을 가져옴
const _ = require("underscore");
const arr = [3, 6, 9, 12, 15];

//모듈의 document를 보고 이렇게 쓸 수 있다.
console.log(arr[0]);
console.log(_.first(arr)); //

console.log(arr[arr.length - 1]);
console.log(_.last(arr)); //

//콜백함수
/*
a = [3, 1, 2];
function b(v1, v2) {
  console.log("c", v1, v2);
  return v1 - v2;
}
a.sort(b);
console.log(a);

여기서 b라는 함수가 콜백함수임.
만약 반복해야하는 함수가 아닐경우
 아래와 같이 익명함수로 쓸 수 있음.
 a.sort(function(v1,v2){
    return v1-v2;
 });
 */

/**
 * 동기, 비동기
 * Synchronous   sync
 * Asynchronous  async
 *
 * 동기
 * 빨래하고 설거지하고 청소하고 일 끝났다고 선언(이 순서로 처리)
 *
 * 비동기
 * 빨래업체, 설거지업체, 청소업체
 * 각각 전화해서 끝나면 알려달라고함. (뭐가 먼저 끝날지 모름)
 * 순서 상관없으면 괜찮.
 *
 * sync_async.js에서 이어서..
 */
