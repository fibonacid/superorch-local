import configureStore from "./store";
import express from "express";
import WebSocket from "ws";
import http from "http";

require("dotenv").config();

//
//  Create redux store.
//
const store = configureStore({});

//
//  Create express app.
//
const app = express();

//
// Create HTTP server.
//
const server = http.createServer(app);
const wss = new WebSocket.Server({ clientTracking: false, noServer: true });

//
// Start the server.
//
const port = process.env.SERVER_PORT || 8000;
server.listen(port, function() {
  console.log("Listening on http://localhost:%s", port);
});
