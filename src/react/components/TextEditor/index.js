import { connect } from "react-redux";
import TextEditor from "./TextEditor";
import { sendDocument } from "../../actions/sendDocument";
import { sendSCLangQuery } from "../../actions/sendSCLangQuery";

const mapStateToProps = state => ({
  document: state.chat.document
});

const mapDispatchToProps = dispatch => ({
  handleExecuteSelection: text => {
    dispatch(sendSCLangQuery(text));
  },
  sendEditorState: data => dispatch(sendDocument(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
