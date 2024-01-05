import React from "react";

const Button = ({ onclick, children, variant }) => {
  return (
    <div className="w-[100%] p-4 ">
      <button
        onClick={onclick}
        className={` "text-white rounded-lg p-1 w-[100%] h-8 text-center text-[14px] font-extralight tracking-wider mt-6 gap-3" + ${
          variant === "primary"
            ? "bg-primary text-tc1"
            : "bg-secondary text-tc2 border-2 border-br1"
        }`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
