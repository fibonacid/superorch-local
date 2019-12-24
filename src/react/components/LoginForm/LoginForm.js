import React, { useState, useCallback } from "react";
import styled from "styled-components";

const StyledField = styled.div`
  padding-top: 8px;
`;

const StyledLabel = styled.label`
  display: block;
`;

const StyledInput = styled.input`
  margin-top: 8px;
`;

const StyledSubmit = styled(StyledInput)`
  width: 100%;
`;

export default function LoginForm(props) {
  const [url, setUrl] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = useCallback(({ target }) => {
    switch (target.name) {
      case "url":
        return setUrl(target.value);
      case "password":
        return setPassword(target.value);
    }
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      props.handleSubmit(url, password);
    },
    [url, password]
  );

  return (
    <form onSubmit={handleSubmit}>
      <StyledField>
        <StyledLabel>URL Address</StyledLabel>
        <StyledInput
          name="url"
          type="text"
          onChange={handleChange}
          value={url}
        />
      </StyledField>
      <StyledField>
        <StyledLabel>Password</StyledLabel>
        <StyledInput
          name="password"
          type="text"
          onChange={handleChange}
          value={password}
        />
      </StyledField>
      <StyledSubmit type="submit" value="submit" />
    </form>
  );
}
