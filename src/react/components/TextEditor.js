import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';
import React from "react";
import styled from 'styled-components'

const StyledWrapper = styled.div`
  flex: 1;
`;

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = this.onChange.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
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
    this.setState({editorState});
    const content = editorState.getCurrentContent();
    console.log(convertToRaw(content));
  }

  render() {
    return (
      <StyledWrapper>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
        />
      </StyledWrapper>
    )
  }
}


export default TextEditor;
