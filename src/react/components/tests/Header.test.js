import React from "react";
import {shallow} from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from "../../store";
import Header from "../Header";

const mockStore = configureStore();

let component;
beforeEach(() => {
  component = shallow(
    <Provider store={mockStore}>
      <Header/>
    </Provider>
  );

});
afterEach(() => {
  component.unmount();
});


describe("Header", () => {
  // Snapshot test
  it('should render', () => {});
});
