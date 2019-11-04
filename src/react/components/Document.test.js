import React from "react";
import {shallow} from 'enzyme'
import Document from "./Document";
import { Provider } from 'react-redux'
import configureStore from "../store";

const mockStore = configureStore();

describe("Document", () => {
  it ('works', () => {
    // mount component (shallow)
    const component = shallow(
      <Provider store={mockStore}>
        <Document/>
      </Provider>
    );
    // unmount component
    component.unmount();
  });
});
