const http = require("http");

const hostname = "127.0.0.1";
const port = 1337;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); //어떻게 들어온 사용자인가?(콜백함수로 실행시 할 것 적음)

//app.js에서 express라는 서버 프레임워크를 쓸거임!
