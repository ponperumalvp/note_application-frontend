import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as fa from "react-icons/fa6";
import Button from "../../components/button/Button";
import NoteDetail from "../../components/noteDetail/NoteDetail";
import { deleteBussinessNote } from "../../Redux_thunk/noteSlice";

const BussinessNotesDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { bussinessNotes } = useSelector((store) => store.notes);

  const bussinessNotesDetail = bussinessNotes.filter((item) => item._id === id);
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleDelete = async () => {
    await dispatch(deleteBussinessNote(id));
    history("/bussinessNote");
  };
  return (
    <div className="container">
      <ul className="w-[100%] flex items-center justify-center">
        {bussinessNotesDetail.map((note, index) => {
          return (
            <div className="scale-100 opacity-100 bg-bgClr1 rounded-xl shadow p-6 transition-all w-[50%] border flex flex-col items-center ">
              <div className="w-[100%] ">
                <fa.FaTrashCan
                  onClick={handleDelete}
                  className="top-5 end-4 m-4 w-10 h-10 absolute text-red-500 hover:text-textClr  "
                />
              </div>
              <NoteDetail note={note} key={index} />{" "}
              <div className="w-[30%] "></div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default BussinessNotesDetails;
