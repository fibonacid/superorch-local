import { connect } from "react-redux";
import UserTag from "./UserTag";
import { selectBase, selectUser } from "../../reducers/root";
import actions from "../../actions";

const { updateUser } = actions;

const mapDispatchToProps = dispatch => ({
  updateUsername: (userId, name) => dispatch(updateUser(userId, { name }))
});

const mapStateToProps = state => ({
  myUserId: selectBase(state).myUserId,
  user: selectUser(state, selectBase(state).displayedUser)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTag);
