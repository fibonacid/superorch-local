import username from '../utils/name';
import {actionTypes} from "../actions/actionTypes";

const initialState = {
  url: "ws://localhost:8989",
  connected: false,
  username
};

const websocket = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.WEBSOCKET_OPEN:
      return {...state, connected: true };
    case actionTypes.WEBSOCKET_CLOSED:
      return { ...state, connected: false };
    default:
      return state
  }
};

export default websocket;
