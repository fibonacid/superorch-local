import React from "react";
import {shallow} from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from "../../store";
import Document from '../Document';

const mockStore = configureStore();

let component;
beforeEach(() => {
  component = shallow(
    <Provider store={mockStore}>
      <Document/>
    </Provider>
  );

});
afterEach(() => {
  component.unmount();
});

describe("Document", () => {

  it('should render', () => {});

  it('should have a textarea and a button', () => {
    /*expect(component.find('styled.TextArea').length).toEqual(1);
    expect(component.find('styled.Button').length).toEqual(1);*/
  }).todo();

  it("should create an entry in component state", () => {
    /*const textarea = component.find('styled.TextArea');
    textarea.simulate('change', { target: textarea, value: 'foo' });
    expect(component.state.local).toEqual('foo');*/
  }).todo();
});
