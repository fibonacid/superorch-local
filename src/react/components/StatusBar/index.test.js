import React from "react";
import StatusBar from './StatusBar';
import {Provider} from "react-redux";
import {shallow} from "enzyme";
import { createMockStore } from 'redux-test-utils';

const requiredProps = {
  appName: "test",
  appVersion: "1.0",
  isConnected: true
};

let wrapper;
beforeEach(() => {
  const initialState = {};
  const store = createMockStore(initialState);
  wrapper = shallow(
    <Provider store={store}>
      <StatusBar {...requiredProps} />
    </Provider>
  );
});

afterEach(() => {
  wrapper.unmount();
});


describe('StatusBar (Container)', () => {
  it("Should render without errors", () => {
    expect(wrapper).toBeDefined();
  });
});
