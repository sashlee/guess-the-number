import React from "react";

const Button = ({ style, onClick, value }) => {
  return (
    <>
      <button
        type="submit"
        className="button"
        style={{ ...style }}
        onClick={onClick}
      >
        {value}
      </button>
    </>
  );
};

export default Button;
