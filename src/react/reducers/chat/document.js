import {actionTypes} from "../../actions/actionTypes";

export const initialState = {};

const document = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_DOCUMENT:
      return action.data;
    default:
      return state;
  }
};

export default document;
