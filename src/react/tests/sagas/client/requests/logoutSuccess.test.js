import { expectSaga } from "redux-saga-test-plan";
import { actionTypes } from "../../../../actions/actionTypes";
import { c_logoutSuccessWatcher } from "../../../../sagas/client/requests/logoutSuccess";

describe("c_logoutSuccess saga", () => {
  it("should delete all the users except its own", () => {
    return expectSaga(c_logoutSuccessWatcher)
      .withState({
        client: {
          users: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }],
          status: {
            myUserId: 0
          }
        }
      })
      .not.put({
        type: actionTypes.C_DESTROY_USER,
        userId: 0
      })
      .put({
        type: actionTypes.C_DESTROY_USER,
        userId: 1
      })
      .put({
        type: actionTypes.C_DESTROY_USER,
        userId: 2
      })
      .put({
        type: actionTypes.C_DESTROY_USER,
        userId: 3
      })
      .dispatch({
        type: actionTypes.C_LOGOUT_SUCCESS
      })
      .run();
  });
});
