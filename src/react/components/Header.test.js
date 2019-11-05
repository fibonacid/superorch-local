import React from "react";
import {shallow} from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from "../store";
import Header from "./Header";

const mockStore = configureStore();

describe("Header", () => {
  it ('works', () => {
    // mount component (shallow)
    const component = shallow(
      <Provider store={mockStore}>
        <Header/>
      </Provider>
    );
    // unmount component
    component.unmount();
  });
});
