import React from "react";

function ToggleButton({ isOn, handleToggle, onLabel = "ON", offLabel = "OFF" }) {
  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`btn ${isOn ?"btn-success" : "btn-danger"}`}
      style={{ width: "100px" }}
    >
      {isOn ? onLabel : offLabel}
    </button>
  );
}

export default ToggleButton;
