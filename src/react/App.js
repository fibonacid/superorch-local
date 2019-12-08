import React, { Component } from "react";
import { Provider } from "react-redux";
import styled from "styled-components/macro";
import normalize from "styled-normalize";
import reset from "styled-reset";
import configureStore from "./store";
import { connect as connectSocket } from "@giantmachines/redux-websocket";
import { channels } from "../shared/constants";
import name from "./utils/name";

// Components
import { createGlobalStyle } from "styled-components";
import SideBar from "./components/SideBar/index";
import Header from "./components/Header/index";
import TextEditor from "./components/TextEditor/index";
import StatusBar from "./components/StatusBar/index";
import { addUser } from "./actions/addUser";
import { digestAppCredits } from "./actions/digestAppCredits";
import { addScQuery } from "./actions/addScQuery";

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
    }
  }

  componentDidMount() {
    // Create user
    const { myUserId } = store.getState().base;
    store.dispatch(addUser(myUserId, { name }));

    // Connect to websocket
    const url = process.env.REACT_APP_SOCKET_URL;
    store.dispatch(connectSocket(url));

    // todo: remove
    //setInterval(() => {
    //}, 10000);

    window.addEventListener("click", () => {
      store.dispatch(addScQuery(0, { value: "hello" }));
    });

    // Request start of SuperCollider server
    if (ipcRenderer) {
      ipcRenderer.send(channels.START_SUPERCOLLIDER);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <StyledContainer className="App">
          <GlobalStyle />
          <Header />
          <StyledWrapper>
            <SideBar />
            <TextEditor />
          </StyledWrapper>
          <StatusBar />
        </StyledContainer>
      </Provider>
    );
  }
}

export default App;
