import { actionTypes } from "../actionTypes";
import { digestAppCredits } from "./";

describe("digestAppCredits action", () => {
  it("should create an action to digest app credits", () => {
    const data = {};
    expect(digestAppCredits(data)).toEqual({
      type: actionTypes.DIGEST_APP_CREDITS,
      data
    });
  });
});
