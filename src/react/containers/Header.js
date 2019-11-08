import {connect} from "react-redux";
import Header from "../components/Header";

const mapStateToProps = state => ({
  appName: state.app.name
});

export default connect(mapStateToProps, null)(Header);
