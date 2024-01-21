import React, { useState } from "react";

import SideNav from "./sideNav/SideNav";

const Header = () => {
  return (
    <div className="container ">
      <div className=" w-[100%] h-[60px] flex items-center  border-b border-br1 fixed z-10 bg-bgclr2">
        <div className="flex justify-between items-center   ">
          <div className="text-2xl font-[500] text-white ml-10">Notey</div>
        </div>
      </div>
      <div>
        <SideNav />
      </div>
    </div>
  );
};

export default Header;
