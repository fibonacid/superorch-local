import React from "react";
import {shallow} from 'enzyme'
import Document from './Document';
import {findByTestAttr} from "../utils/testing";
import toJson from 'enzyme-to-json';

const requiredProps = {
  shared: "/* Initial Text */"
};

function setUp(props=requiredProps) {
  return shallow(
    <Document {...props}/>
  )
}

describe('Document Component', () => {

  it('Should render without errors', () => {
    const wrapper = setUp();
    const component = findByTestAttr(wrapper, 'DocumentComponent');
    expect(component.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should render a textarea', () => {
    const wrapper = setUp();
    const textarea = findByTestAttr(wrapper, 'textarea');
    expect(textarea.length).toBe(1);
  });

  it('Should render a button', () => {
    const wrapper = setUp();
    const button = findByTestAttr(wrapper, 'button');
    expect(button.length).toBe(1);
  });

  describe('When new props arrive', () => {

    it('Should merge shared text with local text', () => {
      const wrapper = setUp();
      wrapper.setState({ local: "foo" });
      wrapper.setProps({ shared: "bar" });
      wrapper.instance().componentDidUpdate();
      //expect(wrapper.state('local')).toMatch(/bar/);
      expect(wrapper.state('local')).toMatch(/foo(bar)/);
    });
  });

  describe('When user enters some text', () => {
    const fakeEvent = { target: { value: "hello" } };
    it('Should store text input into the state', () => {
      const wrapper = setUp();
      const textarea = findByTestAttr(wrapper, 'textarea');
      textarea.simulate('change', fakeEvent);
      expect(wrapper.state('local')).toEqual('hello');
    });
  });

  describe('When user clicks the button', () => {
    it.skip('should fire the send prop function', () => {
      const wrapper = shallow(<Document />);
      const send = jest.fn();
      console.log(wrapper.debug())
      wrapper.setProps({send});
      const button = findByTestAttr(wrapper, 'button');
      button.simulate('click');
      expect(send).toHaveBeenCalledTimes(1);
    })
  })

});
