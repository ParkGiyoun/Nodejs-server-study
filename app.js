const express = require("express");
const app = express(); //우리가 만든 express는 함수임. 그 객체를 app에다가 집어넣음.

//url으로 접속하는 것 get방식으로 접속하는 것!
app.get("/", (req, res) => {
  res.send("Hello Home page!");
});
//여기서 get이라는 메소드를 라우터라고 부름 router
//길을 연결해주는 거 router
app.get("/login", (req, res) => {
  res.send("<h1>Login please</h1>");
});

app.listen(3000, () => {
  console.log(`connected 3000 port`);
});

/**
 * 연결성
 * 단어 = 의미를 전달함
 * 인간이 발전하면서...
 * 하나의 단어가 여러의미를 가짐.
 *
 * 떄론 단어+단어 => 문장을 만듦. (또 새로운 의미 만듦.)
 *
 * Nodejs -> FS, HTTP, OS 기능이 있음
 * JavaScript 의 문법에 맞게 저걸 가져와 프로그램을 만들 수 있음.
 *
 * 전자는 명령을 제공
 * 후자가 그 명령을 조합해서 새로운 명령을 만듦.
 *
 * module, npm
 * Router, Controller(회원가입, 홈피, 에러)
 */

/**
 * 정적파일 제공 --> app2.js
 */
