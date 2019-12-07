import { actionTypes } from "../../actions/actionTypes";
import { deleteUser } from "../../actions/deleteUser";

describe("deleteUser action", () => {
  it("should create an action to delete a user", () => {
    const id = 0;
    expect(deleteUser(id)).toEqual({
      type: actionTypes.DELETE_USER,
      id
    });
  });
});
