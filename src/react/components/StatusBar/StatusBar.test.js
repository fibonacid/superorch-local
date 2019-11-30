import React from "react";
import {shallow} from 'enzyme'
import StatusBar from "./StatusBar";
import {findByTestAttr} from "../../utils/testing";
import toJson from "enzyme-to-json";

const setUp = (props={}) => {
  return shallow(<StatusBar {...props} />);
};

describe('StatusBar Component', () => {

  describe('When has props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({
        appName: "testApp",
        appVersion: "0.0.0.test"
      })
    });
    afterEach(() => {
      wrapper.unmount();
    });
    it('Should renderer without errors', () => {
      const component = findByTestAttr(wrapper, 'StatusBarComponent');
      expect(component.length).toBe(1);
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
