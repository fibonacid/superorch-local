const WebSocket = require("ws");

/**
 * LAUNCH WS SERVER
 * ==================
 *
 * @param options
 */
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
    socket["clientId"] = id;
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

  return server;
}

/**
 * BROADCAST
 * ===========================================
 * This function is used to deliver a message
 * to all the connected clients except the one
 * that sent the message.
 * @param server
 * @param clientId
 * @param message
 */
function broadcast(server, clientId, message) {
  const socket = getSocketByClientId(server, clientId);
  console.log([clientId, "message broadcasted"]);
  console.group();
  server.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN && client !== socket) {
      client.send(JSON.stringify(message));
    }
  });
  console.groupEnd();
}

/**
 * TRANSMIT
 * ===========================================
 * @param server
 * @param clientId
 * @param message
 */
function transmit(server, clientId, message) {
  const socket = getSocketByClientId(server, clientId);
  if (socket) {
    socket.send(JSON.stringify(message));
    console.log([clientId, "message transmitted"]);
  } else {
    console.error("socket is undefined");
  }
}

/**
 *
 * @param server
 * @param clientId
 * @returns {*}
 */
function getSocketByClientId(server, clientId) {
  return server.clients.forEach(client => {
    if (client.clientId === clientId) {
      return client;
    }
  });
}

module.exports = {
  launchWSServer,
  transmit,
  broadcast
};
