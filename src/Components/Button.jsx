import React from "react";

function Button({ text, onClick, type = "button" }) {
  return (
    // Function called when button is clicked
    <button type={type} onClick={onClick} className="btn btn-warning w-100">   
      {text}
    </button>
  );
}

export default Button;
