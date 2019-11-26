import username from '../utils/name';
import {actionTypes} from "../actions/actionTypes";

const initialState = {
  url: "ws://localhost:8989",
  connected: false,
  username
};

export const websocketReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.WEBSOCKET_CONNECT:
      return {
        ...state,
        connected: true
      };
    default:
      return state
  }
};
