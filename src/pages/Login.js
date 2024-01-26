import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  verifyUser,
  setExistUsers,
  setIsLogin,
} from "../Redux_thunk/userSlice";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import loginImg from "../assets/images/signup.png";
import Button from "../components/button/Button";
import login from "../assets/images/login.jpg";

const Login = () => {
  const dispatch = useDispatch();

  const { existUsers } = useSelector((store) => store.users);

  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setExistUsers({ ...existUsers, [name]: value }));
  };
  console.log(existUsers);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const existUser = {
        email: existUsers.email,
        password: existUsers.password,
      };
      console.log(existUser);
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
    <div className="container mx-auto w-[100%] h-[100vh]">
      <div className="px-auto flex flex-col justify-center  items-center gap-40 md:flex-row ">
        <div className="border-4 border-br1 bg-bgClr1  w-[90%] md:w-[50%] lg:w-[25%] h-[600px] flex items-center justify-center  flex-col rounded-[3rem]  shadow-2xl mt-10">
          <h2 className="text-xl lg:text-3xl font-semibold m-4 text-center text-textClr p-2">
            Welcome to the Notey
          </h2>
          <img
            src={login}
            alt="image"
            className="w-[90%] lg:w-[100%] md:w-[100%] "
          />
        </div>
        <form
          className="border w-[90%] md:w-[60%] lg:w-[25%] h-[600px] flex items-center  flex-col rounded-[3rem]  shadow-2xl mt-10 bg-bgClr1"
          onSubmit={handleSubmit}
        >
          <img src={loginImg} alt="image" className="mt-8" />
          <h2 className="text-3xl font-semibold mt-4 text-textClr">
            Login Notey
          </h2>
          <div className="w-[100%]">
            <div className="">
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={existUsers.email}
                onChange={handleChange}
              />
            </div>
            <div className="mt-9">
              <Input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={existUsers.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-[90%] flex items-center justify-center mt-10">
            <Button variant="primary" onclick={handleSubmit}>
              Login
            </Button>
          </div>
          <p className="text-center mt-10 text-textClr">
            If You Don't Have Account
          </p>
          <div className="w-[40%] flex justify-center mt-2">
            <Button>
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
