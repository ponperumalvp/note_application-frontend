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
    <div className="container mx-auto">
      <div className="m-10 px-auto justify-center flex items-center gap-40 md:flex-row flex-col">
        <div className="border-4 border-#E8E8E8 w-[90%] md:w-[50%] lg:w-[25%] h-[600px] flex items-center justify-center  flex-col rounded-[5rem]  shadow-2xl ">
          <h2 className="text-xl lg:text-3xl font-semibold m-4 text-center p-2">
            Welcome to the Notes
          </h2>
          <img
            src={login}
            alt="image"
            className="w-[90%] lg:w-[100%] md:w-[100%] "
          />
        </div>
        <form
          className="border-4 border-#E8E8E8 w-[90%] md:w-[60%] lg:w-[25%] h-[600px] flex items-center  flex-col rounded-[5rem]  shadow-2xl"
          onSubmit={handleSubmit}
        >
          <img src={loginImg} alt="image" />
          <h2 className="text-3xl font-semibold mt-4">Login Notes</h2>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            value={existUsers.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={existUsers.password}
            onChange={handleChange}
          />

          <div className="w-[100%] flex items-center justify-center mt-8">
            <Button variant="primary">Login</Button>
          </div>
          <p className="text-center mt-10">If You Don't Have Account</p>
          <div className="w-[60%] flex justify-center">
            <Button>
              <Link to="/">Register</Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
