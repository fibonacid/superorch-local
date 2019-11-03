const WebSocket = require('ws');

const eventTypes = {
  ADD_USER: "ADD_USER",
  ADD_MESSAGE: "ADD_MESSAGE",
  USERS_LIST: "USER_LIST"
};

const server = new WebSocket.Server({
  port: process.env['SOCKET_PORT'] || 8989
});

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

// List of connected users
let users = [];

// Keep a register of how many
// clients connect to the server
let clientIndex = 0;

/* ==============================
 *    DEFINE EVENT HANDLERS
 * ============================== */

// When there is a new connection:
server.on('connection', function(socket) {
  console.log('A user has connected');
  // Update client index
  clientIndex++;
  const clientId = clientIndex;

  // When a client disconnects
  socket.on('close', function(reasonCode, description) {
    console.log(`A user has disconnected`);
    // Delete users that belong to this socket
    users = users.filter(user =>
      (user.clientId !== clientId)
    );
    // Broadcast new user list
    broadcast({
      type: eventTypes.USERS_LIST,
      users
    }, socket);
  });

  // When client sends a message
  socket.on('message', function(message) {
    console.log(message);
    const data = JSON.parse(message);
    // Do different things according to
    // the type of message received
    switch (data.type) {
      // If client want to add a user:
      case eventTypes.ADD_USER: {
        // Add user to the array
        users.push({
          name: data.name,
          id: users.length + 1,
          clientId
        });
        // Send new user list
        socket.send(JSON.stringify({
          type: eventTypes.USERS_LIST,
          users
        }));
        broadcast({
          type: eventTypes.USERS_LIST,
          users
        }, socket);
        break
      }

      // If the client want to add a message
      case eventTypes.ADD_MESSAGE:
        // Send it to everybody
        broadcast({
          type: eventTypes.ADD_MESSAGE,
          message: data.message,
          author: data.author
        }, socket);
        break;
      default:
        break
    }
  })
});

