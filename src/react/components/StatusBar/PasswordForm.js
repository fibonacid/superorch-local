import React, { useState, useCallback } from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  padding: 0 10px;
`;

function PasswordForm(props) {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");

  const toggleEdit = useCallback(() => {
    setEdit(!edit);
  }, []);

  const handleInputChange = useCallback(event => {
    setValue(event.target.value);
  }, []);

  const handleDisable = useCallback(() => {
    props.disablePassword();
  }, []);

  const handleDone = useCallback(() => {
    setEdit(false);
    props.setPassword(value);
  }, [value]);

  const handleCancel = useCallback(() => {
    setEdit(false);
  }, []);

  const { password, requirePassword } = props.server;

  return (
    <div>
      {!edit ? (
        <>
          {requirePassword ? (
            <>
              <StyledSpan>{password}</StyledSpan>
              <button onClick={toggleEdit}>CHANGE</button>
              <button onClick={handleDisable}>DISABLE</button>
            </>
          ) : (
            <button onClick={toggleEdit}>SET PASSWORD</button>
          )}
        </>
      ) : (
        <>
          <input onChange={handleInputChange} value={value} />
          <button type="submit" onClick={handleDone}>
            DONE
          </button>
          <button onClick={handleCancel}>CANCEL</button>
        </>
      )}
    </div>
  );
}

export default PasswordForm;
