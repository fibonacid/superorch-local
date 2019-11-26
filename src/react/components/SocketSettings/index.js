import SocketSettings from "./SocketSettings";
import {connect as connectSocket} from "@giantmachines/redux-websocket/dist";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  connect: (value) => dispatch(connectSocket(value))
});

const mapStateToProps = (state) => ({
  success: state.websocket.connected,
  initialValue: state.websocket.url
});

export default connect(mapStateToProps, mapDispatchToProps)(SocketSettings)
