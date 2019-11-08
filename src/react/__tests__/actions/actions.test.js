import { actionTypes } from "../../actions/actionTypes";
import * as action from "../../actions/actions";

describe('appInfo (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.APP_INFO, data: { foo: 'bar' } };
    expect(action.appInfo({ foo: 'bar' })).toEqual(expectedResult);
  });
});

describe('addMessage (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.ADD_MESSAGE, message: "foo" };
    expect(action.addMessage("foo")).toEqual(expectedResult);
  });
});

describe('addUser (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.ADD_USER, name: 'foo' };
    expect(action.addUser('foo')).toEqual(expectedResult);
  });
});

describe('flashInfo (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.FLASH_INFO, message: 'foo' };
    expect(action.flashInfo('foo')).toEqual(expectedResult);
  });
});

describe('flashWarning (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.FLASH_WARNING, message: 'foo' };
    expect(action.flashWarning('foo')).toEqual(expectedResult);
  });
});

describe('flashError (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.FLASH_ERROR, message: 'foo' };
    expect(action.flashError('foo')).toEqual(expectedResult);
  });
});

describe('messageReceived (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.MESSAGE_RECEIVED, data: { foo: 'bar' } };
    expect(action.messageReceived({ foo: 'bar' })).toEqual(expectedResult);
  });
});

describe('textInput (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.TEXT_INPUT, data: "foo" };
    expect(action.textInput("foo")).toEqual(expectedResult);
  });
});

describe('textInputReceived (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.TEXT_INPUT_RECEIVED, data: "foo" };
    expect(action.textInputReceived("foo")).toEqual(expectedResult);
  });
});

describe('execText (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.EXEC_TEXT, data: "foo" };
    expect(action.execText("foo")).toEqual(expectedResult);
  });
});

describe('execTextReceived (Action)', () => {
  it('works', () => {
    const expectedResult = { type: actionTypes.EXEC_TEXT_RECEIVED, data: "foo" };
    expect(action.execTextReceived("foo")).toEqual(expectedResult);
  });
});
