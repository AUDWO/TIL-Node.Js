//Express: node.js에서 실행 될 서버 프로그램을 간편하게 만들 수 있게 해주는 프레임워크

const express = require("express");

const app = express();

//app객체의 get메소드는 특정 패스에 대해서 그 요청과 응답을 다루는
//함수를 하나씩 설정하기 위해 쓰는 메소드

app.get("/", (request, response) => {
  response.end("<h1>Welcome</h1>");
});

app.get("/users", (request, response) => {
  response.end(`<h1>${users}</h1>`);
});

app.get("/users/:id", (request, response) => {
  console.log(request.params);
  //만약 url에 /users/1 이라고 치면
  //console창에 {id:'1'}
});


// *: 모든 path를 나타내기 때문에 *는 가장 마지막에 써야 한다.
app.get('*', (request, response)=>{
    response.end('<h1>Page Not Available</h1>');
})
