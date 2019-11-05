import React from "react";
import {shallow} from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from "../store";
import SideBar from "./SideBar";

const mockStore = configureStore();

describe("SideBar", () => {
  it ('works', () => {
    // mount component (shallow)
    const component = shallow(
      <Provider store={mockStore}>
        <SideBar/>
      </Provider>
    );
    // unmount component
    component.unmount();
  });
});
