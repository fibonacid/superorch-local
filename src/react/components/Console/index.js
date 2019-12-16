import { connect } from "react-redux";
import Console from "./Console";
import { selectScQueries, selectUsers } from "../../reducers/root";

const mapStateToProps = state => ({
  users: selectUsers(state),
  queries: selectScQueries(state)
});

export default connect(mapStateToProps)(Console);
