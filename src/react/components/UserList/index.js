import { connect } from "react-redux";
import UserList from "./UserList";
import { selectUsers, selectUser } from "../../reducers/root";

const mapStateToProps = state => ({
  myUserId: state.client.status.myUserId,
  users: selectUsers(state)
});

export default connect(mapStateToProps, null)(UserList);
