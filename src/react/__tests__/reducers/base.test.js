import base, {initialState} from '../../reducers/base';

describe('base (Reducer)', () => {

  it('Should return the initial state', () => {
    const result = base(undefined, {type:"foo"});
    expect(result).toEqual(initialState);
  });
  //describe('when state is already populated', () => {});
});
