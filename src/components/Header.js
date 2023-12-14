import React from "react";
import { Link } from "react-router-dom";
import { setIsLogin } from "../Redux_thunk/userSlice";
import { useDispatch } from "react-redux";
import { removeItem } from "../localStorage/removeItem/removeItem";

const nav_links = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Create Note",
    path: "/create",
  },
  {
    name: "About",
    path: "/about",
  },
];

const Header = () => {
  const handleLogout = () => {
    removeItem("userId");
    removeItem("accessToken");
    dispatch(setIsLogin(false));
  };
  const dispatch = useDispatch();
  return (
    <div className="bg-slate-400 w-[100%] h-[60px] flex items-center">
      <div className="container ">
        <div className="flex justify-between items-center mx-32    ">
          <div className="text-2xl font-[500] text-white">Notes</div>
          <div className="flex ">
            {nav_links.map((item, index) => {
              return (
                <div key={index} className="mx-10">
                  <Link to={item.path}>{item.name}</Link>
                </div>
              );
            })}
          </div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
