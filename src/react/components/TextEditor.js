import React from "react";
import styled from 'styled-components';
import {
  convertToRaw,
  convertFromRaw,
  Editor,
  EditorState,
  RichUtils,
} from 'draft-js';

// =======================================
//    STYLES
// =======================================
const StyledWrapper = styled.div`
   flex: 1;
`;

/**=======================================
 *    TEXT EDITOR
 *========================================
 */
class TextEditor extends React.Component {

  constructor(props) {
    super(props);
    // Initialize component state.
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.setDomEditorRef = ref => this.domEditor = ref;
    // This function forces the editor to be focused.
    this.focus = () => this.domEditor.focus();
    // Event Handler Bindings.
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
      //console.log(newContent);
      this.setState({
        editorState: EditorState.createWithContent(newContent)
      })
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
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  /**
   * ON CHANGE
   * ===================================
   * This function is called every time the editor
   * needs to update it's internal data,
   * example: when user types some text
   * @param editorState
   */
  onChange(editorState) {
    // Update editor state
    this.setState({editorState});
    // If some text were added:
    //if (editorState.getLastChangeType() === "insert-characters") {
      // Extrapolate raw contentState
      const contentState = editorState.getCurrentContent();
      const raw = convertToRaw(contentState);
      // And send it the socket server as a string
      this.props.textInput(JSON.stringify(raw));
    //}
  }

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
        />
      </StyledWrapper>
    )
  }
}


export default TextEditor;
