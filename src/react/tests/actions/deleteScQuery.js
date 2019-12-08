import { actionTypes } from "../../actions/actionTypes";
import { deleteScQuery } from "../../actions/deleteScQuery";

describe("deleteScQuery action", () => {
  it("should create an action to delete a specific supercollider query", () => {
    const id = 0;
    expect(deleteScQuery(id)).toEqual({
      type: actionTypes.DELETE_SC_QUERY,
      id
    });
  });
});
