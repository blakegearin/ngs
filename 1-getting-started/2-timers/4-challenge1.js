const theOneFunc = seconds => {
  console.log(`Hello after ${seconds} seconds`);
};

// setTimeout(theOneFunc, 4 * 1000);

// Hello after 4 seconds
let timeoutSeconds = 4;
setTimeout(theOneFunc, timeoutSeconds * 1000, timeoutSeconds);

// Hello after 8 seconds
timeoutSeconds = 8;
setTimeout(theOneFunc, timeoutSeconds * 1000, timeoutSeconds);

// You can define only ONE function
