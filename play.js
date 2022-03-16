const net = require('net');
// establishes a connection with the game server
const { connect } = require('./client')
console.log("Connecting ...");
connect();

const handleUserInput = function(key) {
  
  if (key === '\u0003') {
    process.exit();
  }
  
};


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on('data', key => handleUserInput(key));
  stdin.resume();
  return stdin;
};