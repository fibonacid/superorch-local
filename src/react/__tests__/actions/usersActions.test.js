import {actionTypes} from "../../actions/actionTypes";
import {addUser} from "../../actions/usersActions";

describe('addUser (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.ADD_USER, name: 'foo' };
    expect(addUser('foo')).toEqual(expectedResult);
  });
});
