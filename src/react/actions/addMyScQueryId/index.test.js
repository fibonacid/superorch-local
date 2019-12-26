import { actionTypes } from "../actionTypes";
import { addMyScQueryId } from "./index";

describe("addMyScQueryId action", () => {
  it("should create an action to update my user id", () => {
    const scqId = 1;
    expect(addMyScQueryId(scqId)).toEqual({
      type: actionTypes.ADD_MY_SC_QUERY_ID,
      scqId
    });
  });
});
