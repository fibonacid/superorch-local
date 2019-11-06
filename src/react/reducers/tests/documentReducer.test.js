import {documentReducer} from '../documentReducer';
import {actionTypes} from "../../actions/actionTypes";
import {initialState} from "../documentReducer";
import _ from 'lodash'

describe('documentReducer', () => {

  it('should return the initial state', () => {
    const result = documentReducer(undefined, {type:"foo"});
    expect(result).toEqual(initialState);
  });

  it('it should handle MESSAGE_RECEIVED', () => {
    const action = {
      type: actionTypes.MESSAGE_RECEIVED,
      data: { message: 'foo' }
    };
    const expectedResult = _.merge({}, initialState, { shared: "foo" });
    const result = documentReducer(undefined, action);
    expect(result).toEqual(expectedResult);
  });

  describe('when state is already populated', () => {
    it('it should handle MESSAGE_RECEIVED', () => {}).todo();
  });

});
