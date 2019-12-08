import { actionTypes } from "../../actions/actionTypes";
import { updateScQuery } from "../../actions/updateScQuery";

describe("updateScQuery action", () => {
  it("should create an action to update a specific supercollider query", () => {
    const id = 0;
    const data = {};
    expect(updateScQuery(id, data)).toEqual({
      type: actionTypes.UPDATE_SC_QUERY,
      id,
      data
    });
  });
});
