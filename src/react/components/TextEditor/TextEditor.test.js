import React from "react";
import TextEditor from "./TextEditor";
import {shallow} from 'enzyme'
import {findByTestAttr} from "../../utils/testing";
import toJson from "enzyme-to-json";

let props = {
  shared: "",
  send: jest.fn()
};

let wrapper;
beforeEach(() => {
  wrapper = shallow(
    <TextEditor {...props}/>
  )
});
afterEach(() => {
  wrapper.unmount();
});

describe('TextEditor (Component)', () => {
  it('Should renderer without errors', () => {
    const component = findByTestAttr(wrapper, 'TextEditorComponent');
    expect(component.length).toBe(1);
  });
});
