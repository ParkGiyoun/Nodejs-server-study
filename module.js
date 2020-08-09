//nodejs 에 기본적으로 있는 모듈 가져다 쓰기
//os라는 모듈이 가장 쓰기 쉬움
const os = require("os");
const { NOTIMP } = require("dns");

console.log(os.platform());
//다른 사람이 만든 모듈을 가져다가 쓸 수 있다. (from. NPM)node package manager

// -> install 할 때 npm install 이름 -g 이거처럼 -g붙이면
// 어디서든 사용할 수 있는 앱으로 생성하는 거임.

//모듈로 사용할 수도 있음 -g를 붙이지 않는다면!
//처음에 사용하기 위해서 npm init 을 쳐서 package.json을 만들어야 한다.

//npm 모듈로 설치할 때 --save를 붙여서 dependencies를 만들어서 이 프로젝트에서 계속 쓸 수 있게 된다.
//그냥 확인용으로 설치한다고 할 때는 안붙여서 설치하면 된다.

//underscore.js에서 이어짐
