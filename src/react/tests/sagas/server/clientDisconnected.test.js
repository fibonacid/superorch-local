import { expectSaga } from "redux-saga-test-plan";
import { actionTypes } from "../../../actions/actionTypes";
import { s_clientDisconnectedWatcher } from "../../../sagas/server/clientDisconnected";

describe("s_clientDisconnectedWatcher", () => {
  it("just works", () => {
    return (
      expectSaga(s_clientDisconnectedWatcher)
        .withState({
          server: {
            clients: [
              { id: 0, userId: 10 },
              { id: 1, userId: 11 }
            ]
          },
          client: {
            users: [{ id: 10 }, { id: 11 }]
          }
        })
        // Assert that the `put` will eventually happen.
        .put({
          type: actionTypes.S_BROADCAST,
          clientId: 0,
          message: {
            type: actionTypes.B_USER_LEFT,
            userId: 10
          }
        })
        .put({
          type: actionTypes.S_DELETE_CLIENT,
          clientId: 0
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.S_CLIENT_DISCONNECTED,
          clientId: 0
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
});
