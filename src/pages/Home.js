import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../Redux_thunk/noteSlice";
import { useEffect } from "react";
import { getItem } from "../localStorage/getItem/getItem";
import { Link, useNavigate } from "react-router-dom";
import { loginCheck } from "../util";
import Searchbar from "../components/Searchbar";
import Content from "../shared/noteTool/Content";

const Home = () => {
  const { notes } = useSelector((store) => store.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    loginCheck("login");
    const getData = () => {
      dispatch(getNotes());
    };
    getData();
  }, [dispatch]);

  const nav = [
    { name: "Personal Note", path: "/PersonalNotes" },
    { name: "Bussiness Note", path: "/createBussinessNote" },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-6">
        <div className="col-span-1 bg-zinc-800 h-[100vh]">
          <h2 className="text-3xl font-semibold my-10 text-white text-center">
            Notes
          </h2>
          {nav.map((item, index) => {
            return (
              <>
                <Link to={item.path} key={index}>
                  <ul className="text-center m-4 ">
                    <li className="text-white text-2xl">{item.name}</li>
                  </ul>
                </Link>
              </>
            );
          })}
        </div>
        <div className="col-span-2 border-r-[1px] border-black">
          <Searchbar />
        </div>
        <div>
          {console.log(notes)}
          {notes.map((note) => {
            return (
              <div>
                {note.notes.map((e) => {
                  return <Content e={e} />;
                })}

                {/* {note.notes.map((e) => e.data.text)} */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
