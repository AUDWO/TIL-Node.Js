//하나의 이벤트에 관해서 여러개의 콜백을 설정할 수 있다.

const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("test", () => {
  console.log("1");
});

myEmitter.on("test", () => {
  console.log("2");
});

myEmitter.on("test", () => {
  console.log("3");
});

myEmitter.emit("test");

//하나의 EventEmitter 객체에 설정된 콜백이 다른 EventEmitter객체에서 실행 된 이벤트에 실행되지 않는다

const EventEmitter2 = require("events");

const myEmitter1 = new EventEmitter2();

myEmitter.on("test", (a1, a2, a3) => {
  console.log(a1);
  console.log(a2);
  console.log(a3);
});
myEmitter.emit("test", "apple", "banana", "pear");

//-----------------------------------
//객체를 전달

const obj = { type: "text", data: "Hello Codeit", date: "2023-06-15" };
const EventEmitter3 = require("events");

const myEmitter2 = new EventEmitter3();

myEmitter2.on("test", (obj) => {
  console.log(obj);
});

myEmitter2.emit("test", obj);
