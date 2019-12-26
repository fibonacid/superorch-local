import { connect } from "react-redux";
import UserTag from "./UserTag";
import { selectUser } from "../../reducers/root";
import actions from "../../actions";

const { updateUser } = actions;

const mapDispatchToProps = dispatch => ({
  updateUsername: (userId, name) => dispatch(updateUser(userId, { name }))
});

const mapStateToProps = state => ({
  myUserId: state.client.status.myUserId,
  user: selectUser(state, state.base.displayedUser)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTag);
