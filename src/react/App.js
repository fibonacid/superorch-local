import React, { Component } from 'react';
import {Provider} from "react-redux";
import configureStore from "./store";
import { channels } from '../shared/constants';
import * as styled from './App.styles';

// Simple Components
import Header from "./components/Header";
import StatusBar from "./components/StatusBar";
import {notificationTypes} from "./utils/constants";
import {addNotification} from "./actions/actions";

// Connected Components
import Document from "./containers/Document";
import Notifications from "./containers/Notifications";
import SideBar from "./containers/SideBar";

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
        <styled.Container className="App">
            <styled.GlobalStyle/>
            <Header appName={this.state.appName} />
            <styled.Wrapper>
              <SideBar />
              <Document />
              <Notifications />
            </styled.Wrapper>
            <StatusBar appName={this.state.appName} appVersion={this.state.appVersion}/>
        </styled.Container>
      </Provider>
    );
  }
}

export default App;
