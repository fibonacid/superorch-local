import { connect } from "react-redux";
import TextEditor from "./TextEditor";
import actions from "../../actions";
import { selectDocuments } from "../../reducers/root";

const { updateDocument, appendScQuery } = actions;

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
      appendScQuery({
        input: text
      })
    );
  },
  sendEditorState: (id, data) =>
    dispatch(
      updateDocument(id, {
        value: data
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
