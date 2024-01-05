import React from "react";

const Content = ({ e }) => {
  let content = "";
  let text;
  let align;
  switch (e.type) {
    case "paragraph":
      text = e.data.text;
      align = e.tunes.textAlignment.alignment;
      content = `<p style = "text-[${align}]">${text}</p>`;
      break;
    case "header":
      text = e.data.text;
      let level = e.data.level;
      align = e.tunes.textAlignment.alignment;
      content = `<h${level} className = "text-[${align}] "}>${text}</h${level}>`;
      break;
    default:
      break;
  }

  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
};

export default Content;
