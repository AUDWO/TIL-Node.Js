//동기 실행 (readFileSunc)
console.log("start");

let content = fs.readFileSync("./test", "utf8");
console.log(content);

console.log("end");

//비동기 실행 (readFile)
console.log("start");

fs.readFile("./tst", "utf8", (error, data) => {
  console.log(data);
});

console.log("end");
