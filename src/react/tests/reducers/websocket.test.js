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

  it("should handle WS_OPEN", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.WS_OPEN
      })
    ).toEqual({
      url: "ws://localhost:8989",
      isConnected: true,
      isTryingToConnect: false
    });
  });

  it("should handle WS_CLOSED", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.WS_CLOSED
      })
    ).toEqual({
      url: "ws://localhost:8989",
      isConnected: false,
      isTryingToConnect: false
    });
  });

  it("should handle WS_CONNECT", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.WS_CONNECT,
        payload: { url: "ws://test:8989" }
      })
    ).toEqual({
      url: "ws://test:8989",
      isConnected: false,
      isTryingToConnect: true
    });
  });

  it("should handle WS_BEGIN_RECONNECT", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.WS_BEGIN_RECONNECT
      })
    ).toEqual({
      url: "ws://localhost:8989",
      isConnected: false,
      isTryingToConnect: true
    });
  });
});
