import React from "react";
// Instead of writing props , here I am  destructure the props object directly
function Input({ label, type, value, onChange, placeholder }) {
  return (
    <div className="mb-3">
      {/* Label above the input */}
      <label className="form-label">{label}</label>
      {/* Bootstrap styled input field */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-control"
      />
    </div>
  );
}

export default Input;
