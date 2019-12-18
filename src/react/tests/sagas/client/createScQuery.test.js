import { expectSaga } from "redux-saga-test-plan";
import { c_createScQueryWatcher } from "../../../sagas/client/createScQuery";
import { actionTypes } from "../../../actions/actionTypes";

describe("c_createScQueryWatcher", () => {
  it("should send a request to execute the supercollider query", () => {
    expectSaga(c_createScQueryWatcher)
      .withState({
        client: {
          status: {
            myScQueryIds: [0, 1, 2],
            isLoggedIn: true
          }
        }
      })
      // Assert that the `put` will eventually happen.
      .put({
        type: actionTypes.C_EXEC_SC_QUERY_REQUEST,
        scqId: 0
      })
      // Dispatch any actions that the saga will `take`.
      .dispatch({
        type: actionTypes.C_CREATE_SC_QUERY,
        scqId: 0,
        scqData: { foo: "bar" }
      })
      // Start the test. Returns a Promise.
      .run();
  });

  it("should dispatch a request when required conditions are met", () => {
    return (
      expectSaga(c_createScQueryWatcher)
        .withState({
          client: {
            status: {
              myScQueryIds: [0, 1, 2],
              isLoggedIn: true
            }
          }
        })
        // Assert that the `put` will eventually happen.
        .put({
          type: actionTypes.C_CREATE_SC_QUERY_REQUEST,
          scqId: 0,
          scqData: { foo: "bar" }
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_CREATE_SC_QUERY,
          scqId: 0,
          scqData: { foo: "bar" }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });

  it("should NOT dispatch a request when user isn't logged in", () => {
    return (
      expectSaga(c_createScQueryWatcher)
        .withState({
          client: {
            status: {
              myScQueryIds: [0, 1, 2],
              isLoggedIn: false
            }
          }
        })
        // Assert that the `put` will eventually happen.
        .not.put({
          type: actionTypes.C_CREATE_SC_QUERY_REQUEST,
          scqId: 0,
          scqData: { foo: "bar" }
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_CREATE_SC_QUERY,
          scqId: 0,
          scqData: { foo: "bar" }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });

  it("should NOT dispatch a request when query wasn't created by the client", () => {
    return (
      expectSaga(c_createScQueryWatcher)
        .withState({
          client: {
            status: {
              myScQueryIds: [0, 1, 2],
              isLoggedIn: false
            }
          }
        })
        // Assert that the `put` will eventually happen.
        .not.put({
          type: actionTypes.C_CREATE_SC_QUERY_REQUEST,
          scqId: 5,
          scqData: { foo: "bar" }
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_CREATE_SC_QUERY,
          scqId: 5,
          scqData: { foo: "bar" }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
});
