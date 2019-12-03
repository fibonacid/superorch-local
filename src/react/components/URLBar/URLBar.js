import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { resetInput } from "../../utils/styles";
import { IconContext } from "react-icons";
import { IoMdRefresh } from "react-icons/io";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 250px;
  display: flex;
  align-items: center;
  border: solid 1px black;
  border-radius: 5px;
  ${props =>
    props.error &&
    css`
      box-shadow: inset 0px 0px 0px 2px rgba(255, 0, 0);
    `};
  ${props =>
    props.success &&
    css`
      box-shadow: inset 0px 0px 0px 2px rgba(0, 255, 0);
    `};
`;

const StyledInput = styled.input`
  ${resetInput}
  border: none;
  text-indent: 10px;
  font-size: 15px;
  line-height: 1.75;
  flex: 1;
`;

const rotate = keyframes`
  0%   { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

const StyledLoading = styled(IoMdRefresh)`
  cursor: pointer;
  animation: 0.5s ${rotate} linear infinite;
  margin-right: 5px;
`;

const StyledRefresh = styled(IoMdRefresh)`
  cursor: pointer;
  margin-right: 5px;
`;

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function URLBar(props) {
  const [originalUrl] = useState(props.url);
  const [url, setUrl] = useState(props.url);
  const [modified, setModified] = useState(false);

  useEffect(() => {
    setModified(url !== props.url);
  }, [url, props.url]);

  function handleReconnect() {
    props.connect(url);
  }

  return (
    <StyledContainer
      data-test={"InputUrlComponent"}
      success={props.isConnected && !modified}
      error={!props.isConnected && !modified}
    >
      <StyledInput
        data-test={"input"}
        type="text"
        placeholder={originalUrl}
        onChange={e => setUrl(e.target.value)}
        value={url}
      />
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        {props.isLoading ? (
          <StyledLoading />
        ) : (
          <StyledRefresh onClick={handleReconnect} />
        )}
      </IconContext.Provider>
    </StyledContainer>
  );
}

export default URLBar;
