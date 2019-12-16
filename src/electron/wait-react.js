/**
 * This script is used as an alternative entry point for development.
 * Running 'yarn run dev' this script will wait for the react server 3000
 * to become available and only then it will launch the electron app.
 * @author Lorenzo Rivosecchi
 * @see https://medium.com/@johndyer24/building-a-production-electron-create-react-app-application-with-shared-code-using-electron-builder-c1f70f0e2649
 */

const net = require("net");
const port = process.env.PORT ? process.env.PORT - 100 : 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startedElectron = false;
const tryConnection = () =>
  client.connect({ port: port }, () => {
    client.end();
    if (!startedElectron) {
      console.log("starting electron");
      startedElectron = true;
      const exec = require("child_process").exec;
      const electron = exec("yarn run start:electron");
      electron.stdout.on("data", function(data) {
        console.log("stdout: " + data.toString());
      });
    }
  });

tryConnection();

client.on("error", error => {
  setTimeout(tryConnection, 1000);
});
