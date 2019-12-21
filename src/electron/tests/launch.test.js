const Application = require("spectron").Application;
const assert = require("assert");
const path = require("path");

describe("Application launch", function() {
  jest.setTimeout(15000);

  beforeEach(function() {
    this.app = new Application({
      path: path.join(__dirname, "../../../node_modules", ".bin/electron"),
      args: [path.join(__dirname, "../main.js")],
      env: {
        ELECTRON_ENABLE_LOGGING: true,
        ELECTRON_ENABLE_STACK_DUMPING: true,
        NODE_ENV: "development"
      },
      chromeDriverLogPath: "../chromedriverlog.txt"
    });
    return this.app.start();
  });

  afterEach(function() {
    if (this.app && this.app.isRunning()) {
      return this.app.stop();
    }
  });

  it("shows an initial window", function() {
    return this.app.client.getWindowCount().then(function(count) {
      assert.equal(count, 1);
      // Please note that getWindowCount() will return 2 if `dev tools` are opened.
      // assert.equal(count, 2)
    });
  });
});
