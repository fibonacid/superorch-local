import React, { Component } from 'react';
import {Provider} from "react-redux";
import configureStore from "./store";

const initialState = {};
const store = configureStore(initialState);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>App</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
