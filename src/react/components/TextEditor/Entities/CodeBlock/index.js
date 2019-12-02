import { EditorState, Modifier } from "draft-js";

export function createCodeBlockEntity(editorState, selectionState) {
  const contentState = editorState.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity(
    "CODE_BLOCK",
    "MUTABLE",
    { times: 1, modified: false }
  );
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  const contentStateWithLink = Modifier.applyEntity(
    contentStateWithEntity,
    selectionState,
    entityKey
  );
  return EditorState.push(editorState, contentStateWithLink);
}
