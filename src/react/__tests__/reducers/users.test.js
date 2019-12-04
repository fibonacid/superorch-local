import users from "../../reducers/chat/users";
import { actionTypes } from "../../actions/actionTypes";

describe("users (Reducer)", () => {
  it("Should return the initial state", () => {
    const result = users(undefined, { type: "foo" });
    expect(result).toEqual([]);
  });

  describe("When state is empty", () => {
    it("Handles ADD_USER action", () => {
      const result = users(undefined, {
        type: actionTypes.ADD_USER,
        id: 1,
        data: { name: "test" }
      });
      expect(result).toEqual([{ id: 1, name: "test" }]);
    });
  });

  describe("When state is already populated", () => {
    let state = [
      { id: 1, name: "foo" },
      { id: 2, name: "bar" }
    ];

    it("Handles ADD_USER action", () => {
      const result = users(state, {
        type: actionTypes.ADD_USER,
        id: 3,
        data: { name: "test" }
      });
      expect(result).toEqual([
        { id: 1, name: "foo" },
        { id: 2, name: "bar" },
        { id: 3, name: "test" }
      ]);
    });
  });

  /*it('Should handle USER_LIST', () => {
    const action = {
      type: actionTypes.USER_LIST,
      users: ['Al', 'John', 'Jack']
    };
    const expectedResult = ['Al', 'John', 'Jack'];
    const result = users(undefined, action);
    expect(result).toEqual(expectedResult);
  });

  describe('when state is already populated', () => {
    it('Should handle USER_LIST', () => {
      const action = {
        type: actionTypes.USER_LIST,
        users: ['Al', 'John', 'Jack']
      };
      const prevState = ['Al', 'John'];
      const expectedResult = ['Al', 'John', 'Jack'];
      const result = users(prevState, action);
      expect(result).toEqual(expectedResult);
    });
  });*/
});
