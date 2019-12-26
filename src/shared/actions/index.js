import * as documentActions from "./documents";
import * as userActions from "./users";
import * as scQueryActions from "./scQueries";

export default {
  ...userActions,
  ...documentActions,
  ...scQueryActions
};
