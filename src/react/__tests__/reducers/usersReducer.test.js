import {usersReducer} from '../../reducers/usersReducer';
import {actionTypes} from "../../actions/actionTypes";

describe('usersReducer', () => {

  it('should return the initial state', () => {
    const result = usersReducer(undefined, {type:"foo"});
    expect(result).toEqual([]);
  });

  it('it should handle USER_LIST', () => {
    const action = {
      type: actionTypes.USER_LIST,
      users: ['Al', 'John', 'Jack']
    };
    const expectedResult = ['Al', 'John', 'Jack'];
    const result = usersReducer(undefined, action);
    expect(result).toEqual(expectedResult);
  });

  describe('when state is already populated', () => {
    it('it should handle USER_LIST', () => {
      const action = {
        type: actionTypes.USER_LIST,
        users: ['Al', 'John', 'Jack']
      };
      const prevState = ['Al', 'John'];
      const expectedResult = ['Al', 'John', 'Jack'];
      const result = usersReducer(prevState, action);
      expect(result).toEqual(expectedResult);
    });
  });

});
