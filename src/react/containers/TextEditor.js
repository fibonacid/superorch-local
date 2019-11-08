import {connect} from 'react-redux';
import {execText, textInput} from "../actions/actions";
import TextEditor from "../components/TextEditor";

const mapStateToProps = state => ({
  remote: {
    ...state.chat.document
  }
});

const mapDispatchToProps = dispatch => ({
  textInput: (data) => dispatch(textInput(data)),
  execText: (data) => dispatch(execText(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
