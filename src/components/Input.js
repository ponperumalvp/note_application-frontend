import React from "react";

const Input = ({ label, type, placeholder, onChange, name }) => {
  return (
    <div className="h-2 my-4 w-[100%] p-2">
      <label>{label}</label>
      <div className="w-[100%] p-2">
        <input
          type={type}
          name={name}
          required
          placeholder={placeholder}
          onChange={onChange}
          className="rounded-md border-2 p-2 border-#E8E8E8 w-[100%]"
        />
      </div>
    </div>
  );
};

export default Input;
