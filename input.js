// Stores the active TCP connection object.
let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
// w = "Move: up"
if (key === "w") {                         
  connection.write("Move: up");
}
// s = "Move: down"
if (key === "s") {
  connection.write("Move: down");
}
// a = "Move: left"
if (key === "a") {
  connection.write("Move: left");
}
// d = "Move: right"
if (key === "d") {
  connection.write("Move: right");
}
};


const setupInput = (conn) => {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', key => handleUserInput(key));
  return stdin;
};
setupInput();


module.exports = { setupInput }