// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
let times = 5;
let intervalSeconds = 1;
let counter = 0;
let printHelloWorld = setInterval(
    () => {
      if (counter < times) {
        console.log('Hello World');
        counter += 1;
      } else {
        console.log('Done');
        clearInterval(printHelloWorld);
      }
    },
    1 * 1000
);
