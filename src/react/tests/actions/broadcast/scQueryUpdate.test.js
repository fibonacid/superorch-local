import { actionTypes } from "../../../actions/actionTypes";
import { b_scQueryUpdate } from "../../../actions/broadcast/scQueryUpdate";

describe("b_scQueryUpdate action", () => {
  it("should create an action to modify an existing supercollider query", () => {
    const scqId = 0;
    const scqData = {};
    const expectedAction = {
      type: actionTypes.B_SC_QUERY_UPDATE,
      scqId,
      scqData
    };
    expect(b_scQueryUpdate(scqId, scqData)).toEqual(expectedAction);
  });
});
