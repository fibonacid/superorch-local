import {
  Editor,
  EditorState,
  convertToRaw,
  ContentState,
  RichUtils,
} from 'draft-js';
import React from "react";
import styled from 'styled-components'

const StyledWrapper = styled.div`
  flex: 1;
`;

class TextEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(
        ContentState.createFromText(props.shared)
      )
    };
    this.onChange = this.onChange.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.setDomEditorRef = ref => this.domEditor = ref;
    this.focus = () => this.domEditor.focus();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

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
      <StyledWrapper onClick={this.focus}>
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
