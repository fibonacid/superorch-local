const WebSocket = require("ws");

function launchWSServer(options) {
  const server = new WebSocket.Server({
    port: process.env["SOCKET_PORT"] || 8989
  });

  let counter = 100;

  // When there is a new connection:
  server.on("connection", function(socket, req, client) {
    counter++;

    // Assign a unique id to the client
    const id = counter;
    console.log([id, "connection open"]);

    // Attach id to socket instance
    socket["userId"] = id;
    options.onOpen && options.onOpen(id);

    // When a client disconnects
    socket.on("close", function(reasonCode, description) {
      console.log([id, "connection closed"]);
      options.onClose && options.onClose(id, description);
    });

    // When client sends a message
    socket.on("message", function(message) {
      console.log([id, "message received"]);
      options.onMessage && options.onMessage(id, message);
    });
  });
}

module.exports = {
  launchWSServer
};
