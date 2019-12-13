const sc = require("supercolliderjs");

const options = {
  // post verbose messages to console
  //debug: true,
  // echo all commands sent TO sclang to console
  echo: true
};

function launchSuperCollider() {
  // Display info
  return sc.lang.boot(options);
}

module.exports = {
  launchSuperCollider
};
