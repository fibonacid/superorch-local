import { actionTypes } from "../../actions/actionTypes";

/**
 * @param state
 * @param action
 * @returns {[]|*[]}
 */
const index = (state = [], action) => {
  switch (action.type) {
    case actionTypes.CREATE_DOCUMENT:
    case actionTypes.B_DOCUMENT_CREATED:
      return [
        ...state,
        {
          id: action.docId,
          ...action.docData
        }
      ];

    case actionTypes.UPDATE_DOCUMENT:
    case actionTypes.B_DOCUMENT_UPDATE:
      // Modify data of document with same id.
      return state.map(document =>
        document.id === action.docId
          ? {
              ...document,
              ...action.docData
            }
          : document
      );

    case actionTypes.DELETE_DOCUMENT:
      return state.filter(document => document.id !== action.docId);

    case actionTypes.DESTROY_USER:
      return state.filter(document => document.userId !== action.userId);

    case actionTypes.REPLACE_DOCUMENT_LIST:
      return action.docList || state;

    default:
      return state;
  }
};

export default index;

export const selectDocument = (state, id) =>
  state.find(document => document.id === id);
