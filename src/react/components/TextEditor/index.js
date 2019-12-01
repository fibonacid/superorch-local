import {connect} from 'react-redux';
import TextEditor from "./TextEditor";

const mapStateToProps = state => ({
  remote: {
    input: {
      value: ""
    }
  }
});

const mapDispatchToProps = dispatch => ({
  textInput: (data) => dispatch(null),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
