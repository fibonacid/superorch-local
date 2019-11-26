import {actionTypes} from "../../actions/actionTypes";

export const initialState = {
  input: { value: "", author: "" },
  exec: { value: "", author: "" }
};

const document = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.MESSAGE_RECEIVED:
        return {
          ...state,
          shared: action.data.message
        };
    case actionTypes.TEXT_INPUT_RECEIVED:
      return {
        ...state,
        input: {
          value: action.data.value,
          author: action.data.author
        }
      };
    case actionTypes.EXEC_TEXT_RECEIVED:
      return {
        ...state,
        exec: {
          value: action.data.value,
          author: action.data.author
        }
      };
    default:
      return state;
  }
};

export default document;
