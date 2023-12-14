import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../Redux_thunk/noteSlice";
import { useEffect } from "react";
import { getItem } from "../localStorage/getItem/getItem";
import { useNavigate } from "react-router-dom";
import { loginCheck } from "../util";

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

  return (
    <div className="w-[100%] h-[100%] container p-10">
      <ul className="grid grid-cols-4">
        {Boolean(notes) && notes.length ? (
          notes.map((item, index) => {
            return (
              <>
                {Boolean(item) && (
                  <>
                    <div className="w-[100%] flex">
                      <li
                        key={index}
                        className="m-5 h-[300px] w-[300px]   border-2 border-red-50 bg-slate-400 flex flex-col items-center justify-center rounded-lg text-white"
                      >
                        <div>{item.date}</div>
                        <h1>{item.title}</h1>
                        <div>{item.content}</div>
                      </li>
                    </div>
                  </>
                )}
              </>
            );
          })
        ) : (
          <p>welcome</p>
        )}
      </ul>
    </div>
  );
};

export default Home;
