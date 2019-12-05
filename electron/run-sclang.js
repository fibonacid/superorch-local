const sc = require("supercolliderjs");

const options = {
  // post verbose messages to console
  debug: true,
  // echo all commands sent TO sclang to console
  echo: true
};

function bootInterpreter() {
  // Display info
  return sc.lang.boot(options).then(async lang => {
    await lang.interpret(`s = Server.default; s.boot;`);

    setInterval(() => {
      //lang.interpret(`{ SinOsc.ar(440, 0, 0.2) }.play;`)
    }, 5000);
  }, console.error);
}

module.exports = {
  bootInterpreter
};
