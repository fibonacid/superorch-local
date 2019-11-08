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


  it('Should handle TEXT_INPUT_RECEIVED', () => {
    const action = {
      type: actionTypes.TEXT_INPUT_RECEIVED,
      data: { value: 'foo', author: "pablo" }
    };
    const expectedResult = _.merge({}, initialState, {
      input: { value: 'foo', author: "pablo" }
    });
    const result = documentReducer(undefined, action);
    expect(result).toEqual(expectedResult);
  });


  it('Should handle EXEC_TEXT_RECEIVED', () => {
    const action = {
      type: actionTypes.EXEC_TEXT_RECEIVED,
      data: { value: 'foo', author: "pablo" }
    };
    const expectedResult = _.merge({}, initialState, {
      exec: { value: 'foo', author: "pablo" }
    });
    const result = documentReducer(undefined, action);
    expect(result).toEqual(expectedResult);
  });

  describe('when state is already populated', () => {
    it('Should handle MESSAGE_RECEIVED', () => {

    }).todo();
    it('Should handle TEXT_INPUT_RECEIVED', () => {

    }).todo();
    it('Should handle EXEC_TEXT_RECEIVED', () => {

    }).todo();
  });

});
