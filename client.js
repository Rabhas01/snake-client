const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  //revieveing a message from the server
  conn.on('data', message => {
    console.log(message);
  });
  
  return conn;
};

module.exports = {connect}