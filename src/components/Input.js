import React from "react";

const Input = ({ label, type, placeholder, onChange, name, className }) => {
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
          className={`" rounded-lg border text-textClr bg-bgClr1 p-2 border-#E8E8E8 w-[100%] " + ${className}`}
        />
      </div>
    </div>
  );
};

export default Input;
