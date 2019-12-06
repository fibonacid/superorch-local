import { connect } from "react-redux";
import TextEditor from "./TextEditor";
//import { sendDocument } from "../../actions/sendDocument";
//import { sendSCLangQuery } from "../../actions/sendSCLangQuery";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  handleExecuteSelection: () => {},
  sendEditorState: () => {}
  /*handleExecuteSelection: text => {
    dispatch(sendSCLangQuery(text));
  },
  sendEditorState: data => dispatch(sendDocument(data))*/
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
