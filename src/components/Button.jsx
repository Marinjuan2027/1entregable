import React from "react";

const Button = ({ changeQuote, color }) => {
  return (
    <div className="button2">
      <button
        onClick={changeQuote}
        style={{ color: "black", backgroundColor: color }}
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

export default Button;
