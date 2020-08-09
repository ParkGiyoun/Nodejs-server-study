const express = require("express");
const { Router } = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
//이거 쓰면 정적 파일을 보낼 수 있음. 주소/.파일명.파일형식
//public 디렉토리 안에 있어야 함.

app.get("/", (req, res) => {
  res.send("/index.html");
});
app.get("/dynamic", (req, res) => {
  let lis = "";
  for (let i = 0; i < 5; i++) {
    lis = lis + "<li>coding</li>";
  }
  let time = Date();
  const output = `<!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div class="mainContainer">
          <h1 class="title">First HTML title</h1>
          <p class="text">첫 Dynamic 내용입니다.~~~~~~~~~~~~</p>
          <ul>
            ${lis}
          <ul>
          ${time}
        </div>
      </body>
    </html>
    `;
  res.send(output);
});
app.get("/route", (req, res) => {
  res.send(`hello router <img src="/route.jpg">`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//웹페이지 표시
/**
 * 1. 정적인 파일 -> 한번 만들어지면 계속 똑같
 * 2. 동적인 파일
 *
 */

//정적인 장점, 동적인 장점 다 맞는거 어떻게 할까 ?
//--> 템플릿 엔진 (in express js) ex) jade, pug
