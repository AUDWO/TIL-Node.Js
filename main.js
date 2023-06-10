//모듈을 로드한다: 다른 js파일에 있는 함수를 가져와 쓴다.

//require은 모듈을 로드해주는 함수.
//require함수는 객체 하나를 리턴한다.

//let보단 const를
//이유: 모듈이 리턴한 객체를 변수로 받으면, 나중에 본인 또는 다른 개발자가 변수 m에 다른 값을 실수로 다시 지정하게 될 수도 있다.

const m = require(`./math-tool.js`);

console.log(m.pi);
console.log(m.add(1, 2));
console.log(m.subtract(4, 1));
