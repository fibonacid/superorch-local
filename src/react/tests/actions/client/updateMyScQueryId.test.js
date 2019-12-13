import { actionTypes } from "../../../actions/actionTypes";
import { c_updateMyScQueryId } from "../../../actions/client/updateMyScQueryId";

describe("c_updateMyScQueryId action", () => {
  it("should create an action to update my supercollider query id", () => {
    const scqId = 1;
    const newId = 2;
    expect(c_updateMyScQueryId(scqId, newId)).toEqual({
      type: actionTypes.C_UPDATE_MY_SC_QUERY_ID,
      scqId,
      newId
    });
  });
});
