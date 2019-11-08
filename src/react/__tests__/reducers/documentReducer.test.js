import {documentReducer} from '../../reducers/documentReducer';
import {actionTypes} from "../../actions/actionTypes";
import {initialState} from "../../reducers/documentReducer";
import _ from 'lodash'

describe('document (Reducer)', () => {

  it('Should return the initial state', () => {
    const result = documentReducer(undefined, {type:"foo"});
    expect(result).toEqual(initialState);
  });

  it('Should handle MESSAGE_RECEIVED', () => {
    const action = {
      type: actionTypes.MESSAGE_RECEIVED,
      data: { message: 'foo' }
    };
    const expectedResult = _.merge({}, initialState, { shared: "foo" });
    const result = documentReducer(undefined, action);
    expect(result).toEqual(expectedResult);
  });

  describe('when state is already populated', () => {
    it('Should handle MESSAGE_RECEIVED', () => {}).todo();
  });

});
