import {connect} from 'react-redux';
import TextEditor from "./TextEditor";
import {sendDocument} from "../../actions/sendDocument";

const mapStateToProps = state => ({
  document: state.chat.document
});

const mapDispatchToProps = dispatch => ({
  textInput: (data) => dispatch(sendDocument(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
