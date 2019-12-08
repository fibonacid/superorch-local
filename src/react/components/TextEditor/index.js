import { connect } from "react-redux";
import TextEditor from "./TextEditor";
import { updateDocument } from "../../actions/updateDocument";
import { addScQuery } from "../../actions/addScQuery";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  handleExecuteSelection: text => {
    dispatch(
      addScQuery(0, {
        value: text
      })
    );
  },
  sendEditorState: data =>
    dispatch(
      updateDocument({
        content: data
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
