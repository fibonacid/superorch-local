import {baseReducer} from '../../reducers/baseReducer';
import {initialState} from "../../reducers/baseReducer";

describe('baseReducer', () => {

  it('should return the initial state', () => {
    const result = baseReducer(undefined, {type:"foo"});
    expect(result).toEqual(initialState);
  });
  //describe('when state is already populated', () => {});
});
