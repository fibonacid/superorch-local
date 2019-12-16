import { actionTypes } from "../../../actions/actionTypes";
import { c_removeMyScQueryId } from "../../../actions/client/removeMyScQueryId";

describe("c_removeMyScQueryId action", () => {
  it("should create an action to update my user id", () => {
    const scqId = 1;
    expect(c_removeMyScQueryId(scqId)).toEqual({
      type: actionTypes.C_REMOVE_MY_SC_QUERY_ID,
      scqId
    });
  });
});
