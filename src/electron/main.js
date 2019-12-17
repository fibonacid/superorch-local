const { app, BrowserWindow, ipcMain, shell } = require("electron");
const path = require("path");
const url = require("url");
const { channels } = require("../shared/constants");
const { createServer, transmit, broadcast } = require("./server");
const sc = require("supercolliderjs");
const { autoUpdater } = require("electron-updater");

let mainWindow;
let sclang;

/*
 * This should prevent electron from displaying an error
 * dialogue every time an error is raised
 */
process.on("uncaughtException", function(error) {
  console.error(error);
});

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
      pathname: path.join(__dirname, "../../index.html"),
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
  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
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
    //createWindow();
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

// Open external link
ipcMain.on(channels.OPEN_EXT_LINK, (event, arg) => {
  shell.openExternal(arg).then(r => console.log(r));
});

// When react launch the restart_app event:
ipcMain.on("restart_app", () => {
  // Exit and update app on relaunch.
  autoUpdater.quitAndInstall();
});

// =====================================================
// SUPERCOLLIDER INTERPRETER
// =====================================================

// When react launch the start_supercollider event
ipcMain.on(channels.START_SUPERCOLLIDER, async () => {
  try {
    // Boot supercollider interpreter
    sclang = await sc.lang.boot({
      // post verbose messages to console
      //debug: true,
      // echo all commands sent TO sclang to console
      echo: true
    });
    // Boot supercollider sound server
    await sclang.interpret(`s = Server.default; s.boot;`);
    console.log("supercollider booted");
  } catch (error) {
    console.error(error);
  }
});

ipcMain.handle(channels.SUPERCOLLIDER_MESSAGE, async (event, args) => {
  return await sclang.interpret(args.message);
});

// When react launch the stop_supercollider event
ipcMain.on("stop_supercollider", () => {});

// =====================================================
// WEBSOCKET SERVER
// =====================================================

/**
 *
 */
ipcMain.on(channels.START_WS_SERVER, event => {
  console.log(channels.START_WS_SERVER);

  // When a socket connection is made:
  // --------------------------------
  const handleSocketOpen = clientId => {
    event.sender.send(channels.WEBSOCKET_OPEN, {
      clientId
    });
  };

  // When a socket connection is lost
  // --------------------------------
  const handleSocketClose = (clientId, description) => {
    event.sender.send(channels.WEBSOCKET_CLOSED, {
      clientId,
      description
    });
  };

  // When a client sends a message
  // --------------------------------
  const handleSocketMessage = (clientId, message) => {
    event.sender.send(channels.WEBSOCKET_MESSAGE, {
      clientId,
      message
    });
  };

  // Create http server with websockets
  const { server, wss } = createServer({
    handleSocketOpen,
    handleSocketClose,
    handleSocketMessage
  });

  // Activate server on port 8000
  const port = process.env.SERVER_PORT || 8000;
  server.listen(port);

  // Before app quits
  app.on("before-quit", function() {
    // Shut down server
    server.close();
  });

  event.sender.send(channels.WS_SERVER_STARTED, {
    address: require("ip").address(),
    port: server.address().port
  });

  // When server wants to transmit a message:
  ipcMain.on(channels.WEBSOCKET_TRANSMIT, (event, args) => {
    transmit(wss, args.clientId, args.message);
  });

  // When server wants to broadcast a message:
  ipcMain.on(channels.WEBSOCKET_BROADCAST, (event, args) => {
    broadcast(wss, args.clientId, args.message);
  });
});
