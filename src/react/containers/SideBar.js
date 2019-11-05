import {connect} from "react-redux";
import SideBar from "../components/SideBar";

const mapStateToProps = state => ({
  users: state.chat.users
});

export default connect(mapStateToProps, null)(SideBar);
