import React from "react";
import styled, { css } from "styled-components";
import {
  convertToRaw,
  Editor,
  EditorState,
  getDefaultKeyBinding,
  CompositeDecorator,
  KeyBindingUtil
} from "draft-js";

import LinkEntity from "./Entities/Link/Link";
import CodeBlockEntity from "./Entities/CodeBlock/CodeBlock";
import { createCodeBlockEntity } from "./Entities/CodeBlock";
import { getSelectionText, getSelectionEntity } from "draftjs-utils";

// ----------------------
// Styled Components
// ----------------------

const StyledWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  font-family: monospace;
  padding: 5px;
  ${props =>
    props.readOnly &&
    css`
      cursor: not-allowed;
    `}
`;

// -----------------------
// Key Binding Function
// -----------------------

const { hasCommandModifier } = KeyBindingUtil;

const keyBindingFn = e => {
  if (e.keyCode === 13 /* `CR` key */ && hasCommandModifier(e)) {
    return "execute-selected-block";
  }
  return getDefaultKeyBinding(e);
};

// ------------------------
// Entities
// ------------------------

function findEntities(entityType, contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === entityType
    );
  }, callback);
}

// ------------------------
// Decorator
// ------------------------

const compositeDecorator = new CompositeDecorator([
  {
    strategy: (contentBlock, callback, contentState) =>
      findEntities("LINK", contentBlock, callback, contentState),
    component: LinkEntity
  },
  {
    strategy: (contentBlock, callback, contentState) =>
      findEntities("CODE_BLOCK", contentBlock, callback, contentState),
    component: CodeBlockEntity
  }
]);

// ------------------------
// Block Style
// ------------------------

/*function myBlockStyleFn(contentBlock) {
  const type = contentBlock.getType();
  if (type === "blockquote") {
    return "superFancyBlockquote";
  }
}*/

// ------------------------
// Text Editor Component
// ------------------------

export default class TextEditor extends React.Component {
  constructor(props) {
    super(props);

    // Initialize component state.
    this.state = {
      editorState: EditorState.createEmpty(compositeDecorator)
    };

    this.setDomEditorRef = ref => (this.domEditor = ref);

    // This function forces the editor to be focused.
    this.focus = () => this.domEditor.focus();

    // Event Handler Bindings
    this.onChange = this.onChange.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  /**
   * HANDLE KEY COMMAND
   * ==================================================
   * This function is called every time a key command
   * is invoked by the user, example cmd + b
   * @param command
   * @param editorState
   * @returns {string}
   */
  handleKeyCommand(command, editorState) {
    // If a custom event has been invoked:
    if (command === "execute-selected-block") {
      this.onExecuteSelectedBlock(editorState);
      return "handled";
    }
    return "not-handled";
  }

  /**
   * ======================================================
   * ON EXECUTE SELECTED BLOCK
   * ======================================================
   * This method is an event handler for the command
   * "execute-selected-block". When the command is
   * intercepted by handleKeyCommand if the selection
   * doesn't contain an entity it creates one of type EXEC_BLOCK,
   * if it doesn't it updates it's metadata.
   * @param editorState
   */
  onExecuteSelectedBlock(editorState) {
    // Get current selection
    const selectionState = editorState.getSelection();
    // Get current content
    const currentContent = editorState.getCurrentContent();

    // Get whole selected text
    const selectionText = getSelectionText(editorState);
    this.props.handleExecuteSelection(selectionText);

    // Get selected entity
    const entityKey = getSelectionEntity(editorState);

    // If entity already exists:
    if (entityKey) {
      // Modify entity metadata
      const { data } = currentContent.getEntity(entityKey);
      const newContent = currentContent.mergeEntityData(entityKey, {
        times: data.times + 1,
        modified: true
      });
      const newState = EditorState.push(
        editorState,
        newContent,
        "change-block-data"
      );
      this.onChange(newState);

      // Force decorators to be re rendered.
      // todo: There might be a better way to achieve this
      this.forceReRenderEditor(editorState);
    }
    // If entity doesn't exists:
    else {
      const newState = createCodeBlockEntity(editorState, selectionState);
      this.onChange(newState);
    }
  }

  /**
   * ON CHANGE
   * ===================================
   * This function is called every time the editor
   * needs to update it's internal data,
   * example: when user types some text
   * @param editorState
   * @param callback
   */
  onChange(editorState, callback) {
    // Update editor state
    this.setState({ editorState }, callback);

    //const changeType = editorState.getLastChangeType();
    //console.log(changeType);

    // Extrapolate raw contentState
    const contentState = editorState.getCurrentContent();
    const raw = convertToRaw(contentState);

    // And send it the socket server as a string
    this.props.sendEditorState(this.props.docId, JSON.stringify(raw));
  }

  /**
   * FORCE RE-RENDER EDITOR
   * ==========================
   * This function resets the editor state from
   * a snapshot provided as an argument.
   * This can be used to make sure that every decorator
   * is rendered with the latest data.
   * For example i don't know why, but after i update
   * the data on an entity it takes some additional mouse events
   * to fire before the decorator responsible for the entity to
   * be re rendered.
   */
  forceReRenderEditor(editorState) {
    this.setState({
      editorState: EditorState.set(editorState, {
        decorator: compositeDecorator
      })
    });
  }

  /**
   * RENDER
   * ============
   * @returns {*}
   */
  render() {
    return (
      <StyledWrapper
        data-test={"TextEditorComponent"}
        onClick={this.focus}
        readOnly={this.props.readOnly}
      >
        <Editor
          ref={this.setDomEditorRef}
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
          keyBindingFn={keyBindingFn}
          blockStyleFn={this.blockStyleFn}
          readOnly={this.props.readOnly}
        />
      </StyledWrapper>
    );
  }
}
