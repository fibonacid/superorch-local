import reducer from "../../reducers/base";
import { actionTypes } from "../../actions/actionTypes";

describe("base reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      displayedUser: 0
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
    ).toMatchObject({
      name: "test",
      version: "0.0.0"
    });
  });

  it("should handle DISPLAY_USER", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.DISPLAY_USER,
        userId: 32
      })
    ).toMatchObject({
      displayedUser: 32
    });
  });
});
