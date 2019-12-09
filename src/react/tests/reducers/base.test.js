import reducer from "../../reducers/base";
import { actionTypes } from "../../actions/actionTypes";

describe("base reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      myUserId: undefined
    });
  });

  it("should handle DIGEST_APP_CREDITS", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.DIGEST_APP_CREDITS,
        data: {
          name: "test",
          version: "0.0.0"
        }
      })
    ).toEqual({
      myUserId: 0,
      name: "test",
      version: "0.0.0"
    });
  });
});
