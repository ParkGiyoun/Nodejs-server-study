const express = require("express");
const app = express();
app.set("view engine", "pug");
app.set("views", "./views");
const port = 3000;

app.use(express.static("public"));
//이거 쓰면 정적 파일을 보낼 수 있음. 주소/.파일명.파일형식
//public 디렉토리 안에 있어야 함.

//bodyparser 대체 미들웨어 express.urlencoded
app.use(express.urlencoded({ extended: false }));

/**
 * form 라우터
 */
app.get("/form", (req, res) => {
  app.locals.pretty = true;
  res.render("form");
});
app.get("/form_receiver", (req, res) => {
  const title = req.query.title;
  const description = req.query.description;
  res.send(`${title} , ${description}`);
});
app.post("/form_receiver", (req, res) => {
  //body라는 객체를 받기위해 예전에는 bodyparser써야 했는데, 이제 안써도 됨.
  //express api참조 -> req.body 참고
  const title = req.body.title;
  const description = req.body.description;
  res.send(`${title} , ${description}`);
});

/**
 * 시멘틱URL
 * semantic URL
 * /topic/1 이런식으로 깔끔하게 보여주는 것
 *
 * router에서 경로를
 * /topic   ==>   /topic/:id
 * 으로 해줘야 함.
 */
app.get("/semantic/:id", (req, res) => {
  // req객체의 query객체안의 queryString 객체들을 가져옴.
  const topics = [
    "Javascript is ......",
    "Nodejs is .......",
    "Express is ........",
  ];
  const output = `
  <a href="/semantic/0">JavaScript</a><br>
  <a href="/semantic/1">Nodejs</a><br>
  <a href="/semantic/2">Express</a><br><br>
  ${topics[req.params.id]}`;
  //시멘틱 url의 경우 params로 적어야함.
  res.send(output);
});
//이렇게 두개인 경우에도 처리할 수 있음.
app.get("/semantic/:id/:mode", (req, res) => {
  res.send(req.params.id + "," + req.params.mode);
}); // GETvsPOST.txt에서 이어서....

//queryString -> 요청부분인 req를 사용하게 될 것임.
app.get("/topic", (req, res) => {
  // req객체의 query객체안의 queryString 객체들을 가져옴.
  const topics = [
    "Javascript is ......",
    "Nodejs is .......",
    "Express is ........",
  ];
  const output = `
  <a href="/topic?id=0">JavaScript</a><br>
  <a href="/topic?id=1">Nodejs</a><br>
  <a href="/topic?id=2">Express</a><br><br>
  ${topics[req.query.id]}`;
  res.send(output);
  //시멘틱 URL에서 이어서...
});

app.get("/template", (req, res) => {
  //  pug 에서 정했던 이름에다가 글 지정함.
  app.locals.pretty = true; //view-source:주소 로 볼 때 깨끗하게 보여주는 코드
  const time = Date();
  res.render("temp", { title: "MyProject", time: time });
});

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
//--> 템플릿 엔진 (in express js) ex) pug

//temp.pug에서 이어서
