import name from "../utils/name";

export const initialState = {
  defaultUser: {
    id: 0,
    name
  }
};

const base = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default base;

export const selectDefaultUser = state => state.defaultUser;
