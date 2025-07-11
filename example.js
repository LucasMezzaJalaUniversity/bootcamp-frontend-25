console.log("start"); // executes 1

setTimeout(() => console.log("timeOut"), 0); //send to macrotask queue when resolved 8

Promise.resolve().then(() => {
  console.log("promise");
}); //send to microtask queue 5

console.log("middle"); // executes 2

long(); // call function

for (let i = 0; i < 10000; i++) {} // executes

console.log("end"); // executes 4

async function long() {
  console.log("start of function"); // executes 3
  await Promise.resolve().then(() => {
    console.log("middle of function");
  }); //send to microtask queue 6
  console.log("end of function"); // executes once await is cleared 7
}

// start
// middle
// start of function
// end
// promise
// middle of function
// end of function
// timeOut