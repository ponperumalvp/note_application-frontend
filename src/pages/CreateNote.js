// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { createNote, setNewNotes } from "../Redux_thunk/noteSlice";
// import { format } from "date-fns";
// import { getItem } from "../localStorage/getItem/getItem";
// import EditorJS from "@editorjs/editorjs";
// import { EDITOR_JS_TOOLS } from "../shared/noteTool/tools";
// import "../App.css";
// import Button from "../components/button/Button";

// const CreateNote = () => {

//   const onChangeInput = (e) => {
//     const { name, value } = e.target;
//     dispatch(setNewNotes({ ...newNotes, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(newNotes.content);

//     // const id = notes.length ? notes[notes.length - 1].id + 1 : 1;
//     const date = format(new Date(), "MMMM dd , yyyy pp");
//     const userOwner = getItem("userId");
//     console.log(userOwner);
//     const newNote = {
//       // id,
//       date,
//       title: newNotes.title,
//       content: newNotes.content,
//       userOwner,
//     };
//     console.log(newNote);
//     return (
//       dispatch(createNote(newNote)), console.log("sucessful"), history("/")
//     );
//   };

//   return (
//     <div className="w-[100%]">
//       <div className="container">
//         <div className="w-[100%] mt-20 flex items-center justify-center">
//           <form
//             className="flex  w-[500px] flex-col h-[500px] bg-slate-400"
//             onSubmit={handleSubmit}
//           >
//             <div className="flex flex-col m-4 mt-10">
//               <label className=" text-white">title</label>
//               <input
//                 type="text"
//                 placeholder="title"
//                 className="h-10 outline-none"
//                 value={newNotes.title}
//                 onChange={onChangeInput}
//                 name="title"
//               />
//             </div>
//             <div className="flex flex-col m-4 mt-5">
//               <label className=" text-white">content</label>
//               <input
//                 type="message"
//                 placeholder="content"
//                 className="h-44 w-[100%] outline-none"
//                 name="content"
//                 value={newNotes.content}
//                 onChange={onChangeInput}
//               />
//             </div>
//             <div className="text-center mt-10">
//               <button
//                 className="bg-red-300 p-2 rounded-lg text-white"
//                 type="submit"
//               >
//                 Add Note
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateNote;

import React, { useContext, useEffect } from "react";
import { EditorContex } from "../shared/noteTool/EditorContexProvider";
import Button from "../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { createNote, setNewNotes } from "../Redux_thunk/noteSlice";
import { useNavigate } from "react-router-dom";
import { getItem } from "../localStorage/getItem/getItem";

const CreateNote = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { newNotes } = useSelector((store) => store.notes);
  const { initEditor, editorInstanceRef } = useContext(EditorContex);
  useEffect(() => {
    initEditor();
  }, [dispatch]);

  const handleClick = async () => {
    const data = await editorInstanceRef.current.save();
    console.log(data);

    const notes = await data.blocks;
    console.log(notes);
    const userOwner = getItem("userId");
    const newNotes = await {
      notes,
      userOwner,
    };
    await dispatch(createNote(newNotes));
    history("/");
  };
  return (
    <div className="container">
      <div id="editorjs"></div>
      <div>
        <Button variant="primary" children="Save Note" onclick={handleClick} />
      </div>
    </div>
  );
};

export default CreateNote;
