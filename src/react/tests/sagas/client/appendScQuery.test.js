import { expectSaga } from "redux-saga-test-plan";
import { c_appendScQueryWatcher } from "../../../sagas/client/appendScQuery";
import { actionTypes } from "../../../actions/actionTypes";

describe("c_appendScQueryWatcher", () => {
  it("should assign a valid id to the query", () => {
    return (
      expectSaga(c_appendScQueryWatcher)
        // Initialize state
        .withState({
          client: {
            scQueries: [
              { id: 0, bar: "fee" },
              { id: 1, bar: "foo" },
              { id: 3, bar: "fuu" }
            ],
            status: {
              myUserId: 0,
              myScQueryIds: []
            }
          }
        })
        // Assert that the `put` will eventually happen.
        .put({
          type: actionTypes.C_CREATE_SC_QUERY,
          scqId: 4,
          scqData: {
            id: 4,
            userId: 0,
            bar: "fii"
          }
        })
        .put({
          type: actionTypes.C_ADD_MY_SC_QUERY_ID,
          scqId: 4
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_APPEND_SC_QUERY,
          scqData: { bar: "fii" }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
});
