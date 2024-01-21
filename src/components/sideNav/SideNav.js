import React, { useState } from "react";
import control from "../../assets/sidebarImg/control.png";
import personalNote from "../../assets/sidebarImg/personalNote.png";
import logo from "../../assets/sidebarImg/logo.png";
import bussinessNote from "../../assets/sidebarImg/bussinessNote.png";
import powerButton from "../../assets/sidebarImg/powerButton.png";
import Routing from "../../Router/Routing";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getItem } from "../../localStorage/getItem/getItem";
import { setIsLogin } from "../../Redux_thunk/userSlice";
import { pathNavigatore } from "../../util";
import { useDispatch } from "react-redux";
import { removeItem } from "../../localStorage/removeItem/removeItem";
const SideNav = () => {
  const [open, setOpen] = useState(false);
  const handleLogout = () => {
    removeItem("userId");
    removeItem("accessToken");
    removeItem("userName");
    dispatch(setIsLogin(false));
    pathNavigatore("");
  };
  const Menus = [
    { title: "PersonalNote", src: personalNote, path: "/" },
    { title: "BussinessNote", src: bussinessNote, path: "/bussinessNote" },
    { title: "Logout", src: powerButton, gap: true, onClick: handleLogout },
  ];

  const dispatch = useDispatch();

  const userName = getItem("userName");
  console.log(userName);
  return (
    <div className="flex ">
      <div className="fixed z-10 border-r border-br1 mt-[60px]">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-bgclr2 h-screen p-5  pt-8 relative duration-300 `}
        >
          <img
            src={control}
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src={logo}
              className={`cursor-pointer duration-500 w-10 ${
                open && "rotate-[360deg] w-10"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              {userName.toUpperCase()}
            </h1>
          </div>
          <ul className="pt-6 z-50">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
            ${Menu.gap ? "bottom-0 mb-32 fixed" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
                onClick={Menu.onClick}
              >
                <img
                  src={Menu.src}
                  className={`cursor-pointer duration-500 w-10 ${
                    open && " w-10"
                  }`}
                />
                <Link
                  to={Menu.path}
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 text-lg`}
                >
                  {Menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-screen flex-1 p-7 z-0 ml-14 mt-10">
        <h1 className="text-2xl font-semibold ">
          <Routing />
        </h1>
      </div>
    </div>
  );
};

export default SideNav;
