import document, {initialState} from '../../reducers/chat/document';

describe('document (Reducer)', () => {

  it('Should return the initial state', () => {
    const result = document(undefined, {type:"foo"});
    expect(result).toEqual(initialState);
  });
});
