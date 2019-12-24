import React, { useState, useCallback } from "react";

function PasswordForm(props) {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");

  const toggleEdit = useCallback(() => {
    setEdit(!edit);
  }, []);

  const handleInputChange = useCallback(event => {
    setValue(event.target.value);
  }, []);

  const handleDone = useCallback(() => {
    setEdit(false);
    props.setPassword(value);
  }, [value]);

  const handleCancel = useCallback(() => {
    setEdit(false);
  }, []);

  return (
    <div>
      {!edit ? (
        <button onClick={toggleEdit}>CHANGE PASSWORD</button>
      ) : (
        <>
          <input onChange={handleInputChange} value={value} />
          <button onClick={handleDone}>DONE</button>
          <button onClick={handleCancel}>CANCEL</button>
        </>
      )}
    </div>
  );
}

export default PasswordForm;
