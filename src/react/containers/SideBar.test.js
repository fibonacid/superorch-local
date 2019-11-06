import React from "react";
import SideBar from './SideBar';
import {Provider} from "react-redux";
import {shallow} from "enzyme";
import { createMockStore } from 'redux-test-utils';

let wrapper;
beforeEach(() => {
  const initialState = {};
  const store = createMockStore(initialState);
  wrapper = shallow(
    <Provider store={store}>
      <SideBar/>
    </Provider>
  );
});

afterEach(() => {
  wrapper.unmount();
});


describe('SideBar Container', () => {
  it("Should render without errors", () => {
    expect(wrapper).toBeDefined();
  });
});
