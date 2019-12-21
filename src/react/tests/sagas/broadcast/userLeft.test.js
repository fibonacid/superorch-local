import { expectSaga } from "redux-saga-test-plan";
import { actionTypes } from "../../../actions/actionTypes";
import { b_userLeftWatcher } from "../../../sagas/broadcast/userLeft";

describe("b_scQueryCreatedSaga", () => {
  it("just works!", () => {
    return (
      expectSaga(b_userLeftWatcher)
        // Assert that the `put` will eventually happen.
        .put({
          type: actionTypes.C_DESTROY_USER,
          userId: 4
        })

        // Dispatch any actions that the saga will `take`.
        .dispatch({ type: actionTypes.B_USER_LEFT, userId: 4 })

        // Start the test. Returns a Promise.
        .run()
    );
  });
});
