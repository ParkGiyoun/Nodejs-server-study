//node JS에서 제공하는 모듈인 http가 필요하다는 뜻
const http = require("http");

const hostname = "127.0.0.1";
const port = 1338;

http
  .createServer((req, res) => {
    //서버를 만듦
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
  })
  //서버에게 리스닝을 시킴 127.0.0.1로 접속한 사용자에 대해 응답해라
  //포트는 port 상수에 해당할 경우!
  .listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
/**
 * 인터넷의 동작방법 (4가지 개념)
 *
 * 클라이언트(요청) ====인터넷==== 서버(응답)
 *
 * 서버에서 http://a.com 이런거는 서버의 이름이고,
 * 실제 컴퓨터는 IP로 접속하는 것!
 *
 * 서버컴퓨터 안에 설치되어있는 다양한 서버프로그램
 * (DB서버, 채팅서버, 게임서버, 웹서버 ...)
 *
 * 사용자가 a.com으로 접속했을 때 서버가 어떤 앱을 실행시켜서
 * 요청에 대해 응답할 수 있는가? -> 가장 중요한 것
 *
 *
 * 컴퓨터 --> 0~65535사이의 PORT라는 문이 있음
 * Listening (a.com:80)
 *    -> 80번 포트에 웹서버를 연결시켰다 (웹서버가 80번 서버를 리스닝하고있다.)
 * 웹브라우저에서는 80번 포트라는 내용을 생략할 수 있다.
 * (웹 = 80번 이건 약속)
 *
 * 만약에 1337번 포트에 웹서버을 연결시켜주면,
 * a.com:1337로 웹서버 접속이 가능해지는 것
 */
