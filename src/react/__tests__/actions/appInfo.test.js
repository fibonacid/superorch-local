import {actionTypes} from "../../actions/actionTypes";
import {appInfo} from "../../actions/appInfo";

describe('appInfo (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.APP_INFO, data: { foo: 'bar' } };
    expect(appInfo({ foo: 'bar' })).toEqual(expectedResult);
  });
});
