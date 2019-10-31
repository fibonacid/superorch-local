const defaultState = `/* Hello, i'm a document */`;

export const documentReducer = (state=defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};
