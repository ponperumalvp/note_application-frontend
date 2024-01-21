import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Content from "../shared/noteTool/Content";
import { EditorContex } from "../shared/noteTool/EditorContexProvider";
import { useDispatch } from "react-redux";

const EditNote = ({ children }) => {
  const { initEditor, editorInstanceRef } = useContext(EditorContex);
  const dispatch = useDispatch();

  useEffect(() => {
    initEditor();
  }, [dispatch]);
  const { id } = useParams();
  const EditNotesDetail = children.filter((item) => item._id === id);
  // const editNote = (id) => {
  //   children.map((note) => {
  //     if (note._id === id) {
  //       editorInstanceRef.current.render({
  //         notes: note.blocks,
  //       });
  //     }
  //   });
  // };

  console.log(EditNotesDetail);
  return (
    <div className="container">
      <div id="editorjs">
        <div className="col-span-3">
          {Boolean(EditNotesDetail) && EditNotesDetail.length ? (
            EditNotesDetail.map((note, index) => {
              return (
                <>
                  {Boolean(note) && (
                    <>
                      <div
                        className="border-2 border-black text-white gap-6 m-4 text-center min-h-[200px] "
                        key={index}
                      >
                        {note.notes.map((e) => {
                          return <Content e={e} />;
                        })}
                      </div>
                    </>
                  )}
                </>
              );
            })
          ) : (
            <p>welcome</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditNote;
