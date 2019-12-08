import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = state => ({
  appName: state.base.name
});

export default connect(mapStateToProps, null)(Header);
