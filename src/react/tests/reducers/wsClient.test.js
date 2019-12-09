import reducer from "../../reducers/websocket";
import { actionTypes } from "../../actions/actionTypes";

describe("websocket reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      url: "ws://localhost:8989",
      isConnected: false,
      isTryingToConnect: false
    });
  });

  it("should handle C_OPEN", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.C_OPEN
      })
    ).toEqual({
      url: "ws://localhost:8989",
      isConnected: true,
      isTryingToConnect: false
    });
  });

  it("should handle C_CLOSED", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.C_CLOSED
      })
    ).toEqual({
      url: "ws://localhost:8989",
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
    ).toEqual({
      url: "ws://test:8989",
      isConnected: false,
      isTryingToConnect: true
    });
  });

  it("should handle C_BEGIN_RECONNECT", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.C_BEGIN_RECONNECT
      })
    ).toEqual({
      url: "ws://localhost:8989",
      isConnected: false,
      isTryingToConnect: true
    });
  });
});
