import React from "react";
import {shallow} from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from "../store";
import Notifications from "./Notifications";

const mockStore = configureStore();

describe("Notifications", () => {
  it ('works', () => {
    // mount component (shallow)
    const component = shallow(
      <Provider store={mockStore}>
        <Notifications/>
      </Provider>
    );
    // unmount component
    component.unmount();
  });
});
