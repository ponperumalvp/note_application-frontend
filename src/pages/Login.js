import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  verifyUser,
  setExistUsers,
  setIsLogin,
} from "../Redux_thunk/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const { existUsers } = useSelector((store) => store.users);

  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setExistUsers({ ...existUsers, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existUser = {
      email: existUsers.email,
      password: existUsers.password,
    };
    await dispatch(verifyUser(existUser));
    dispatch(setIsLogin(true));
    console.log("login successs");
    history("/");
  };
  return (
    <div>
      <div className=" container w-[100%] mt-20 flex items-center justify-center h-[100%]">
        <form
          className="flex  w-[500px] flex-col h-[400px] bg-slate-400"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            value={existUsers.email}
            onChange={handleChange}
            className="m-5 h-10 mt-14"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            value={existUsers.password}
            onChange={handleChange}
            className="m-5 h-10"
          />
          <div className="text-center mt-10 ">
            <button
              type="submit"
              className="bg-red-300 p-3 rounded-lg text-white"
            >
              Login
            </button>
            <p
              onClick={() => {
                dispatch(setIsLogin(true));
              }}
              className="mt-6"
            >
              if you don't have account
              <Link
                to="/register"
                className="bg-red-300 rounded-lg ml-2 text-white p-1"
              >
                sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
