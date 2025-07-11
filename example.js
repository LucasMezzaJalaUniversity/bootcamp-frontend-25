console.log("start");

setTimeout(() => console.log("timeOut"), 0);

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("middle");

for (let i = 0; i < 10000; i++) {}

console.log("end");