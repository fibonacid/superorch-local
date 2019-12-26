import sharedActions from "../../shared/actions";
import { addFlashMessage } from "./addFlashMessage";
import { openExternalLink } from "./openExternalLink";
import { digestAppCredits } from "./digestAppCredits";
import { updateBaseData } from "./updateBaseData";
import { removeFlashMessage } from "./removeFlashMessage";
import { displayUser } from "./displayUser";

export const index = {
  ...sharedActions,
  addFlashMessage,
  digestAppCredits,
  displayUser,
  openExternalLink,
  removeFlashMessage,
  updateBaseData
};
