import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, setNewUsers } from "../Redux_thunk/userSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const { users, newUsers } = useSelector((store) => store.users);
  const URL = "http://localhost:4000/users";
  const history = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setNewUsers({ ...newUsers, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      userName: newUsers.userName,
      email: newUsers.email,
      password: newUsers.password,
    };
    return dispatch(createUser(newUser)), history("/");
  };

  return (
    <div className=" container w-[100%] mt-20 flex items-center justify-center">
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
        </div>
      </form>
    </div>
  );
};

export default Register;
