import React from "react";
import TextEditor from '../../containers/TextEditor';
import {Provider} from "react-redux";
import {shallow} from "enzyme";
import { createMockStore } from 'redux-test-utils';

let wrapper;
beforeEach(() => {
  const initialState = {};
  const store = createMockStore(initialState);
  wrapper = shallow(
    <Provider store={store}>
      <TextEditor/>
    </Provider>
  );
});

afterEach(() => {
  wrapper.unmount();
});


describe('TextEditor (Container)', () => {
  it("Should render without errors", () => {
    expect(wrapper).toBeDefined();
  });
});
