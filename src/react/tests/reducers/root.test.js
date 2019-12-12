import { selectDocument } from "../../reducers/root";
import { selectUser } from "../../reducers/root";

describe("selectDocument", () => {
  it("should select a document by id", () => {
    expect(
      selectDocument(
        {
          chat: {
            documents: [{ id: 0 }, { id: 1 }]
          }
        },
        1
      )
    ).toEqual({ id: 1 });
  });
});

describe("selectDocument", () => {
  it("should select a user by id", () => {
    expect(
      selectUser(
        {
          chat: {
            users: [{ id: 0 }, { id: 1 }]
          }
        },
        1
      )
    ).toEqual({ id: 1 });
  });
});
