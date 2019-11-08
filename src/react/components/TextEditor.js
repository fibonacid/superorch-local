// @flow

import React from "react";
import styled from 'styled-components';
import {
  convertToRaw,
  convertFromRaw,
  Editor,
  EditorState,
  RichUtils,
} from 'draft-js';

/* ============================== */
/*   STYLES                       */
/* ============================== */

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

    this.state = {
      editorState: EditorState.createEmpty()
    };

    this.onChange = this.onChange.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.setDomEditorRef = ref => this.domEditor = ref;
    this.focus = () => this.domEditor.focus();
  }

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

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

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
