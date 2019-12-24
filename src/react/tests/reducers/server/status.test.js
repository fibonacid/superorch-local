import reducer from "../../../reducers/server/status";
import { actionTypes } from "../../../actions/actionTypes";

describe("status reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toMatchObject({
      isRunning: false
    });
  });

  it("should handle S_SERVER_STARTED", () => {
    const data = { port: 8000, address: "127.0.0.1" };
    expect(
      reducer(undefined, {
        type: actionTypes.S_SERVER_STARTED,
        data
      })
    ).toMatchObject({
      isRunning: true,
      url: "http://127.0.0.1:8000",
      wsEndpoint: "ws://127.0.0.1:8000"
    });
  });

  it("should handle S_AUTH_WITH_PASSWORD", () => {
    const flag = true;
    expect(
      reducer(undefined, {
        type: actionTypes.S_AUTH_WITH_PASSWORD,
        flag
      })
    ).toMatchObject({
      requirePassword: flag
    });
  });

  it("should handle S_CHANGE_PASSWORD", () => {
    const password = "test";
    expect(
      reducer(undefined, {
        type: actionTypes.S_CHANGE_PASSWORD,
        password
      })
    ).toMatchObject({
      password
    });
  });
});
