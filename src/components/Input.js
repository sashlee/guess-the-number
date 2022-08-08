import React from "react";

const Input = ({ value, id, placeholder, type, onChange, style }) => (
  <>
    <input
      type={type}
      value={value}
      id={id}
      style={{ ...style }}
      className="input"
      placeholder={placeholder}
      onChange={onChange}
    />
  </>
);

export default Input;
