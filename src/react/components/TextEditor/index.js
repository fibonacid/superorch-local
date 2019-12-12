import { connect } from "react-redux";
import TextEditor from "./TextEditor";
import { c_updateDocument } from "../../actions/client/crudDocuments";
//import { c_createScQuery } from "../../actions/client/crudScQueries";

const mapStateToProps = state => ({
  user: state.client.users.find(
    user => user.id === state.client.status.myUserId
  ),
  docId: state.client.status.myDocId
});

const mapDispatchToProps = dispatch => ({
  handleExecuteSelection: () => {},
  sendEditorState: (id, data) =>
    dispatch(
      c_updateDocument(id, {
        value: data
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);

/*
  const mapDispatchToProps = dispatch => ({
    handleExecuteSelection: text => {
      dispatch(
        c_createScQuery(0, {
          value: text
        })
      );
    },
    sendEditorState: data =>
      dispatch(
        c_updateDocument(0, {
          content: data
        })
      )
  });
*/
