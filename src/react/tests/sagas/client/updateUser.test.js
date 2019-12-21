import { expectSaga } from "redux-saga-test-plan";
import { actionTypes } from "../../../actions/actionTypes";
import { c_updateUserWatcher } from "../../../sagas/client/updateUser";

describe("c_updateUserWatcher", () => {
  it("should dispatch a request when required conditions are met", () => {
    return (
      expectSaga(c_updateUserWatcher)
        .withState({
          client: {
            status: {
              myUserId: 0,
              isLoggedIn: true
            }
          }
        })

        // Assert that the `put` will eventually happen.
        .put({
          type: actionTypes.C_UPDATE_USER_DATA_REQUEST,
          userData: { foo: "bar" }
        })

        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_UPDATE_USER,
          userId: 0,
          userData: { foo: "bar" }
        })

        // Start the test. Returns a Promise.
        .run()
    );
  });

  it("should NOT dispatch a request when user isn't logged in", () => {
    return (
      expectSaga(c_updateUserWatcher)
        .withState({
          client: {
            status: {
              myUserId: 0,
              isLoggedIn: false
            }
          }
        })

        // Assert that the `put` will eventually happen.
        .not.put({
          type: actionTypes.C_UPDATE_USER_DATA_REQUEST,
          userData: { foo: "bar" }
        })

        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_UPDATE_USER,
          userId: 0,
          userData: { foo: "bar" }
        })

        // Start the test. Returns a Promise.
        .run()
    );
  });

  it("should NOT dispatch a request when user isn't owned by the client", () => {
    return (
      expectSaga(c_updateUserWatcher)
        .withState({
          client: {
            status: {
              myUserId: 1,
              isLoggedIn: true
            }
          }
        })

        // Assert that the `put` will eventually happen.
        .not.put({
          type: actionTypes.C_UPDATE_USER_DATA_REQUEST,
          userData: { foo: "bar" }
        })

        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_UPDATE_USER,
          userId: 0,
          userData: { foo: "bar" }
        })

        // Start the test. Returns a Promise.
        .run()
    );
  });
});
