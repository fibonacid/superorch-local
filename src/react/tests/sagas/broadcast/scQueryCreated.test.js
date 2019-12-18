import { expectSaga } from "redux-saga-test-plan";
import { actionTypes } from "../../../actions/actionTypes";
import { b_scQueryCreatedWatcher } from "../../../sagas/broadcast/scQueryCreated";

describe("b_scQueryCreatedWatcher", () => {
  it("just works!", () => {
    return (
      expectSaga(b_scQueryCreatedWatcher)
        // Assert that the `put` will eventually happen.
        .put({
          type: actionTypes.C_EXEC_SC_QUERY_REQUEST,
          scqId: 42
        })

        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.B_SC_QUERY_CREATED,
          scqId: 42,
          scqData: {}
        })

        // Start the test. Returns a Promise.
        .run()
    );
  });
});
