import reducer from "../../reducers/wsclient";
import { actionTypes } from "../../actions/actionTypes";

describe("wsclient reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      url: "ws://localhost:8989",
      isConnected: false,
      isTryingToConnect: false,
      isLoggedIn: false,
      myUserId: 0,
      myDocIds: [0]
    });
  });

  it("should handle C_OPEN", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.C_OPEN
      })
    ).toMatchObject({
      isConnected: true,
      isTryingToConnect: false
    });
  });

  it("should handle C_CLOSED", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.C_CLOSED
      })
    ).toMatchObject({
      isConnected: false,
      isTryingToConnect: false
    });
  });

  it("should handle C_CONNECT", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.C_CONNECT,
        payload: { url: "ws://test:8989" }
      })
    ).toMatchObject({
      isConnected: false,
      isTryingToConnect: true
    });
  });

  it("should handle C_BEGIN_RECONNECT", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.C_BEGIN_RECONNECT
      })
    ).toMatchObject({
      isConnected: false,
      isTryingToConnect: true
    });
  });

  it("should handle C_UPDATE_MY_USER_ID", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.C_UPDATE_MY_USER_ID,
        userId: 99
      })
    ).toMatchObject({
      myUserId: 99
    });
  });
});
