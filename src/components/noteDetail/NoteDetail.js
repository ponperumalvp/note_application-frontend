import React from "react";
import Content from "../../shared/noteTool/Content";

const NoteDetail = ({ note }) => {
  return (
    <div>
      <>
        {Boolean(note) && (
          <div>
            <div className=" gap-6 m-4 text-center min-h-[200px] text-textClr">
              {note.notes.map((e) => {
                return (
                  <div>
                    <Content e={e} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default NoteDetail;
