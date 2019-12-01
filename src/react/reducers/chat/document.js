import {actionTypes} from "../../actions/actionTypes";

export const initialState = {
  pushedBy: undefined,
  state: {}
};

const document = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_DOCUMENT:
      return state;
    default:
      return state;
  }
};

export default document;
