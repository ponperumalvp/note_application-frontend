import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { useSelector } from "react-redux";
import CreateNote from "../pages/CreateNote";
import PersonalNotes from "../pages/PersonalNotes";
import PersonalNotesDetails from "../shared/peronalNotes/PersonalNotesDetails";

const Routing = () => {
  const { isLogin } = useSelector((store) => store.users);
  console.log("router login: ", isLogin);

  return (
    <Routes>
      {isLogin ? (
        <>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<CreateNote />} />

          <Route path="/personalNotes" index element={<PersonalNotes />} />
          <Route path="/personalNotes/:id" element={<PersonalNotesDetails />} />
        </>
      ) : (
        <>
          <Route path="/">
            <Route index element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </>
      )}
    </Routes>
  );
};

export default Routing;
