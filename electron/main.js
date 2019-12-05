const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const url = require("url");
const { channels } = require("../src/shared/constants");
const { autoUpdater } = require("electron-updater");
const { bootServer } = require("./run-scsynth");
const { bootInterpreter } = require("./run-sclang");

let mainWindow;

/**
 * INSTALL EXTENSIONS
 * ==========================
 * This function installs
 * useful chromium extensions
 * necessary for debugging
 */
const installExtensions = async () => {
  const installer = require("electron-devtools-installer");
  const extensions = ["REACT_DEVELOPER_TOOLS", "REDUX_DEVTOOLS"];
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  for (const name of extensions) {
    try {
      await installer.default(installer[name], forceDownload);
    } catch (e) {
      console.log(`Error installing ${name} extension: ${e.message}`);
    }
  }
};

/**
 * CREATE WINDOW
 * ==============
 * This function creates the window
 * in which the application will reside
 */
function createWindow() {
  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "../index.html"),
      protocol: "file:",
      slashes: true
    });
  // Create Window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Launch preload script before the window is rendered
      preload: path.join(__dirname, "preload.js")
    }
  });
  // Load index.html
  mainWindow.loadURL(startUrl);

  mainWindow.loadURL(startUrl);
  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  // When the window is closed:
  mainWindow.on("closed", function() {
    // Delete window.
    mainWindow = null;
  });
}

/* ========================================= */
/*   APPLICATION EVENTS
/* ========================================= */

// When app is ready:
app.on("ready", async () => {
  if (process.env.NODE_ENV === "development") {
    await installExtensions();
  }
  // Create window
  createWindow();
  // Check for updates
  await autoUpdater.checkForUpdatesAndNotify();
});

// When all windows are closed
app.on("window-all-closed", function() {
  // If it's a Mac:
  if (process.platform !== "darwin") {
    // Quit application
    app.quit();
  }
});

// When the user try to relaunch the app:
app.on("activate", function() {
  // If there is at least one window open:
  if (mainWindow === null || process.env["NODE_ENV"] === "development") {
    // Create another window
    createWindow();
  }
});

/* =====================================================
 *   IPC MAIN EVENTS
 * =====================================================
 * These next event listener regulates the communication
 * between electron and react.
 */

// When there is a new version of the app:
autoUpdater.on("update-available", () => {
  // Send notification to react.
  mainWindow.webContents.send("update_available");
});

// When a new version has been downloaded:
autoUpdater.on("update-downloaded", () => {
  // Send notification to react.
  mainWindow.webContents.send("update_downloaded");
});

// Send app information to react
ipcMain.on(channels.APP_INFO, event => {
  event.sender.send(channels.APP_INFO, {
    appName: app.getName(),
    appVersion: app.getVersion()
  });
});

// When react launch the restart_app event:
ipcMain.on("restart_app", () => {
  // Exit and update app on relaunch.
  autoUpdater.quitAndInstall();
});

// When react launch the start_supercollider event
ipcMain.on("start_supercollider", async () => {
  //bootServer();
  bootInterpreter();
});

// When react launch the stop_supercollider event
ipcMain.on("stop_supercollider", () => {});
