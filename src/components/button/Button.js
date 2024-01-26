import React from "react";
import { Link } from "react-router-dom";

const Button = ({ onclick, children, variant, link, className }) => {
  return (
    <div className=" w-[100%] ">
      <Link to={link}>
        <button
          onClick={onclick}
          className={` "text-white rounded-lg  w-[100%] h-8 text-center text-[14px] font-extralight tracking-wider " + ${
            variant === "primary"
              ? "bg-primary text-tc1 border-[1px] border-white"
              : "bg-secondary text-tc2 border-2 border-br1"
          } + ${className}`}
        >
          {children}
        </button>
      </Link>
    </div>
  );
};

export default Button;
