import {connect} from 'react-redux';
import {pushDocument} from "../../actions/actions";
import TextEditor from "./TextEditor";

const mapStateToProps = state => ({
  remote: {
    ...state.chat.document
  }
});

const mapDispatchToProps = dispatch => ({
  textInput: (data) => dispatch(pushDocument(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
