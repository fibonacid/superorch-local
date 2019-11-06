import {appReducer} from './appReducer';
import {actionTypes} from "../actions/actionTypes";

describe('app (Reducer)', () => {

  describe('when state is not populated', () => {

    it('Should return the initial state', () => {
      const result = appReducer(undefined, {type:"foo"});
      expect(result).toEqual({});
    });

    it('Should handle APP_INFO', () => {
      const data = {
        name: 'Test',
        version: "1.0"
      };
      const action = {
        type: actionTypes.APP_INFO,
        data
      };
      const expectedResult = data;
      const result = appReducer(undefined, action);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('when state is already populated', () => {
    it('Should handle APP_INFO', () => {
      const state = {
        name: 'Test',
        version: "1.0"
      };
      const data = {
        foo: 'bar'
      };
      const action = {
        type: actionTypes.APP_INFO,
        data
      };
      const expectedResult = {
        ...state,
        ...data
      };
      const result = appReducer(state, action);
      expect(result).toEqual(expectedResult);
    });
  });
});
