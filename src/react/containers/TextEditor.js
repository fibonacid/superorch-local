import {connect} from 'react-redux';
import {addMessage} from "../actions/actions";
import TextEditor from "../components/TextEditor";

const mapStateToProps = state => ({
  shared: state.chat.document.shared
});

const mapDispatchToProps = dispatch => ({
  send: (message) => dispatch(addMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
