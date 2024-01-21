import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginCheck } from "../util";
import Content from "../shared/noteTool/Content";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../Masonry.css";

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
      <div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
        >
          <Masonry>
            {Boolean(children) && children.length ? (
              children.map((note, idx) => {
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
              })
            ) : (
              <p>welcome</p>
            )}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Home;
