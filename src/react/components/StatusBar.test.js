import React from "react";
import {shallow} from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from "../store";
import StatusBar from "./StatusBar";

const mockStore = configureStore();

describe("StatusBar", () => {
  it ('should render my component', () => {
    // mount component (shallow)
    const component = shallow(
      <Provider store={mockStore}>
        <StatusBar/>
      </Provider>
    );
    // unmount component
    component.unmount();
  });
});
