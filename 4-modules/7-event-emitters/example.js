const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout

const myEmitter = new EventEmitter();

const emitted = () => myEmitter.emit('Hello World');

myEmitter.on('Hello World', () => {
  console.log('Hello World was fired');
});

emitted();
