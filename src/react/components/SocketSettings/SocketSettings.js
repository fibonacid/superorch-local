import React from 'react';
import PropTypes from 'prop-types';
import InputURL from "../InputURL/InputURL";

function SocketSettings(props) {
  return (
    <div>
      <InputURL onClick={props.connect}/>
    </div>
  )
}

SocketSettings.propTypes = {
  connect: PropTypes.func.isRequired
};

export default SocketSettings;
