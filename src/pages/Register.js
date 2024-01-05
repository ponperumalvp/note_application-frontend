import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, setIsLogin, setNewUsers } from "../Redux_thunk/userSlice";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/button/Button";
import googleSignin from "../assets/images/googleSignin.png";
import signup from "../assets/images/signup.png";

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
    console.log(newUser);

    const res = await dispatch(createUser(newUser));
    console.log("register", res);
    (await res.payload) === "verifyed"
      ? dispatch(setIsLogin(true))
      : dispatch(setIsLogin(false));
    history("/");
  };

  return (
    <div className="container mx-auto ">
      <div className=" m-10 px-auto justify-center flex items-center gap-40 md:flex-row flex-col">
        <div className="border-4 border-#E8E8E8 w-[90%] md:w-[90%] lg:w-[25%] h-[600px] flex items-center  flex-col rounded-[5rem]  shadow-2xl ">
          <div>
            <img src={googleSignin} alt="image" className="mt-36 w-24" />
          </div>
          <h2 className="text-3xl font-semibold mt-4">Welcome!</h2>
          <p className="text-[15px] tracking-wide font-normal text-center mt-3 text-zinc-500">
            Capture your ideas quickly , access them from anywhere and sign in
            with google
          </p>

          <Button children="google signin" />
        </div>
        <form
          className="border-4 border-#E8E8E8 w-[90%] md:w-[90%] lg:w-[25%] h-[600px] flex items-center  flex-col rounded-[5rem]  shadow-2xl"
          onSubmit={handleSubmit}
        >
          <img src={signup} alt="image" className="mt-2" />
          <h2 className="text-3xl font-semibold mt-4">Join Notes</h2>
          <Input
            placeholder="Name"
            name="userName"
            value={newUsers.userName}
            type="text"
            required
            onChange={handleChange}
          />

          <Input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={newUsers.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            required
            value={newUsers.password}
            onChange={handleChange}
          />
          <div className="w-[100%] flex items-center justify-center mt-5">
            <Button>Register</Button>
          </div>
          <div className="flex mt-4 items-center justify-center gap-2">
            <div className="border-[1px] border-zinc-400 w-[30%] h-[1px]"></div>
            <p className="text-center ">Already Have Account</p>
            <div className="border-[1px] border-zinc-400 w-[30%] h-[1px]"></div>
          </div>

          <div className="w-[60%] flex justify-center">
            <Button>
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
