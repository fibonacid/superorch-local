import React from "react";
import {shallow} from 'enzyme'
import Document from '../Document';
import {findByTestAttr} from "../../utils/testing";
import toJson from 'enzyme-to-json';

const setUp = (props={}) => {
  const component = shallow(<Document {...props} />);
  return component;
};

describe('Header Component', () => {

  describe('has props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        document: {
          shared: "foo"
        },
        send: () => {}
      };
      wrapper = setUp(props);
    });

    it('Should render without errors', () => {
      const component = findByTestAttr(wrapper, 'DocumentComponent');
      expect(component.length).toBe(1);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Should render a textarea', () => {
      const textarea = findByTestAttr(wrapper, 'textarea');
      expect(textarea.length).toBe(1);
    });

    it('Should render a button', () => {
      const button = findByTestAttr(wrapper, 'button');
      expect(button.length).toBe(1);
    });

    it('Should store and display text input', () => {
      const textarea = findByTestAttr(wrapper, 'textarea');
      const event = { target: { value: "hello" } };
      textarea.simulate('change', event);
      expect(wrapper.state('local')).toEqual('hello');
    });
  });

  describe('has NO props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it('Should render without errors', () => {
      const component = findByTestAttr(wrapper, 'DocumentComponent');
      expect(component.length).toBe(1);
    }).todo();
  });
});
