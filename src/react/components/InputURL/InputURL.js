import React, { useState } from "react";
import styled from 'styled-components';

const StyledContainer = styled.div`
`;

const StyledInput = styled.input`
  color: ${props => 
  props.success
    ? 'green; font-weight: bold;'
    : 'auto'
  }}
`;

const StyledButton = styled.input`
`;

export default function InputUrl(props) {

  const [ value, setValue ] = useState(props.url);

  let textInput = React.createRef();

  function handleClick() {
    const { value } = textInput.current;
    props.onClick(value);
  }

  return (
    <StyledContainer data-test={"InputUrlComponent"}>
      <StyledInput
        data-test={"input"}
        type="text"
        placeholder={"ws://192.168.0.1"}
        ref={textInput} />
      <StyledButton
        data-test={"button"}
        type="button"
        value="Connect"
        onClick={handleClick}
      />
    </StyledContainer>
  );
}
