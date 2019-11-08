import React from "react";
import styled from 'styled-components';
import {
  convertToRaw,
  convertFromRaw,
  Editor,
  EditorState,
  ContentState,
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
    // If shared document has changed:
    if (prevProps.shared !== shared) {
      // Update editorState with new content
      const newContent = convertFromRaw(JSON.parse(this.props.shared));
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
    this.setState({editorState});
    const contentState = editorState.getCurrentContent();
    const raw = convertToRaw(contentState);
    this.props.send(JSON.stringify(raw));
    console.log()
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
