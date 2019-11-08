import {connect} from "react-redux";
import Notifications from "../components/Notifications";

const mapStateToProps = state => ({
  notifications: state.flash
});

export default connect(mapStateToProps)(Notifications)
