import { actionTypes } from "../../actions/actionTypes";
import { addScQuery } from "../../actions/addScQuery";

describe("addScQuery action", () => {
  it("should create an action to add a new supercollider query", () => {
    const id = 0;
    const data = {};
    expect(addScQuery(id, data)).toEqual({
      type: actionTypes.ADD_SC_QUERY,
      id,
      data
    });
  });
});
