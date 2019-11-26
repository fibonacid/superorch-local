import flash, {flashTypes} from '../../reducers/flash';
import {actionTypes} from "../../actions/actionTypes";

describe('flash (Reducer)', () => {

  it('Should return the initial state', () => {
    const result = flash(undefined, {type:"foo"});
    expect(result).toEqual([]);
  });

  it('Should handle FLASH_INFO', () => {
    const action = {
      type: actionTypes.FLASH_INFO,
      message: 'foo',
    };
    const expectedResult = [
      { message: 'foo', type: flashTypes.info }
    ];
    const result = flash(undefined, action);
    expect(result).toEqual(expectedResult);
  });

  describe('when state is already populated', () => {
    it('Should handle FLASH_INFO', () => {
      const action = {
        type: actionTypes.FLASH_INFO,
        message: 'other foo',
      };
      const prevState = [
        {message: 'foo', type: flashTypes.info }
      ];
      const expectedResult = [
        {message: 'foo', type: flashTypes.info },
        {message: 'other foo', type: flashTypes.info }
      ];
      const result = flash(prevState, action);
      expect(result).toEqual(expectedResult);
    });
  });

});
