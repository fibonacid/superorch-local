import {
  selectDocument,
  selectDocuments,
  selectUsers,
  selectUser,
  selectScQueries,
  selectScQuery,
  selectClients,
  selectClient
} from "../../reducers/root";

describe("root reducer", () => {
  it("should select a user by id", () => {
    expect(
      selectUser(
        {
          client: {
            users: [{ id: 0 }, { id: 1 }]
          }
        },
        1
      )
    ).toEqual({ id: 1 });
  });

  it("should select all users", () => {
    expect(
      selectUsers({
        client: {
          users: [{ id: 0 }, { id: 1 }]
        }
      })
    ).toEqual([{ id: 0 }, { id: 1 }]);
  });

  it("should select a user by id", () => {
    expect(
      selectUser(
        {
          client: {
            users: [{ id: 0 }, { id: 1 }]
          }
        },
        1
      )
    ).toEqual({ id: 1 });
  });

  it("should select all documents", () => {
    expect(
      selectDocuments({
        client: {
          documents: [{ id: 0 }, { id: 1 }]
        }
      })
    ).toEqual([{ id: 0 }, { id: 1 }]);
  });

  it("should select a document by id", () => {
    expect(
      selectDocument(
        {
          client: {
            documents: [{ id: 0 }, { id: 1 }]
          }
        },
        1
      )
    ).toEqual({ id: 1 });
  });

  it("should select all scQueries", () => {
    expect(
      selectScQueries({
        client: {
          scQueries: [{ id: 0 }, { id: 1 }]
        }
      })
    ).toEqual([{ id: 0 }, { id: 1 }]);
  });

  it("should select a scQuery by id", () => {
    expect(
      selectScQuery(
        {
          client: {
            scQueries: [{ id: 0 }, { id: 1 }]
          }
        },
        1
      )
    ).toEqual({ id: 1 });
  });

  it("should select all clients", () => {
    expect(
      selectClients({
        server: {
          clients: [{ id: 0 }, { id: 1 }]
        }
      })
    ).toEqual([{ id: 0 }, { id: 1 }]);
  });

  it("should select a client by id", () => {
    expect(
      selectClient(
        {
          server: {
            clients: [{ id: 0 }, { id: 1 }]
          }
        },
        1
      )
    ).toEqual({ id: 1 });
  });
});
