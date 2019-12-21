import { connect } from "react-redux";
import UserList from "./UserList";
import { selectUsers, selectUser } from "../../reducers/root";
import { displayUser } from "../../actions/displayUser";

const mapDispatchToProps = dispatch => ({
  displayUser: userId => dispatch(displayUser(userId))
});

const mapStateToProps = state => ({
  displayedUser: state.base.displayedUser,
  myUserId: state.client.status.myUserId,
  users: selectUsers(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
