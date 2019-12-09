import { actionTypes } from "../../../actions/actionTypes";
import { wsScQueryShipped } from "../../../actions/client/scQueryShipped";

describe("wsScQueryShipped action", () => {
  it("should create an action to communicate that a supercollider query has been updated", () => {
    const scQuery = 0;
    const diff = {};
    const expectedAction = {
      type: actionTypes.WS_SC_QUERY_SHIPPED,
      scQuery
    };
    expect(wsScQueryShipped(scQuery, diff)).toEqual(expectedAction);
  });
});
