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

const { ipcRenderer } = window;

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

const initialState = {};
const store = configureStore(initialState);

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
            </StyledWrapper>
            <StatusBar appName={this.state.appName} appVersion={this.state.appVersion}/>
        </StyledContainer>
      </Provider>
    );
  }
}

export default App;