import React, { Component } from "react";
import { Provider } from "react-redux";
import styled from "styled-components/macro";
import normalize from "styled-normalize";
import reset from "styled-reset";
import configureStore from "./store";
import { connect as connectSocket } from "@giantmachines/redux-websocket";
import { channels } from "../shared/constants";

import { digestAppCredits } from "./actions/digestAppCredits";
import { s_message } from "./actions/server/message";

// Components
import { createGlobalStyle } from "styled-components";
import SideBar from "./components/SideBar/index";
import Header from "./components/Header/index";
import TextEditor from "./components/TextEditor/index";
import StatusBar from "./components/StatusBar/index";
import Tmp from "./components/Tmp";
import { s_clientDisconnected } from "./actions/server/clientDisconnected";
import { s_clientConnected } from "./actions/server/clientConnected";
import Console from "./components/Console/index";
import { updateBaseData } from "./actions/updateBaseData";

/* =============================================== */
/*    REDUX                                        */
/* =============================================== */

const initialState = {};
const store = configureStore(initialState);

/* =============================================== */
/*    ELECTRON                                     */
/* =============================================== */

const { ipcRenderer } = window;

if (ipcRenderer) {
  // When there are some updates available:
  ipcRenderer.on("update_available", () => {
    ipcRenderer.removeAllListeners("update_available");
    let message = "A new update is available. Downloading now...";
    console.info(message);
  });
  ipcRenderer.on("update_downloaded", () => {
    ipcRenderer.removeAllListeners("update_downloaded");
    let message =
      "Update Downloaded. It will be installed on restart. Restart now?";
    console.info(message);
  });
}

/* =============================================== */
/*    STYLES                                       */
/* =============================================== */

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${reset}
  html, body {
    height: 100%;
  }
  #root {
    height: 100%;
  }
  body {
    font-family: sans-serif;
  }
`;

// Styles
export const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledWrapper = styled.div`
  flex: 1 1 100%;
  overflow-y: auto;
  display: flex;
  border-top: solid 1px black;
  border-bottom: solid 1px black;
`;

/**
 * ============================
 *    REACT ROOT COMPONENT
 * ============================
 */
class App extends Component {
  constructor(props) {
    super(props);

    // Set base data
    store.dispatch(
      updateBaseData({
        runsOnElectron: ipcRenderer && true
      })
    );

    // If it's app runs on electron
    if (ipcRenderer) {
      // Request app info.
      ipcRenderer.send(channels.APP_INFO);
      // When request response arrives:
      ipcRenderer.on(channels.APP_INFO, (event, arg) => {
        // Send data to the store.
        store.dispatch(
          digestAppCredits({
            name: arg.appName,
            version: arg.appVersion
          })
        );
        ipcRenderer.removeAllListeners(channels.APP_INFO);
      });

      // Websocket messages
      // ------------------
      ipcRenderer.on(channels.WEBSOCKET_OPEN, (event, arg) => {
        store.dispatch(s_clientConnected(arg.clientId, arg.clientData));
      });
      ipcRenderer.on(channels.WEBSOCKET_CLOSED, (event, arg) => {
        store.dispatch(s_clientDisconnected(arg.clientId));
      });
      ipcRenderer.on(channels.WEBSOCKET_MESSAGE, (event, arg) => {
        store.dispatch(s_message(arg.clientId, arg.message));
      });
    }
  }

  componentDidMount() {
    // Connect to websocket
    const url = process.env.REACT_APP_SOCKET_URL;
    store.dispatch(connectSocket(url));

    // Request start of SuperCollider server
    if (ipcRenderer) {
      ipcRenderer.send(channels.START_SUPERCOLLIDER);
      ipcRenderer.send(channels.START_WS_SERVER);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <StyledContainer className="App">
          <GlobalStyle />
          <Header />
          <Tmp />
          <StyledWrapper>
            <SideBar />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "100%"
              }}
            >
              <TextEditor />
              <Console />
            </div>
          </StyledWrapper>
          <StatusBar />
        </StyledContainer>
      </Provider>
    );
  }
}

export default App;
