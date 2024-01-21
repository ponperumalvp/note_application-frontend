import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { useSelector } from "react-redux";
import CreateNote from "../pages/personalNote/CreateNote";
import PersonalNotes from "../pages/personalNote/PersonalNotes";

import BussinessNotes from "../pages/BussinessNote/BussinessNotes";

import CreateBussinessNotes from "../pages/BussinessNote/CreateBussinessNotes";
import LandingPage from "../pages/LandingPage";
import BussinessNotesDetails from "../pages/BussinessNote/BussinessNotesDetails";
import PersonalNotesDetails from "../pages/personalNote/PersonalNotesDetails";
import EditPersonalNote from "../pages/personalNote/EditPersonalNote";

const Routing = () => {
  const { isLogin } = useSelector((store) => store.users);
  console.log("router login: ", isLogin);

  return (
    <Routes>
      {isLogin ? (
        <>
          {/* <Route path="/" index element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/">
            <Route index element={<PersonalNotes />} />
            <Route path=":id" element={<PersonalNotesDetails />} />
            <Route path="/editNote/:id" element={<EditPersonalNote />} />
          </Route>
          <Route
            path="/createBussinessNote"
            element={<CreateBussinessNotes />}
          />
          <Route path="/bussinessNote">
            <Route index element={<BussinessNotes />} />
            <Route path=":id" element={<BussinessNotesDetails />} />
          </Route>
        </>
      ) : (
        <>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </>
      )}
    </Routes>
  );
};

export default Routing;
