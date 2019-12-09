import { connect } from "react-redux";
import TextEditor from "./TextEditor";
import { updateDocument } from "../../actions/crudDocuments";
import { createScQuery } from "../../actions/crudScQueries";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  handleExecuteSelection: text => {
    dispatch(
      createScQuery(0, {
        value: text
      })
    );
  },
  sendEditorState: data =>
    dispatch(
      /* todo: keep track of myDocument */
      updateDocument(0, {
        content: data
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
