import {actionTypes} from "../../actions/actionTypes";
import {messageReceived} from "../../actions/messageReceived";

describe('messageReceived (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.MESSAGE_RECEIVED, data: { foo: 'bar' } };
    expect(messageReceived({ foo: 'bar' })).toEqual(expectedResult);
  });
});
