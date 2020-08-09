const fs = require("fs");

//sync
console.log(1);
const data = fs.readFileSync("data.txt", { encoding: "utf-8" });
console.log(data);

//async
console.log(2);
fs.readFile("data.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    throw err;
  }
  console.log(3);
  console.log(data);
});
console.log(4);

// 비동기의 경우, 처리되기를 다 기다리지 않고, 일단 다음거 부터 실행함
// 1
// 2
// 4
// 3
// 순으로 출력된다.

//webserver2.js에서 이어서...
