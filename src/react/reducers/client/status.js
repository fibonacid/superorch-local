import { actionTypes } from "../../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  isConnected: false,
  isTryingToConnect: false,
  myUserId: 0,
  myDocId: 0,
  myScQueryIds: []
};

const status = (state = initialState, action) => {
  switch (action.type) {
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
    case actionTypes.C_UPDATE_MY_USER_ID:
      return {
        ...state,
        myUserId: action.userId
      };
    case actionTypes.C_UPDATE_MY_DOC_ID:
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
    case actionTypes.C_ADD_MY_SC_QUERY_ID:
      return {
        ...state,
        myScQueryIds: [...state.myScQueryIds, action.scqId]
      };
    case actionTypes.C_UPDATE_MY_SC_QUERY_ID:
      return {
        ...state,
        myScQueryIds: state.myScQueryIds.map(scqId =>
          action.scqId === scqId ? action.newId : scqId
        )
      };
    case actionTypes.C_REMOVE_MY_SC_QUERY_ID:
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

export default status;
