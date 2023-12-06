import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNote, setNewNotes } from "../Redux_thunk/noteSlice";
import { format } from "date-fns";

const CreateNote = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { newNotes } = useSelector((store) => store.notes);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    dispatch(setNewNotes({ ...newNotes, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newNotes.content);

    // const id = notes.length ? notes[notes.length - 1].id + 1 : 1;
    const date = format(new Date(), "MMMM dd , yyyy pp");
    const userOwner = window.localStorage.getItem("userId");
    console.log(userOwner);
    const newNote = {
      // id,
      date,
      title: newNotes.title,
      content: newNotes.content,
      userOwner,
    };
    console.log(newNote);
    return (
      dispatch(createNote(newNote)), console.log("sucessful"), history("/")
    );
  };
  return (
    <div className="w-[100%]">
      <div className="container">
        <div className="w-[100%] mt-20 flex items-center justify-center">
          <form
            className="flex  w-[500px] flex-col h-[500px] bg-slate-400"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col m-4 mt-10">
              <label className=" text-white">title</label>
              <input
                type="text"
                placeholder="title"
                className="h-10 outline-none"
                value={newNotes.title}
                onChange={onChangeInput}
                name="title"
              />
            </div>
            <div className="flex flex-col m-4 mt-5">
              <label className=" text-white">content</label>
              <input
                type="message"
                placeholder="content"
                className="h-44 w-[100%] outline-none"
                name="content"
                value={newNotes.content}
                onChange={onChangeInput}
              />
            </div>
            <div className="text-center mt-10">
              <button
                className="bg-red-300 p-2 rounded-lg text-white"
                type="submit"
              >
                Add Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
