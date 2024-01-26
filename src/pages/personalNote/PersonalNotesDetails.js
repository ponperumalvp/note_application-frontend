import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import NoteDetail from "../../components/noteDetail/NoteDetail";
import { deleteNote } from "../../Redux_thunk/noteSlice";

import * as fa from "react-icons/fa6";

const PersonalNotesDetails = () => {
  const { id } = useParams();
  const { notes } = useSelector((store) => store.notes);

  const history = useNavigate();

  const personalNotesDetail = notes.filter((item) => item._id === id);
  const dispatch = useDispatch();
  const handleDelete = async () => {
    await dispatch(deleteNote(id));
    history("/");
  };

  return (
    <div>
      <ul className="w-[100%] flex items-center justify-center">
        {personalNotesDetail.map((note, index) => {
          return (
            <div className="scale-100 opacity-100 bg-bgClr1 rounded-xl shadow p-6 transition-all w-[50%] border ">
              <div className="w-[100%] ">
                <fa.FaTrashCan
                  onClick={handleDelete}
                  className="top-5 end-4 w-10 h-10 absolute text-red-500 hover:text-textClr  "
                />
              </div>
              <NoteDetail note={note} key={index} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default PersonalNotesDetails;
