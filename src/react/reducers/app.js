import { actionTypes } from "../actions/actionTypes";

const app = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.INIT_APP_INFO:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
};

export default app;
