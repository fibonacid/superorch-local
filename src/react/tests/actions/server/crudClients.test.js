import { actionTypes } from "../../../actions/actionTypes";
import {
  s_createClient,
  s_deleteClient,
  s_destroyClient,
  s_updateClient
} from "../../../actions/server/crudClients";

describe("createClient action", () => {
  it("should create an action to create a client", () => {
    const clientId = 0;
    const clientData = 0;
    const expectedAction = {
      type: actionTypes.S_CREATE_CLIENT,
      clientId,
      clientData
    };
    expect(s_createClient(clientId, clientData)).toEqual(expectedAction);
  });
});

describe("updateClient action", () => {
  it("should create an action to update a user", () => {
    const clientId = 0;
    const clientData = {};
    const expectedAction = {
      type: actionTypes.S_UPDATE_CLIENT,
      clientId,
      clientData
    };
    expect(s_updateClient(clientId, clientData)).toEqual(expectedAction);
  });
});

describe("deleteClient action", () => {
  it("should create an action to delete a client", () => {
    const clientId = 0;
    const expectedAction = {
      type: actionTypes.S_DELETE_CLIENT,
      clientId
    };
    expect(s_deleteClient(clientId)).toEqual(expectedAction);
  });
});

describe("destroyClient action", () => {
  it("should create an action to destroy a client", () => {
    const clientId = 0;
    const expectedAction = {
      type: actionTypes.S_DESTROY_CLIENT,
      clientId
    };
    expect(s_destroyClient(clientId)).toEqual(expectedAction);
  });
});
