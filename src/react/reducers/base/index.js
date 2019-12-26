import { actionTypes } from "../../actions/actionTypes";

export const initialState = {
  displayedUser: 0,
  myUserId: 0,
  myDocId: 0,
  myScQueryIds: [],
  isLoggedIn: false,
  isConnected: false,
  isTryingToConnect: false
};

const index = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DIGEST_APP_CREDITS:
    case actionTypes.UPDATE_BASE_DATA:
      return {
        ...state,
        ...action.data
      };
    case actionTypes.DISPLAY_USER:
      return {
        ...state,
        displayedUser: action.userId
      };
    case actionTypes.C_OPEN:
      return {
        ...state,
        isConnected: true,
        isTryingToConnect: false
      };
    case actionTypes.C_CLOSED:
      return {
        ...state,
        isConnected: false,
        isTryingToConnect: false
      };
    case actionTypes.C_CONNECT:
      return {
        ...state,
        url: action.payload.url,
        isTryingToConnect: true
      };
    case actionTypes.C_BEGIN_RECONNECT:
      return {
        ...state,
        isTryingToConnect: true
      };
    case actionTypes.UPDATE_MY_USER_ID:
      return {
        ...state,
        myUserId: action.userId
      };
    case actionTypes.UPDATE_MY_DOC_ID:
      return {
        ...state,
        myDocId: action.docId
      };
    case actionTypes.C_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      };
    case actionTypes.C_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false
      };
    case actionTypes.ADD_MY_SC_QUERY_ID:
      return {
        ...state,
        myScQueryIds: [...state.myScQueryIds, action.scqId]
      };
    case actionTypes.UPDATE_MY_SC_QUERY_ID:
      return {
        ...state,
        myScQueryIds: state.myScQueryIds.map(scqId =>
          action.scqId === scqId ? action.newId : scqId
        )
      };
    case actionTypes.REMOVE_MY_SC_QUERY_ID:
      return {
        ...state,
        myScQueryIds: state.myScQueryIds.filter(scqId => scqId !== action.scqId)
      };
    case actionTypes.S_SERVER_STARTED:
      const { address, port } = action.data;
      return {
        ...state,
        url: `ws://${address}:${port}`
      };
    default:
      return state;
  }
};

export default index;
