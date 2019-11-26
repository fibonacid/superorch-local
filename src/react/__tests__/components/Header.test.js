import React from "react";
import {shallow} from 'enzyme'
import Header from "../../components/Header/Header";
import {findByTestAttr} from "../../utils/testing";
import toJson from "enzyme-to-json";

const setUp = (props={}) => {
  return shallow(<Header {...props} />);
};

describe('Header Component', () => {

  describe('When has props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({ appName: "test"} )
    });
    afterEach(() => {
      wrapper.unmount();
    });
    it('Should renderer without errors', () => {
      const component = findByTestAttr(wrapper, 'HeaderComponent');
      expect(component.length).toBe(1);
    });
    it('Should have a title', () => {
      const title = findByTestAttr(wrapper, 'title');
      expect(title.text()).toBeTruthy();
    })
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
