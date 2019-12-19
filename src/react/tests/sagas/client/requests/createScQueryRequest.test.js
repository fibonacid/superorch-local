import { expectSaga } from "redux-saga-test-plan";
import { actionTypes } from "../../../../actions/actionTypes";
import { c_createScQueryRequestWatcher } from "../../../../sagas/client/requests/createScQueryRequest";

describe("c_createScQueryRequest", () => {
  it("should send a request", () => {
    const action = {
      type: actionTypes.C_CREATE_SC_QUERY_REQUEST,
      scqData: {}
    };
    return (
      expectSaga(c_createScQueryRequestWatcher)
        // Assert that the `put` will eventually happen.
        .put.like({
          action: {
            type: actionTypes.C_SEND,
            payload: action
          }
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch(action)
        // Start the test. Returns a Promise.
        .run()
    );
  });
});
