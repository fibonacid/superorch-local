import {actionTypes} from "../../actions/actionTypes";
import {flashError, flashInfo, flashWarning} from "../../actions/flashActions";

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
