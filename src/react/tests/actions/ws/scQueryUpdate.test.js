import { actionTypes } from "../../../actions/actionTypes";
import { wsScQueryUpdate } from "../../../actions/client/scQueryUpdate";

describe("wsScQueryUpdate action", () => {
  it("should create an action to communicate that a supercollider query has been updated", () => {
    const scQueryId = 0;
    const diff = {};
    const expectedAction = {
      type: actionTypes.WS_SC_QUERY_UPDATE,
      scQueryId,
      diff
    };
    expect(wsScQueryUpdate(scQueryId, diff)).toEqual(expectedAction);
  });
});
