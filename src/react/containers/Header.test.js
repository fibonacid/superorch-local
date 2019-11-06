import React from "react";
import Header from './Header';
import {Provider} from "react-redux";
import {shallow} from "enzyme";
import { createMockStore } from 'redux-test-utils';

let wrapper;
beforeEach(() => {
  const initialState = {};
  const store = createMockStore(initialState);
  wrapper = shallow(
    <Provider store={store}>
      <Header/>
    </Provider>
  );
});

afterEach(() => {
  wrapper.unmount();
});


describe('Header (Container)', () => {
  it("Should render without errors", () => {
    expect(wrapper).toBeDefined();
  });

  it("Should have prop appName set", () => {
    expect(wrapper.props())
  })
});
