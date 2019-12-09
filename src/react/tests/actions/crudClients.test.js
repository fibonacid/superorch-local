import { actionTypes } from "../../actions/actionTypes";
import { createClient } from "../../actions/createClient";
import {
  deleteClient,
  destroyClient,
  updateClient
} from "../../actions/crudClients";

describe("createClient action", () => {
  it("should create an action to create a client", () => {
    const client = {};
    const expectedAction = {
      type: actionTypes.CREATE_CLIENT,
      client
    };
    expect(createClient(client)).toEqual(expectedAction);
  });
});

describe("updateClient action", () => {
  it("should create an action to update a user", () => {
    const id = 0;
    const data = {};
    const expectedAction = {
      type: actionTypes.UPDATE_CLIENT,
      id,
      data
    };
    expect(updateClient(id, data)).toEqual(expectedAction);
  });
});

describe("deleteClient action", () => {
  it("should create an action to delete a client", () => {
    const id = 0;
    const expectedAction = {
      type: actionTypes.DELETE_CLIENT,
      id
    };
    expect(deleteClient(id)).toEqual(expectedAction);
  });
});

describe("destroyClient action", () => {
  it("should create an action to destroy a client", () => {
    const id = 0;
    const expectedAction = {
      type: actionTypes.DESTROY_CLIENT,
      id
    };
    expect(destroyClient(id)).toEqual(expectedAction);
  });
});
