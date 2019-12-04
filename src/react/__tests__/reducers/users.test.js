import users, {
  selectUser,
  selectUserByLocalId
} from "../../reducers/chat/users";
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
      expect(result).toEqual([{ id: 1, name: "test", localId: 0 }]);
    });
  });

  describe("When state is already populated", () => {
    let state = [
      { id: 1, name: "foo", localId: 0 },
      { id: 2, name: "bar", localId: 1 }
    ];

    it("Handles ADD_USER action", () => {
      const result = users(state, {
        type: actionTypes.ADD_USER,
        id: 3,
        data: { name: "test" }
      });
      expect(result).toEqual([
        { id: 1, name: "foo", localId: 0 },
        { id: 2, name: "bar", localId: 1 },
        { id: 3, name: "test", localId: 2 }
      ]);
    });

    it("Handles UPDATE_USER action", () => {
      const result = users(state, {
        type: actionTypes.UPDATE_USER,
        id: 2,
        data: { name: "test" }
      });
      expect(result).toEqual([
        { id: 1, name: "foo", localId: 0 },
        { id: 2, name: "test", localId: 1 }
      ]);
    });

    it("Handles DELETE_USER action", () => {
      const result = users(state, {
        type: actionTypes.DELETE_USER,
        id: 2
      });
      expect(result).toEqual([{ id: 1, name: "foo", localId: 0 }]);
    });

    it("Selects a specific user", () => {
      const user = selectUser(state, 2);
      expect(user).toEqual({ id: 2, name: "bar", localId: 1 });
    });

    it("Selects a specific user by local id", () => {
      const user = selectUserByLocalId(state, 1);
      expect(user).toEqual({ id: 2, name: "bar", localId: 1 });
    });
  });
});
