import { actionTypes } from "../../actions/actionTypes";

/**
 * @param state
 * @param action
 * @returns {[]|*[]}
 */
const documents = (state = [], action) => {
  switch (action.type) {
    case actionTypes.C_CREATE_DOCUMENT || actionTypes.S_CREATE_DOCUMENT:
      return [
        ...state,
        {
          id: action.documentId,
          ...action.documentData
        }
      ];

    case actionTypes.C_UPDATE_DOCUMENT || actionTypes.S_UPDATE_DOCUMENT:
      // Modify data of document with same id.
      return state.map(document =>
        document.id === action.documentId
          ? {
              ...document,
              ...action.documentData
            }
          : document
      );

    case actionTypes.C_DELETE_DOCUMENT || actionTypes.S_DELETE_DOCUMENT:
      return state.filter(document => document.id !== action.documentId);

    default:
      return state;
  }
};

export default documents;

export const selectDocument = (state, id) =>
  state.find(document => document.id === id);
