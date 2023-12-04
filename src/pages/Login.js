import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser, setExistUsers } from "../Redux_thunk/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const { existUsers } = useSelector((store) => store.users);
  const history = useNavigate();

  const handleChange = () => {
    const { name, value } = e.target;
    setExistUsers({ ...existUsers, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existUser = {
      email: existUsers.email,
      password: existUsers.password,
    };
    return dispatch(verifyUser(existUser)), history("/");
  };
  return (
    <>
      <div className=" container w-[100%] mt-20 flex items-center justify-center">
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
            className="m-5 h-10"
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
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
