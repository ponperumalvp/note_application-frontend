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
    try {
      e.preventDefault();
      console.log("login enter");

      const existUser = {
        email: existUsers.email,
        password: existUsers.password,
      };
      const resp = await dispatch(verifyUser(existUser));
      console.log("verifyuser", resp);
      resp.payload === "verifyed"
        ? dispatch(setIsLogin(true))
        : dispatch(setIsLogin(false));
      history("/");
    } catch (err) {
      console.log("login err:", err);
    }
  };
  return (
    <div>
      <div className=" container w-[100%] mt-10 flex items-center justify-center h-[100vh]  bg-transparent">
        <form
          className="flex  w-[500px] flex-col h-[400px] shadow-2xl rounded-lg bg-gray-200 "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            value={existUsers.email}
            onChange={handleChange}
            className="m-5 h-10 mt-20 bg-green-50 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            value={existUsers.password}
            onChange={handleChange}
            className="m-5 h-10 mt-5 bg-green-50 focus:outline-none"
          />
          <div className="text-center mt-10 ">
            <button
              type="submit"
              className="bg-red-300 p-3 rounded-lg text-white"
            >
              Login
            </button>
            <p className="mt-10">
              if you don't have account
              <Link
                to="/"
                className="bg-red-300 rounded-lg ml-2 text-white p-1"
              >
                sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
