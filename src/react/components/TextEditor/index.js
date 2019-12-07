import { connect } from "react-redux";
import TextEditor from "./TextEditor";
import { updateDocument } from "../../actions/updateDocument";
//import { sendDocument } from "../../actions/sendDocument";
//import { sendSCLangQuery } from "../../actions/sendSCLangQuery";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  handleExecuteSelection: () => {},
  sendEditorState: data =>
    dispatch(
      updateDocument({
        content: data
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);

/*
handleExecuteSelection: text => {
  dispatch(sendSCLangQuery(text));
},
sendEditorState: data => dispatch(sendDocument(data))
*/
