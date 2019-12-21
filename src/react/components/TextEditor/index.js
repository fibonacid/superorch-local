import { connect } from "react-redux";
import TextEditor from "./TextEditor";
import { c_updateDocument } from "../../actions/client/crudDocuments";
import { c_appendScQuery } from "../../actions/client/crudScQueries";
import { selectDocuments, selectUser } from "../../reducers/root";

const mapStateToProps = state => {
  const document = selectDocuments(state).find(
    doc => doc.userId === state.base.displayedUser
  );
  return {
    document,
    readOnly: document && document.id !== state.client.status.myDocId
  };
};

const mapDispatchToProps = dispatch => ({
  handleExecuteSelection: text => {
    dispatch(
      c_appendScQuery({
        input: text
      })
    );
  },
  sendEditorState: (id, data) =>
    dispatch(
      c_updateDocument(id, {
        value: data
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
