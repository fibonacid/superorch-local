import sharedActions from "../../shared/actions";
import { addFlashMessage } from "./addFlashMessage";
import { openExternalLink } from "./openExternalLink";
import { digestAppCredits } from "./digestAppCredits";
import { updateBaseData } from "./updateBaseData";
import { removeFlashMessage } from "./removeFlashMessage";
import { displayUser } from "./displayUser";
import { addMyScQueryId } from "./addMyScQueryId";
import { removeMyScQueryId } from "./removeMyScQueryId";
import { updateMyDocId } from "./updateMyDocId";
import { updateMyScQueryId } from "./updateMyScQueryId";
import { updateMyUserId } from "./updateMyUserId";

export default {
  ...sharedActions,
  addFlashMessage,
  addMyScQueryId,
  digestAppCredits,
  displayUser,
  openExternalLink,
  removeFlashMessage,
  removeMyScQueryId,
  updateBaseData,
  updateMyDocId,
  updateMyScQueryId,
  updateMyUserId
};
