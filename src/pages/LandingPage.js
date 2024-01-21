import React from "react";
import Button from "../components/button/Button";
import { Link } from "react-router-dom";
import noteImg from "../assets/images/noteImg.png";
import myImg from "../assets/images/myImg.jpg";

const LandingPage = () => {
  return (
    <div className="container">
      <div className=" text-white">
        <div className="mx-20">
          <div className="flex justify-between my-4">
            <div>
              <h2>Notey</h2>
            </div>
            <div className="flex justify-around items-center mr-10 w-[30%] ">
              <div className="m-2 w-[30%]">
                <Button children="Login" variant="primary" link="/login" />
              </div>
              <div className="m-2 w-[50%]">
                <Button link="/register">Sign up</Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 mt-10">
            <div className="col-span-2">
              <div>
                <h1>All Your Notes.</h1>
                <h1>Organized.</h1>
                <h1>Effortless.</h1>
              </div>
              <div className="w-[60%] mt-10">
                <p>
                  Inspiration strikes anywhere.Notey lets you capture,Organize
                  and share your ideas accross my device
                </p>
              </div>
              <div className="w-[60%] m-5">
                <Button children="Sign up - it's free" link="/register" />
              </div>
              <div className="border-[1px] border-zinc-400 my-10 w-[20%] flex justify-center"></div>
              <div className="w-[60%]">
                <h4>"Notey is like my secret creative super power" </h4>
              </div>
              <div className="flex gap-3 items-center mt-4">
                <img src={myImg} alt="" className="rounded-[50%] w-10 h-10" />
                <div>
                  <p>Ponperumal VP</p>
                  <p>
                    Developed by Ponperumal &copy; {new Date().getFullYear()}{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <img src={noteImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
