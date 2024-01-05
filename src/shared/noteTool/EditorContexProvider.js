import React, { createContext, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "../noteTool/tools";

export const EditorContex = createContext();
const EditorContexProvider = (props) => {
  const editorInstanceRef = useRef(null);
  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      placeholder: "Let's take a note! ",
      // data: { blocks },
      tools: EDITOR_JS_TOOLS,
      //   onChange: async () => {
      //     console.log(editor);
      //     const data = await editor.save();
      //     console.log(data);
      //   },
    });
    editorInstanceRef.current = editor;
  };
  return (
    <EditorContex.Provider value={{ initEditor, editorInstanceRef }}>
      {props.children}
    </EditorContex.Provider>
  );
};

export default EditorContexProvider;
