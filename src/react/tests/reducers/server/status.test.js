import reducer from "../../../reducers/server/status";
import { actionTypes } from "../../../actions/actionTypes";

describe("status reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      isRunning: false
    });
  });

  it("should handle S_SERVER_STARTED", () => {
    const data = { foo: "bar" };
    expect(
      reducer(undefined, {
        type: actionTypes.S_SERVER_STARTED,
        data
      })
    ).toMatchObject({
      isRunning: true,
      ...data
    });
  });
});
