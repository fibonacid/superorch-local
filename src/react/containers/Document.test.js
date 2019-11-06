import React from "react";
import Document from './Document';
import {Provider} from "react-redux";
import {shallow} from "enzyme";
import { createMockStore } from 'redux-test-utils';

let wrapper;
beforeEach(() => {
  const initialState = {};
  const store = createMockStore(initialState);
  wrapper = shallow(
    <Provider store={store}>
      <Document/>
    </Provider>
  );
});

afterEach(() => {
  wrapper.unmount();
});


describe('Document Container', () => {
  it("Should render without errors", () => {
    expect(wrapper).toBeDefined();
  });
});
