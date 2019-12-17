const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");

/**
 * CREATE SERVER
 * ==================
 * @param options
 */
function createServer(options) {
  const app = express();

  // If app runs in development mode:
  if (process.env.NODE_ENV === "development") {
    // Serve react app using a proxy connected to
    // the development server.

    const proxy = require("express-http-proxy");
    app.use("/", proxy(process.env.ELECTRON_START_URL));
  }
  // Else, if app runs in production:
  else if (process.env.NODE_ENV === "production") {
    // Serve react app from the files located
    // inside the build folder:

    // Include static assets
    app.use("/static", express.static(path.join(__dirname, "../static")));
    // Respond with index.html
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../index.html"));
    });
  }

  //initialize a simple http server
  const server = http.createServer(app);

  const wss = new WebSocket.Server({ server });

  let clientCount = 100;

  // When there is a new connection:
  wss.on("connection", function(socket, req, client) {
    clientCount++;

    // Assign a unique id to the client
    const id = clientCount;
    console.log([id, "connection open"]);

    // Attach id to socket instance
    socket["clientId"] = id;
    options.handleSocketOpen(id);

    // When a client disconnects
    socket.on("close", function(reasonCode, description) {
      console.log([id, "connection closed"]);
      options.handleSocketClose(id, description);
    });

    // When client sends a message
    socket.on("message", function(message) {
      console.log([id, "message received"]);
      options.handleSocketMessage(id, message);
    });
  });

  return {server, wss};
}

/**
 * BROADCAST
 * ===========================================
 * This function is used to deliver a message
 * to all the connected clients except the one
 * that sent the message.
 * @param wss
 * @param clientId
 * @param message
 */
function broadcast(wss, clientId, message) {
  const socket = getSocketByClientId(wss, clientId);
  console.log([clientId, "message broadcasted"]);
  console.group();
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN && client !== socket) {
      client.send(JSON.stringify(message));
    }
  });
  console.groupEnd();
}

/**
 * TRANSMIT
 * ===========================================
 * @param wss
 * @param clientId
 * @param message
 */
function transmit(wss, clientId, message) {
  const socket = getSocketByClientId(wss, clientId);
  if (socket) {
    socket.send(JSON.stringify(message));
    console.log([clientId, "message transmitted"]);
  } else {
    console.error(`socket ${clientId} is undefined`);
  }
}

/**
 *
 * @param wss
 * @param clientId
 * @returns {*}
 */
function getSocketByClientId(wss, clientId) {
  let object = undefined;
  wss.clients.forEach(client => {
    if (client.clientId === clientId) {
      object = client;
    }
  });
  return object;
}

module.exports = {
  createServer,
  transmit,
  broadcast
};
