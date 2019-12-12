import { connect } from "react-redux";
import TextEditor from "./TextEditor";
import { c_updateDocument } from "../../actions/client/crudDocuments";
import { selectDocument } from "../../reducers/root";

//import { c_createScQuery } from "../../actions/client/crudScQueries";

const mapStateToProps = state => {
  const { id: docId } = selectDocument(state, state.wsclient.myDocIds[0]);
  return {
    docId
  };
};

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

/*handleExecuteSelection: text => {
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
  )*/
