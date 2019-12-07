import { actionTypes } from "../../actions/actionTypes";
import { digestAppCredits } from "../../actions/digestAppCredits";

describe("digestAppCredits action", () => {
  it("should create an action to digest app credits", () => {
    const data = {};
    expect(digestAppCredits(data)).toEqual({
      type: actionTypes.DIGEST_APP_CREDITS,
      data
    });
  });
});
