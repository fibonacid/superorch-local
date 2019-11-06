import React, { Component } from 'react';
import {Provider} from "react-redux";
import configureStore from "./store";
import { channels } from '../shared/constants';
import * as styled from './App.styles';
import {addNotification, appInfo} from "./actions/actions";
import {notificationTypes} from "./utils/constants";

// Containers
import Document from "./containers/Document";
import Notifications from "./containers/Notifications";
import SideBar from "./containers/SideBar";
import Header from "./containers/Header";
import StatusBar from "./containers/StatusBar";

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
    ipcRenderer.send(channels.APP_INFO);
    ipcRenderer.on(channels.APP_INFO, (event, arg) => {
      ipcRenderer.removeAllListeners(channels.APP_INFO);
      store.dispatch(appInfo(arg))
    });
  }

  render() {
    return (
      <Provider store={store}>
        <styled.Container className="App">
            <styled.GlobalStyle/>
            <Header />
            <styled.Wrapper>
              <SideBar />
              <Document />
              <Notifications />
            </styled.Wrapper>
            <StatusBar />
        </styled.Container>
      </Provider>
    );
  }
}

export default App;
