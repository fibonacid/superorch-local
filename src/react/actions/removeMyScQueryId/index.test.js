import { actionTypes } from "../actionTypes";
import { removeMyScQueryId } from "./index";

describe("removeMyScQueryId action", () => {
  it("should create an action to update my user id", () => {
    const scqId = 1;
    expect(removeMyScQueryId(scqId)).toEqual({
      type: actionTypes.REMOVE_MY_SC_QUERY_ID,
      scqId
    });
  });
});
