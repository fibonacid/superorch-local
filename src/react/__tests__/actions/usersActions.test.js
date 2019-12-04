import { actionTypes } from "../../actions/actionTypes";
import { addUser } from "../../actions/usersActions";

describe("addUser (Action)", () => {
  it("works", () => {
    const result = addUser(1, { name: "foo" });
    const expectedResult = {
      type: actionTypes.ADD_USER,
      id: 1,
      data: { name: "foo" }
    };
    expect(result).toEqual(expectedResult);
  });
});
