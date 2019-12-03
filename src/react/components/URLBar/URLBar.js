import React, { useState } from "react";
import styled from "styled-components";
import { resetInput } from "../../utils/styles";
import { IconContext } from "react-icons";
import { IoMdRefresh, IoMdCheckmark, IoMdClose } from "react-icons/io";

const StyledContainer = styled.div`
  border: solid 1px black;
`;

const StyledInput = styled.input`
  ${resetInput}
  border: none;
  width: 200px;
`;

export function URLBar(props) {
  const [value, setValue] = useState(props.url);

  function handleClick() {
    //props.onClick(value);
  }

  return (
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      <StyledContainer data-test={"InputUrlComponent"}>
        <StyledInput
          data-test={"input"}
          type="text"
          onChange={e => setValue(e.target.value)}
          value={value}
        />

        {props.isLoading && <IoMdRefresh onClick={handleClick} />}
        {props.isConnected && !props.isLoading && (
          <IoMdCheckmark color={"green"} />
        )}
        {!props.isConnected && !props.isLoading && <IoMdClose color={"red"} />}
      </StyledContainer>
    </IconContext.Provider>
  );
}

export default URLBar;
