import { OrderedMap, List, Map } from "immutable";

/**
 * Function returns collection of currently selected blocks.
 */
export function getSelectedBlocksMap(editorState: EditorState): OrderedMap {
  const selectionState = editorState.getSelection();
  const contentState = editorState.getCurrentContent();
  const startKey = selectionState.getStartKey();
  const endKey = selectionState.getEndKey();
  const blockMap = contentState.getBlockMap();
  return blockMap
    .toSeq()
    .skipUntil((_, k) => k === startKey)
    .takeUntil((_, k) => k === endKey)
    .concat([[endKey, blockMap.get(endKey)]]);
}

/**
 * Function returns collection of currently selected blocks.
 */
export function getSelectedBlocksList(editorState: EditorState): List {
  return getSelectedBlocksMap(editorState).toList();
}

export function getSelectedTextBlocks(editorState: EditorState): string {
  const selectedBlocks = getSelectedBlocksList(editorState);
  let text;
  selectedBlocks.forEach((block, i) => {
    text = `${block.getText()}${
      i < selectedBlocks.size
        ? '\n'
        : ''
    }`;
  });
  return text;
}

export function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr, start;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}
