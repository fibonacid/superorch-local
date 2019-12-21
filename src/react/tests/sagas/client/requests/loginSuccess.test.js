import { expectSaga } from "redux-saga-test-plan";
import { c_loginSuccessWatcher } from "../../../../sagas/client/requests/loginSuccess";
import { actionTypes } from "../../../../actions/actionTypes";

describe("c_loginSuccess saga", () => {
  const myUserId = 0;
  const myDocId = 1;
  const state = {
    client: {
      status: {
        myUserId,
        myDocId: 1
      },
      documents: [{ id: myDocId }],
      users: [{ id: myUserId }]
    }
  };
  const userId = 1;
  const action = {
    type: actionTypes.C_LOGIN_SUCCESS,
    userId
  };

  it("should update its user id", () => {
    const myUserId = 0;
    return expectSaga(c_loginSuccessWatcher)
      .withState(state)
      .put({
        type: actionTypes.C_UPDATE_USER,
        userId: myUserId,
        userData: {
          id: userId
        }
      })
      .put({
        type: actionTypes.C_UPDATE_MY_USER_ID,
        userId
      })
      .dispatch(action)
      .run();
  });

  it("should send a request to create a document", () => {
    return expectSaga(c_loginSuccessWatcher)
      .withState(state)
      .put({
        type: actionTypes.C_CREATE_DOCUMENT_REQUEST,
        docData: { id: myDocId }
      })
      .dispatch(action)
      .run();
  });

  it("should send a request to get the user list", () => {
    return expectSaga(c_loginSuccessWatcher)
      .withState(state)
      .put({
        type: actionTypes.C_GET_USER_LIST_REQUEST
      })
      .dispatch(action)
      .run();
  });

  it("should make the frontend display the user", () => {
    return expectSaga(c_loginSuccessWatcher)
      .withState(state)
      .put({
        type: actionTypes.DISPLAY_USER,
        userId
      })
      .dispatch(action)
      .run();
  });
});
