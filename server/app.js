const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8989 })

const users = [];

/**
 * BROADCAST
 * ===========================================
 * This function is used to deliver a message
 * to all the connected clients except the one
 * that sent the message.
 * @param data
 * @param socket
 */
function broadcast(data, socket) {
  server.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== socket) {
      client.send(JSON.stringify(data))
    }
  })
}

/* ==============================
 *    DEFINE EVENT HANDLERS
 * ============================== */

// When there is a new connection:
server.on('connection', function(socket) {
  console.log('A user has connected');
  // When client sends a message
  socket.on('message', function(message) {
    console.log(message);
    // Broadcast the message
    broadcast(message, socket)
  })
});
