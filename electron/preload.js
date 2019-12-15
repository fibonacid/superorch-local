const { ipcRenderer } = require("electron");
window.ipcRenderer = ipcRenderer;

if (process.env.NODE_ENV === "test") {
  window.electronRequire = require;
}
