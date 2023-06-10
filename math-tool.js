function add(a, b) {
  return a + b;
}

const PI = 3.14;

//exports.내가 원하는 이름 = 외부에서 사용하고 싶은 것
exports.pi = PI;
exports.add = add;

//만약 exports.plus = add; 라고 되어있으면 다른 파일에서 plus라는 이름으로 호출해줘야 한다.

//하나의 객체로 모아서 외부로 공개할 때는
//module.exports라고 써야 한다.
let calculator = {
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
};

module.exports = calculator;

//그런데 한 파일에서 객체로 한번에 담아 exports하는 것과 각각의 값을 exports하는 것
//이렇게 두가지를 동시에 하지 못한다.
//그럴때는 이렇게 작성하면 된다.

let author = "codeit";
let calculator2 = {
  m: 1,
  add2: (a, b) => a + b,
};

module.exports = {
  calculator,
  author,
};

//main.js에서는
//const {author, calculator2} = require('./math-tool.js')

//모듈이 로드되는 과정

//exports객체와 module객체의 exports 프로퍼티가
//가리키는 객체는 동일한 객체이다.

// const m = require('./math-tools');
// require함수는 exports객체 (module객체의 exports프로퍼티가 가리키는 객체)를 리턴한다.

//exports = 객체 이런식으로 설정할 수 없는이유
// require함수가 리턴하는 객체는 module객체의 exports 프로퍼티 객체를 리턴하기 때문에
