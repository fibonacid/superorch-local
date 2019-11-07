import React from "react";
import {shallow} from 'enzyme'
import FlashMessage from "./FlashMessage";
import {findByTestAttr} from "../utils/testing";
import toJson from "enzyme-to-json";

const setUp = (props={}) => {
  return shallow(<FlashMessage {...props} />);
};

describe('FlashMessage Component', () => {

  describe('When has props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({
        message: "foo",
        type: "bar"
      })
    });
    afterEach(() => {
      wrapper.unmount();
    });
    it('Should renderer without errors', () => {
      const component = findByTestAttr(wrapper, 'FlashMessageComponent');
      expect(component.length).toBe(1);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('When has NO props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp()
    });
    afterEach(() => {
      wrapper.unmount();
    });
    it('Should not render', () => {})
  })
});
