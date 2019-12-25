"use strict";

require("dotenv").config();
const session = require("express-session");
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const { MongoClient, ObjectId } = require("mongodb");

//
//  Connect to database
//
let db;
MongoClient.connect(process.env.DATABASE_URL, (err, client) => {
  // ... start the server
  if (err) return console.log(err);
  db = client.db(process.env.DATABASE_NAME);
  if (db) console.log(`connected to ${db.databaseName}`);

  db.collection('system')
    .insertOne({ password: require('./helpers').password })
    .then(r => console.log('saved to database'))
 });

const app = express();
const map = new Map();

//
// We need the same instance of the session parser in express and
// WebSocket server.
//
const sessionParser = session({
  saveUninitialized: false,
  secret: "$eCuRiTy",
  resave: false
});

//
// Serve static files from the 'public' folder.
//
app.use(express.static("public"));
app.use(sessionParser);

//
//  POST /login
//
app.post("/login", function(req, res) {
  //
  // "Log in" user and set userId to session.
  //

  // Save user into the db
  db.collection("users")
    .insertOne({ name: "john" })
    .then(result => {
      //
      // Bind id to the request session.
      //
      const id = result.insertedId;

      console.log(`Updating session for user ${id}`);
      req.session.userId = id;
      res.send({ result: "OK", message: "Session updated" });
    })
    .catch(err => {
      console.log(err);
    });
});

//
// POST /logout
//
app.post("/logout", function(req, res) {
  const { userId: id } = req.session;
  if (!id) {
    return res.send({ result: "ERROR", message: "Session Not Found" });
  }

  const ws = map.get(id);

  console.log("Destroying session");
  req.session.destroy(function() {
    if (ws) ws.close();

    res.send({ result: "OK", message: "Session destroyed" });
  });

  // Delete user from the db
  db.collection("users")
    .deleteOne({ _id: ObjectId(id) })
    .then(result => {
      console.log("saved to database");
    })
    .catch(err => {
      throw err;
    });
});

//
// Create HTTP server by ourselves.
//
const index = http.createServer(app);
const wss = new WebSocket.Server({ clientTracking: false, noServer: true });

index.on("upgrade", function(request, socket, head) {
  console.log("Parsing session from request...");

  sessionParser(request, {}, () => {
    if (!request.session.userId) {
      socket.destroy();
      return;
    }

    console.log("Session is parsed!");

    wss.handleUpgrade(request, socket, head, function(ws) {
      wss.emit("connection", ws, request);
    });
  });
});

wss.on("connection", function(ws, request) {
  const userId = request.session.userId;

  map.set(userId, ws);

  ws.on("message", function(message) {
    //
    // Here we can now use session parameters.
    //
    console.log(`Received message ${message} from user ${userId}`);
  });

  ws.on("close", function() {
    map.delete(userId);
  });
});

//
// Start the server.
//
index.listen(8080, function() {
  console.log("Listening on http://localhost:8080");
});
