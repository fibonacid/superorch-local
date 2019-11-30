import React from "react";
import Notifications from './Notifications';
import {Provider} from "react-redux";
import {shallow} from "enzyme";
import { createMockStore } from 'redux-test-utils';

let wrapper;
beforeEach(() => {
  const initialState = {};
  const store = createMockStore(initialState);
  wrapper = shallow(
    <Provider store={store}>
      <Notifications/>
    </Provider>
  );
});

afterEach(() => {
  wrapper.unmount();
});


describe('Notifications Container', () => {
  it("Should render without errors", () => {
    expect(wrapper).toBeDefined();
  });
});
