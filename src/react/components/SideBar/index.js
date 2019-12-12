import { connect } from "react-redux";
import SideBar from "./SideBar";
import { selectUsers } from "../../reducers/root";

const mapStateToProps = state => ({
  users: selectUsers(state)
});

export default connect(mapStateToProps, null)(SideBar);
