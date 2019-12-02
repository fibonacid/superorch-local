import React from "react";
import { lowerCasedProps } from "../../../../utils/common";

function CodeBlockEntity(props) {
  // Get data
  const { entityKey, contentState } = props;
  const { data } = contentState.getEntity(entityKey);

  const style = {
    background: data.modified
      ? "rgba(255, 0, 0, 0.5)"
      : "rgba(255, 250, 81, 0.5)",
    display: "block"
  };

  console.log(props);

  return (
    <span {...lowerCasedProps(props)} style={style}>
      {props.children}
      <span>{data.times}</span>
    </span>
  );
}

export default CodeBlockEntity;
