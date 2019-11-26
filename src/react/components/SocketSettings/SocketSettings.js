import React from 'react';
import InputURL from "../InputURL/InputURL";

function SocketSettings(props) {
  return (
    <div>
      <InputURL onClick={props.connect}/>
    </div>
  )
}

export default SocketSettings;
