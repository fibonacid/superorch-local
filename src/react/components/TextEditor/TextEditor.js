import React from "react";
import styled from 'styled-components';
import _ from 'lodash';
import {
  convertToRaw,
  convertFromRaw,
  Editor,
  EditorState,
  getDefaultKeyBinding,
  CompositeDecorator,
  KeyBindingUtil,
  Modifier,
  RichUtils
} from 'draft-js';
import {lowerCasedProps} from "../../utils/common";


// ----------------------
// Styled Components
// ----------------------

const StyledWrapper = styled.div`
   flex: 1;
`;

// -----------------------
// Key Binding Function
// -----------------------

const { hasCommandModifier } = KeyBindingUtil;

const keyBindingFn = (e) => {
  if (e.keyCode === 13 /* `CR` key */ && hasCommandModifier(e)) {
    return 'execute-selected-block';
  }
  return getDefaultKeyBinding(e);
};

// ------------------------
// Entities
// ------------------------


function createLinkEntity(editorState, selectionState) {
  const contentState = editorState.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity(
    'LINK',
    'MUTABLE',
    {url: 'http://www.zombo.com'}
  );
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  const contentStateWithLink = Modifier.applyEntity(
    contentStateWithEntity,
    selectionState,
    entityKey
  );
  return EditorState.push(editorState, contentStateWithLink);
}



function createExecBlockEntity(editorState, selectionState) {
  const contentState = editorState.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity(
    'EXEC_BLOCK',
    'MUTABLE',
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



function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === 'LINK'
      );
    },
    callback,
  );
}



function findExecBlockEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === 'EXEC_BLOCK'
      );
    },
    callback,
  );
}

// ------------------------
// Decorator
// ------------------------

const compositeDecorator = new CompositeDecorator([
  {
    strategy: (
      contentBlock,
      callback,
      contentState
    ) => findLinkEntities(contentBlock, callback, contentState),
    component: LinkComponent,
  },
  {
    strategy: (
      contentBlock,
      callback,
      contentState
    ) => findExecBlockEntities(contentBlock, callback, contentState),
    component: ExecBlockComponent,
  }
]);

// ------------------------
// Block Style
// ------------------------

function myBlockStyleFn(contentBlock) {
  const type = contentBlock.getType();
  if (type === 'blockquote') {
    return 'superFancyBlockquote';
  }
}

// ------------------------
// Text Editor Component
// ------------------------

export default class TextEditor extends React.Component {

  constructor(props) {
    super(props);

    // Initialize component state.
    this.state = {
      editorState: EditorState.createEmpty(compositeDecorator),
      readOnly: false
    };

    this.setDomEditorRef = ref => this.domEditor = ref;

    // This function forces the editor to be focused.
    this.focus = () => this.domEditor.focus();

    // Event Handler Bindings
    this.onChange = this.onChange.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  /**
   * COMPONENT DID UPDATE
   * ==================================================
   * This class is called every time the component
   * needs to update it's internal state.
   * Example: when setState is called or when its props
   * change.
   *
   * @param prevProps
   * @param prevState
   * @param snapshot
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { remote } = this.props;
    // If remote document has changed:
    if (prevProps.remote.input.value !== remote.input.value) {
      // Update editorState with new content
      const newContent = convertFromRaw(JSON.parse(remote.input.value));
      const newState = EditorState.push(this.state.editorState, newContent, "change-block-data");

      // Get previous selection
      const prevSelection = prevState.editorState.getSelection();

      // Override new selection with old one.
      // This is done because selection should be handled privately, so that
      // people can write at the same time without having the text anchor constantly moving around
      const newStateWithoutSelection = EditorState.set(newState, {
        selection: prevSelection,
        currentContent: newContent,
      });
      // Set local state
      this.setState({
        editorState: newStateWithoutSelection
      });
    }
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
      return 'handled';
    }
    return 'not-handled';
  }

  textBot() {
    const { editorState } = this.state;
    return setTimeout(() => {
      //editorState.
    }, 2000)
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
    const selectionState = editorState.getSelection();

    // Split selection into content boxes
    const anchorKey = selectionState.getAnchorKey();
    const currentContent = editorState.getCurrentContent();
    const currentContentBlock = currentContent.getBlockForKey(anchorKey);
    const entityKey = currentContentBlock.getEntityAt(0);

    // If entity already exists:
    if (entityKey) {
      // Modify entity metadata
      const { data } = currentContent.getEntity(entityKey);
      const newContent = currentContent.mergeEntityData(entityKey, {
        times: data.times + 1,
        modified: true
      });
      const newState = EditorState.push(editorState, newContent, "change-block-data");
      this.onChange(newState);

      // Force decorators to be re rendered.
      // todo: There might be a better way to achieve this
      this.forceReRenderEditor(editorState);
    }
    // If entity doesn't exists:
    else {
      const newState = createExecBlockEntity(editorState, selectionState);
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
    this.setState({editorState}, callback);

    const changeType = editorState.getLastChangeType();
    console.log(changeType);

    // Extrapolate raw contentState
    const contentState = editorState.getCurrentContent();
    const raw = convertToRaw(contentState);

    // And send it the socket server as a string
    this.props.textInput(JSON.stringify(raw));
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
      editorState: EditorState.set(editorState, { decorator: compositeDecorator })
    })
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
        onClick={this.focus} >
        <Editor
          ref={this.setDomEditorRef}
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
          keyBindingFn={keyBindingFn}
          blockStyleFn={this.blockStyleFn}
          readOnly={this.state.readOnly}
        />
      </StyledWrapper>
    )
  }
}



// ------------------------
// Decorator Components
// ------------------------

/**
 * SIGNED SPAN
 * ================
 * @param props
 * @returns {*}
 * @constructor
 */
function LinkComponent(props) {
  const style = {
    color: "blue",
    textDecoration: "underline"
  };
  return (
    <span {...lowerCasedProps(props)} style={style}>
      {props.children}
    </span>
  );
}

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function ExecBlockComponent(props) {
  // Get data
  const { entityKey, contentState } = props;
  const { data } = contentState.getEntity(entityKey);

  const style = {
    background: data.modified
      ? "rgba(255, 0, 0, 0.5)"
      : "rgba(255, 250, 81, 0.5)",
    display: "block"
  };

  return (
    <span {...lowerCasedProps(props)} style={style}>
      {props.children}
      <span>{data.times}</span>
    </span>
  );
}
