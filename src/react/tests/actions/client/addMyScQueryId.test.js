import { actionTypes } from "../../../actions/actionTypes";
import { c_addMyScQueryId } from "../../../actions/client/addMyScQueryId";

describe("c_addMyScQueryId action", () => {
  it("should create an action to update my user id", () => {
    const scqId = 1;
    expect(c_addMyScQueryId(scqId)).toEqual({
      type: actionTypes.C_ADD_MY_SC_QUERY_ID,
      scqId
    });
  });
});
