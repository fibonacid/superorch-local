import { actionTypes } from "./actionTypes";
import {
  appInfo,
  addMessage,
  addUser,
  messageReceived,
  populateUserList,
  flashInfo,
  flashWarning,
  flashError
} from "./actions";

describe('appInfo (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.APP_INFO, data: { foo: 'bar' } };
    expect(appInfo({ foo: 'bar' })).toEqual(expectedResult);
  });
});

describe('addMessage (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.ADD_MESSAGE, message: "foo" };
    expect(addMessage("foo")).toEqual(expectedResult);
  });
});

describe('addUser (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.ADD_USER, name: 'foo' };
    expect(addUser('foo')).toEqual(expectedResult);
  });
});

describe('flashInfo (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.FLASH_INFO, message: 'foo' };
    expect(flashInfo('foo')).toEqual(expectedResult);
  });
});

describe('flashWarning (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.FLASH_WARNING, message: 'foo' };
    expect(flashWarning('foo')).toEqual(expectedResult);
  });
});

describe('flashError (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.FLASH_ERROR, message: 'foo' };
    expect(flashError('foo')).toEqual(expectedResult);
  });
});

describe('messageReceived (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.MESSAGE_RECEIVED, data: { foo: 'bar' } };
    expect(messageReceived({ foo: 'bar' })).toEqual(expectedResult);
  });
});

describe('populateUserList (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.USER_LIST, users: ['Al', 'John', 'Jack'] };
    expect(populateUserList(['Al', 'John', 'Jack'])).toEqual(expectedResult);
  });
});
