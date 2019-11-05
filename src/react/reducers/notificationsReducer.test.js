import {notificationsReducer} from './notificationsReducer';
import {actionTypes} from "../actions/actionTypes";
import _ from 'lodash'

describe('notificationsReducer', () => {

  it('should return the initial state', () => {
    const result = notificationsReducer(undefined, {type:"foo"});
    expect(result).toEqual([]);
  });

  it('it should handle ADD_NOTIFICATION', () => {
    const action = {
      type: actionTypes.ADD_NOTIFICATION,
      message: 'foo',
      kind: 'bar'
    };
    const expectedResult = [
      {message: 'foo', kind: 'bar'}
    ];
    const result = notificationsReducer(undefined, action);
    expect(result).toEqual(expectedResult);
  });

  describe('when state is already populated', () => {
    it('it should handle ADD_NOTIFICATION', () => {
      const action = {
        type: actionTypes.ADD_NOTIFICATION,
        message: 'other foo',
        kind: 'other bar'
      };
      const prevState = [
        {message: 'foo', kind: 'bar'}
      ];
      const expectedResult = [
        {message: 'foo', kind: 'bar'},
        {message: 'other foo', kind: 'other bar'}
      ];
      const result = notificationsReducer(prevState, action);
      expect(result).toEqual(expectedResult);
    });
  });

});
