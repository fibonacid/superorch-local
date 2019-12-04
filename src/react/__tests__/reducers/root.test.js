import {
  selectUsers,
  selectUser,
  selectUserByLocalId
} from "../../reducers/root";

const state = {
  chat: {
    users: [
      { id: 1, localId: 0, name: "foo" },
      { id: 2, localId: 1, name: "bar" }
    ]
  }
};

describe("root (Reducer)", () => {
  it("Selects chat users", () => {
    const result = selectUsers(state);
    expect(result).toEqual([
      { id: 1, localId: 0, name: "foo" },
      { id: 2, localId: 1, name: "bar" }
    ]);
  });

  it("Selects a specific chat user", () => {
    const result = selectUser(state, 1);
    expect(result).toEqual({ id: 1, localId: 0, name: "foo" });
  });

  it("Selects a specific chat user by local Id", () => {
    const result = selectUserByLocalId(state, 0);
    expect(result).toEqual({ id: 1, localId: 0, name: "foo" });
  });
});
