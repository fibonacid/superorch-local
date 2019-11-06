import { actionTypes } from "./actionTypes";
import {
  addMessage,
  addUser,
  addNotification,
  messageReceived,
  populateUserList
} from "./actions";

describe('addMessage', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.ADD_MESSAGE, message: "foo" };
    expect(addMessage("foo")).toEqual(expectedResult);
  });
});

describe('addUser', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.ADD_USER, name: 'foo' };
    expect(addUser('foo')).toEqual(expectedResult);
  });
});

describe('addNotification', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.ADD_NOTIFICATION, message: 'foo', kind: "INFO" };
    expect(addNotification('foo', 'INFO')).toEqual(expectedResult);
  });
});

describe('messageReceived', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.MESSAGE_RECEIVED, data: { foo: 'bar' } };
    expect(messageReceived({ foo: 'bar' })).toEqual(expectedResult);
  });
});

describe('populateUserList', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.USER_LIST, users: ['Al', 'John', 'Jack'] };
    expect(populateUserList(['Al', 'John', 'Jack'])).toEqual(expectedResult);
  });
});
