import { actionTypes } from "../../actions/actionTypes";

const initialState = [{ id: 0, userId: 0, value: "" }];

/**
 * @param state
 * @param action
 * @returns {[]|*[]}
 */
const documents = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.C_CREATE_DOCUMENT:
    case actionTypes.B_DOCUMENT_CREATED:
      return [
        ...state,
        {
          id: action.docId,
          ...action.docData
        }
      ];

    case actionTypes.C_UPDATE_DOCUMENT:
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

    case actionTypes.C_DELETE_DOCUMENT:
      return state.filter(document => document.id !== action.docId);

    case actionTypes.C_DESTROY_USER:
      return state.filter(document => document.userId !== action.userId);

    default:
      return state;
  }
};

export default documents;

export const selectDocument = (state, id) =>
  state.find(document => document.id === id);
