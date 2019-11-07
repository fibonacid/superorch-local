import React from "react";
import {shallow} from 'enzyme'
import SideBar from "../../components/SideBar";
import {findByTestAttr} from "../../utils/testing";
import toJson from "enzyme-to-json";

const setUp = (props={}) => {
  return shallow(<SideBar {...props} />);
};

describe('SideBar Component', () => {

  describe('When has props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({
        users: [{ name: "Al" },{ name: "John" }]
      })
    });
    afterEach(() => {
      wrapper.unmount();
    });
    it('Should renderer without errors', () => {
      const component = findByTestAttr(wrapper, 'SideBarComponent');
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
