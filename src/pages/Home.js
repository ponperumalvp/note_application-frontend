import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginCheck } from "../util";
import Content from "../shared/noteTool/Content";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../Masonry.css";
import emptyPageImg from "../assets/images/emptyPageImg.jpg";
import Searchbar from "../components/Searchbar";

const Home = ({ children, getNotes, link }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    loginCheck("login");
    const getData = () => {
      dispatch(getNotes);
    };
    getData();
  }, [dispatch]);

  return (
    <div className="container mx-auto h-auto">
      {/* <Searchbar children={children} /> */}
      <div>
        {Boolean(children) && children.length ? (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
          >
            <Masonry>
              {children.map((note, idx) => {
                return (
                  Boolean(note) && (
                    <Link to={`${link}${note._id}`} key={idx}>
                      <div className=" border shadow-lg  m-6 bg-bgClr1 text-white min-h-[360px] rounded-2xl max-h-[360px] overflow-hidden text-ellipsis font-semibold text-[20px] text-center p-2 truncate ">
                        {note.notes.map((e) => {
                          return Boolean(e) && <Content e={e} />;
                        })}
                      </div>
                    </Link>
                  )
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        ) : (
          <div className=" flex justify-center  ml-10 mt-10 gap-4">
            <img src={emptyPageImg} alt="" className=" h-[70%] w-[60%]" />
            <div className="text-textClr font-serif mt-20 text-center ">
              <p className="mt-5">"Welcome to your notey application! 📝</p>
              <p className="mt-5">you can create your own ideas</p>
              <p className="mt-5">
                It looks like this page is empty, ready to be filled with your
                thoughts, ideas, and to-do lists. Feel free to start by adding
                your first note using the 'Create Note' option.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
