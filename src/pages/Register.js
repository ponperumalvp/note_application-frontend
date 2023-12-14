import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, setIsLogin, setNewUsers } from "../Redux_thunk/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const { newUsers } = useSelector((store) => store.users);

  const history = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setNewUsers({ ...newUsers, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      userName: newUsers.userName,
      email: newUsers.email,
      password: newUsers.password,
    };

    const res = await dispatch(createUser(newUser));
    console.log("register", res);
    (await res.payload) === "verifyed"
      ? dispatch(setIsLogin(true))
      : dispatch(setIsLogin(false));
    history("/");
  };

  return (
    <div className=" container w-[100%] h-[100vh] mt-20 flex items-center justify-center">
      <form
        className="flex  w-[500px] flex-col h-[400px] bg-slate-400"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="userName"
          placeholder="userName"
          required
          value={newUsers.userName}
          onChange={handleChange}
          className="m-5 h-10 mt-16"
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          value={newUsers.email}
          onChange={handleChange}
          className="m-5 h-10"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          value={newUsers.password}
          onChange={handleChange}
          className="m-5 h-10"
        />
        <div className="text-center mt-10 ">
          <button
            type="submit"
            className="bg-red-300 p-3 rounded-lg text-white"
          >
            Register
          </button>
          <p>
            already have an account{" "}
            <Link
              to="/login"
              className="bg-red-300 rounded-lg ml-2 text-white p-1"
            >
              Login{" "}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
