import React, { Component } from 'react';
import {Provider} from "react-redux";
import configureStore from "./store";
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset';
import normalize from "styled-normalize";
import { channels } from '../shared/constants';

// Components
import Header from "./components/Header";
import StatusBar from "./components/StatusBar";
import SideBar from "./components/SideBar";
import Document from "./components/Document";
import Notifications from "./components/Notifications";
import {notificationTypes} from "./utils/constants";
import {addNotification} from "./actions/actions";

/* =============================================== */
/*    STYLES                                       */
/* =============================================== */

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${reset}
  html, body {
    height: 100%;
  }
  #root {
    height: 100%;
  }
`;

// Styles
const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledWrapper = styled.div`
  flex: 1 1 100%;
  overflow-y: auto;
  display: flex;
  border-top: solid 1px black;
  border-bottom: solid 1px black;
`;

/* =============================================== */
/*    REDUX                                        */
/* =============================================== */

const initialState = {};
const store = configureStore(initialState);

/* =============================================== */
/*    ELECTRON                                     */
/* =============================================== */

const { ipcRenderer } = window;

// When there are some updates available:
ipcRenderer.on('update_available', () => {
  ipcRenderer.removeAllListeners('update_available');
  let message = 'A new update is available. Downloading now...';
  store.dispatch(addNotification(message, notificationTypes.INFO))
});


ipcRenderer.on('update_downloaded', () => {
  ipcRenderer.removeAllListeners('update_downloaded');
  let message = 'Update Downloaded. It will be installed on restart. Restart now?';
  store.dispatch(addNotification(message, notificationTypes.INFO))
});


/**
 * ============================
 *    REACT ROOT COMPONENT
 * ============================
 */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appName: '',
      appVersion: '',
    };
    ipcRenderer.send(channels.APP_INFO);
    ipcRenderer.on(channels.APP_INFO, (event, arg) => {
      ipcRenderer.removeAllListeners(channels.APP_INFO);
      const { appName, appVersion } = arg;
      this.setState({ appName, appVersion });
    });
  }

  render() {
    return (
      <Provider store={store}>
        <StyledContainer className="App">
            <GlobalStyle/>
            <Header />
            <StyledWrapper>
              <SideBar />
              <Document />
              <Notifications />
            </StyledWrapper>
            <StatusBar appName={this.state.appName} appVersion={this.state.appVersion}/>
        </StyledContainer>
      </Provider>
    );
  }
}

export default App;
