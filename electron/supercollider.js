const sc = require("supercolliderjs");

const options = {
  // post verbose messages to console
  //debug: true,
  // echo all commands sent TO sclang to console
  echo: true
};

function launchSuperCollider() {
  // Display info
  return sc.lang.boot(options).then(
    lang => {
      // Up and ready for action
      //console.log(lang);
    },
    // Error handler if it fails to start or fails to compile
    error => console.error(error)
  );
}

module.exports = {
  launchSuperCollider
};
