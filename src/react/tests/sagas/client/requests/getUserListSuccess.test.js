import { expectSaga } from "redux-saga-test-plan";
import { c_getUserListSuccessWatcher } from "../../../../sagas/client/requests/getUserListSuccess";
import { actionTypes } from "../../../../actions/actionTypes";

describe("c_getUserListSuccess saga", () => {
  it("should replace the user list", () => {
    const userList = [{}, {}, {}, {}];
    return expectSaga(c_getUserListSuccessWatcher)
      .put({
        type: actionTypes.C_REPLACE_USER_LIST,
        userList
      })
      .dispatch({
        type: actionTypes.C_GET_USER_LIST_SUCCESS,
        userList
      })
      .run();
  });
});
