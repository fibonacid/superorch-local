import {actionTypes} from "../../actions/actionTypes";
import {initAppInfo} from "../../actions/initAppInfo";

describe('initAppInfo (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.INIT_APP_INFO, data: { foo: 'bar' } };
    expect(initAppInfo({ foo: 'bar' })).toEqual(expectedResult);
  });
});
