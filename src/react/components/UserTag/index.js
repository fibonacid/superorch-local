import { connect } from "react-redux";
import UserTag from "./UserTag";
import { selectUser } from "../../reducers/root";
import { c_updateUser } from "../../actions/client/crudUsers";

const mapDispatchToProps = dispatch => ({
  updateUsername: (userId, name) => dispatch(c_updateUser(userId, { name }))
});

const mapStateToProps = state => ({
  myUserId: state.client.status.myUserId,
  user: selectUser(state, state.base.displayedUser)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTag);
