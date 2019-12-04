import React, { Component } from "react";
import { Provider } from "react-redux";
import styled from "styled-components/macro";
import normalize from "styled-normalize";
import reset from "styled-reset";
import configureStore from "./store";
import { connect as connectSocket } from "@giantmachines/redux-websocket";
import { channels } from "../shared/constants";
import { flashInfo } from "./actions/flashActions";
import { appInfo } from "./actions/appInfo";
import name from "./utils/name";

// Components
import { createGlobalStyle } from "styled-components";
import Notifications from "./components/Notifications/index";
import SideBar from "./components/SideBar/index";
import Header from "./components/Header/index";
import TextEditor from "./components/TextEditor/index";
import StatusBar from "./components/StatusBar/index";
import { addUser } from "./actions/usersActions";

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
    store.dispatch(flashInfo(message));
  });
  ipcRenderer.on("update_downloaded", () => {
    ipcRenderer.removeAllListeners("update_downloaded");
    let message =
      "Update Downloaded. It will be installed on restart. Restart now?";
    store.dispatch(flashInfo(message));
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

    if (ipcRenderer) {
      // Request app info.
      ipcRenderer.send(channels.APP_INFO);
      // When request response arrives:
      ipcRenderer.on(channels.APP_INFO, (event, arg) => {
        // Send data to the store.
        store.dispatch(
          appInfo({
            name: arg.appName,
            version: arg.appVersion
          })
        );
        ipcRenderer.removeAllListeners(channels.APP_INFO);
      });
    }
  }

  componentDidMount() {
    // Create user
    store.dispatch(addUser(null, { name }));

    // Connect to websocket
    const url = process.env.REACT_APP_SOCKET_URL;
    store.dispatch(connectSocket(url));

    // Request start of SuperCollider server
    ipcRenderer.send(channels.START_SUPERCOLLIDER);
  }

  render() {
    return (
      <Provider store={store}>
        <StyledContainer className="App">
          <GlobalStyle />
          <Header />
          <StyledWrapper>
            <SideBar />
            {/*<TextEditor />*/}
            <Notifications />
          </StyledWrapper>
          <StatusBar />
        </StyledContainer>
      </Provider>
    );
  }
}

export default App;
