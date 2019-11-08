import React from "react";
import styled from 'styled-components';
import {
  Editor,
  EditorState,
  ContentState,
  RichUtils,
} from 'draft-js';
import {mergeText} from "../utils/text";


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
    const { shared } = this.props;
    const local = this.getPlainText();
    // If shared document has changed:
    let newLocal = "";
    if (prevProps.shared !== this.props.shared) {
      newLocal = mergeText(local, shared);
    } else {
      newLocal = mergeText(shared, local);
    }
    // Avoid infinite loop
    if (local !== newLocal) {
      this.setState({
        editorState: EditorState.createWithContent(
          ContentState.createFromText(newLocal)
        )
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
    this.setState({editorState});
    const plain = this.getPlainText();
    console.log(plain);
    this.props.send(plain);
  }

  getPlainText() {
    const { editorState } = this.state;
    const content = editorState.getCurrentContent();
    return content.getPlainText();
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
