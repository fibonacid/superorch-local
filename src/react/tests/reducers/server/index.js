import { selectClient, selectClients } from "../../../reducers/server/index";

describe("server reducer", () => {
  it("should let you select the clients", () => {
    expect(selectClients({ clients: [{ id: 0 }, { id: 1 }] })).toEqual([
      { id: 0 },
      { id: 1 }
    ]);
  });

  it("should let you select a client by id", () => {
    expect(selectClient({ clients: [{ id: 0 }, { id: 1 }] }, 1)).toEqual({
      id: 1
    });
  });
});
