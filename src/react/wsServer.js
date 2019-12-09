import WebSocket from "ws";
//import { wsMessageReceived } from "./actions/client/messageReceived";
//import { createClient } from "./actions/createClient";
//import { destroyClient } from "./actions/destroyClient";

const wsServer = new WebSocket.Server({
  port: process.env["SOCKET_PORT"] || 8989
});

let counter = 100;

// When there is a new connection:
wsServer.on("connection", function(socket, req, client) {
  counter++;

  // Assign a unique id to the client
  const id = counter;
  console.log([id, "connection open"]);

  // Attach id to socket instance
  socket["userId"] = id;
  //store.dispatch(createClient({ id }));

  // When a client disconnects
  socket.on("close", function(reasonCode, description) {
    console.log([id, "connection closed"]);
    //store.dispatch(destroyClient(id));
  });

  // When client sends a message
  socket.on("message", function(message) {
    console.log([id, "message received"]);
    //store.dispatch(wsMessageReceived(id, message));
  });
});
