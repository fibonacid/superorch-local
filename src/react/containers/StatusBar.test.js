import React from "react";
import StatusBar from './StatusBar';
import {Provider} from "react-redux";
import {shallow} from "enzyme";
import { createMockStore } from 'redux-test-utils';

let wrapper;
beforeEach(() => {
  const initialState = {};
  const store = createMockStore(initialState);
  wrapper = shallow(
    <Provider store={store}>
      <StatusBar/>
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
