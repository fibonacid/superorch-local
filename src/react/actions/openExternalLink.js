import { actionTypes } from "./actionTypes";

export const openExternalLink = url => ({
  type: actionTypes.OPEN_EXTERNAL_LINK,
  url
});
