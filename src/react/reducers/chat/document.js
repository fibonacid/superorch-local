import { actionTypes } from "../../actions/actionTypes";

const initialState = {
  id: 0,
  content: ""
};

export default function document(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_DOCUMENT:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
}
