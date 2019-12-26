import { actionTypes } from "../actionTypes";
import { updateMyScQueryId } from "./index";

describe("updateMyScQueryId action", () => {
  it("should create an action to update my supercollider query id", () => {
    const scqId = 1;
    const newId = 2;
    expect(updateMyScQueryId(scqId, newId)).toEqual({
      type: actionTypes.UPDATE_MY_SC_QUERY_ID,
      scqId,
      newId
    });
  });
});
