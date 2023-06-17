const EventEmitter = require("events");

const myEmitter = new EventEmitter();

//test라는 이벤트가 발생했을때 콜백을 실행한다.
myEmitter.on("tesst", () => {
  console.log("Success!");
});

//emit매소드:이밴트를 발생시켜주는 메소드
myEmitter.emit("tesst");

//Node.js에서는 이벤트라는 개념을 이해하는 것이 아주 중요하다.
//왜냐하면 코어모듈에서 가져다 쓸 다양한 함수들이(on메서드, emit메서드) 방금 본 것처럼 이벤트 기반으로 동작하도록 설계 되어있기 때문


//다르게 말하면 
//Node.js에서 제공하는 주요 API들은 이벤트 기반 구조 위에서 작성되었고 그 구조에서는
//특정 객체가 이벤트를 발생시키면 그 이벤트에 관한 콜백이 실행된다.

//더욱 쉽게 말하자면
//코어 모듈에서 제공되는 많은 객체들이 이벤트 기반으로 작동하기 때문에 이벤트의 의미를 잘 이해해야 한다.

//이벤트를 발생시키는 모든 객체는 결국  EventEmitter클래스의 객체라는 설명을 하고 있다.

