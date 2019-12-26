import users, * as fromUsers from "./users";
import documents, * as fromDocuments from "./documents";
import scQueries, * as fromScQueries from "./scQueries";

export default {
  documents,
  scQueries,
  users
};

export const selectors = {
  selectUser: fromUsers.selectUser,
  selectDocument: fromDocuments.selectDocument,
  selectScQuery: fromScQueries.selectScQuery
};
