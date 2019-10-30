import React, { Component } from 'react';
import {Provider} from "react-redux";
import configureStore from "./store";
import { connect } from '@giantmachines/redux-websocket'
import styled from 'styled-components'

// Components
import Document from "./components/Document";

// Styles
const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const initialState = {};
const store = configureStore(initialState);

class App extends Component {

  constructor(props) {
    super(props);
    store.dispatch(connect('ws://localhost:8000/socket.io/?EIO=3&transport=websocket'));
  }

  render() {
    return (
      <Provider store={store}>
        <StyledContainer className="App">
            <h1>ColliderChat</h1>
            <Document />
        </StyledContainer>
      </Provider>
    );
  }
}

export default App;
