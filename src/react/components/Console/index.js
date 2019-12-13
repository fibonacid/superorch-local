import { connect } from "react-redux";
import Console from "./Console";
import { selectScQueries } from "../../reducers/root";

const mapStateToProps = state => ({
  queries: selectScQueries(state)
});

export default connect(mapStateToProps)(Console);
