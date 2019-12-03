import { lowerCasedProps } from "../../../../utils/common";
import React from "react";

function LinkEntity(props) {
  const style = {
    color: "blue",
    textDecoration: "underline"
  };

  return (
    <span {...lowerCasedProps(props)} style={style}>
      {props.children}
    </span>
  );
}

export default LinkEntity;
