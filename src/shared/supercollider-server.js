const sc = require("supercolliderjs");

let context;

function bootServer() {
  // Display info
  console.info("Starting SuperCollider server");
  sc.server.boot().then(async server => {
    // Save server into context
    context.server = server;
  }, console.error);
}

module.exports = {
  bootServer
};
