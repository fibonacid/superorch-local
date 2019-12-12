import {
  selectDocument,
  selectDocuments,
  selectScQueries,
  selectScQuery,
  selectUser,
  selectUsers
} from "../../../reducers/client";

describe("client reducer", () => {
  it("should let you select the users", () => {
    expect(selectUsers({ users: [{ id: 0 }, { id: 1 }] })).toEqual([
      { id: 0 },
      { id: 1 }
    ]);
  });

  it("should let you select a user by id", () => {
    expect(selectUser({ users: [{ id: 0 }, { id: 1 }] }, 1)).toEqual({ id: 1 });
  });

  it("should let you select the documents", () => {
    expect(selectDocuments({ documents: [{ id: 0 }, { id: 1 }] })).toEqual([
      { id: 0 },
      { id: 1 }
    ]);
  });

  it("should let you select a document by id", () => {
    expect(selectDocument({ documents: [{ id: 0 }, { id: 1 }] }, 1)).toEqual({
      id: 1
    });
  });

  it("should let you select the scQueries", () => {
    expect(selectScQueries({ scQueries: [{ id: 0 }, { id: 1 }] })).toEqual([
      { id: 0 },
      { id: 1 }
    ]);
  });

  it("should let you select a scQuery by id", () => {
    expect(selectScQuery({ scQueries: [{ id: 0 }, { id: 1 }] }, 1)).toEqual({
      id: 1
    });
  });
});
