import React from "react";
import {shallow} from 'enzyme'
import Notifications from "./Notifications";
import {findByTestAttr} from "../utils/testing";
import toJson from "enzyme-to-json";

const setUp = (props={}) => {
  return shallow(<Notifications {...props} />);
};

describe('Notifications Component', () => {

  describe('When has props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({
       notifications: [
         { message: "First Message", type: "TEST" },
         { message: "Second Message", type: "TEST" }
       ]
      })
    });
    afterEach(() => {
      wrapper.unmount();
    });
    it('Should renderer without errors', () => {
      const component = findByTestAttr(wrapper, 'NotificationsComponent');
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
    it('Should not render', () => {}).todo();
  });
});
