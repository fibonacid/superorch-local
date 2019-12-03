import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { resetInput } from "../../utils/styles";
import { IconContext } from "react-icons";
import { IoMdRefresh, IoMdCheckmark, IoMdClose } from "react-icons/io";

const StyledContainer = styled.div`
  border: solid 1px black;
  border-radius: 5px;
`;

const StyledInput = styled.input`
  ${resetInput}
  border: none;
  width: 200px;
  text-indent: 10px;
  font-size: 18px;
  line-height: 1.2;
`;

const rotate = keyframes`
  0%   { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

const StyledWrapper = styled.div`
  margin-right: 5px;
  display: inline-block;
`;

const StyledLoading = styled(IoMdRefresh)`
  cursor: pointer;
  animation: 0.5s ${rotate} linear infinite;
`;

const StyledRefresh = styled(IoMdRefresh)`
  cursor: pointer;
`;

const StyledSuccess = styled(IoMdCheckmark)`
  cursor: normal;
`;

const StyledError = styled(IoMdClose)`
  cursor: pointer;
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
    <StyledContainer data-test={"InputUrlComponent"}>
      <StyledInput
        data-test={"input"}
        type="text"
        placeholder={originalUrl}
        onChange={e => setUrl(e.target.value)}
        value={url}
      />
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <StyledWrapper>
          {modified && <StyledRefresh onClick={handleReconnect} />}
          {!modified && props.isLoading && <StyledLoading />}
          {!modified && props.isConnected && !props.isLoading && (
            <StyledSuccess color={"green"} />
          )}
          {!modified && !props.isConnected && !props.isLoading && (
            <StyledError color={"red"} onClick={handleReconnect} />
          )}
        </StyledWrapper>
      </IconContext.Provider>
    </StyledContainer>
  );
}

export default URLBar;
