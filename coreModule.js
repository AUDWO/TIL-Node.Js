//코어 모듈

const fs = require("fs");
let fileList = fs.readdirSync(".");
console.log(fileList);

fs.writeFileSync("new", "Hello Node.js!");

const os = require("os");

//cpu정보를 리턴한다.
console.log(os.cpus());

co;

let content = fs.readFileSync("./test", "utf8");
console.log(content);
