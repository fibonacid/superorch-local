import { connect } from "react-redux";
import UserTag from "./UserTag";
import { selectUser } from "../../reducers/root";
import { c_updateUser } from "../../actions/client/crudUsers";

const mapDispatchToProps = dispatch => ({
  updateUsername: (userId, name) => dispatch(c_updateUser(userId, { name }))
});

const mapStateToProps = state => ({
  user: selectUser(state, state.client.status.myUserId)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTag);
