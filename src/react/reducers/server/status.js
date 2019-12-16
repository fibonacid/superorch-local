import { actionTypes } from "../../actions/actionTypes";

const initialState = {
  isRunning: false
};

export default function status(state = initialState, action) {
  switch (action.type) {
    case actionTypes.S_SERVER_STARTED:
      return {
        ...state,
        isRunning: true,
        ...action.data
      };
    default:
      return state;
  }
}
