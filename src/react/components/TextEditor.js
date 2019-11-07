import {Editor, EditorState} from 'draft-js';
import React from "react";
import styled from 'styled-components/macro'

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onChange(editorState) {
    this.setState({editorState});
  }

  render() {
    return <Editor
      editorState={this.state.editorState}
      onChange={this.onChange.bind(this)}
    />;
  }
}

export default TextEditor;
