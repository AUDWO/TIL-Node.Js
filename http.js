//http라는 코어모듈을 쓰면 http라는 통신규약으로 클리이언트와 통신하는 서버를 만들 수 있다.
const http = require("http");

//createServer메소드가 server역할을 하는 객체 하나를 생성해준디.
let server = http.createServer(function (request, response) {
  //각 패스마다 해야 할 응답이 서버에 미리 정해져 있기 떄문에
  console.log(request.url);

  //request:클라이언트의 요청에 관한 객체
  //response:server객체가 할 응답에 관한 객체
  if (request.url === "/") {
    response.end("<h1>Welcome</h1>");
  } else if (request.url === "/users") {
    response.end("<h1>" + users + "</h1>");
  } else {
    response.end("</h1>Page Not Available</h1>");
  }
});

//3000:포트 번호
//하나의 서버에는 여러개의 프로그램이 실행되고 있는 경우가 많다

//server에서 외부 요청을 기다리며 실행되고 있는 프로그램에는 포트번호가 할당된다.

//그래서 클라이언트가 포트번호만 잘 입력한다면 원하는 프로그램에 요청을 보낼 수 있게 된다.
server.listen(3000);

let url = new URL("http://example.com?business/mart/item?category=14&id=2965");
console.log(url.protocol);
console.log(url.host);
console.log(url.pathname);
console.log(url.search);
