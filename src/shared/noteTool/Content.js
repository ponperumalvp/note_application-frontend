import React from "react";

const Content = ({ e }) => {
  let content = "";
  let text;
  let align;
  let listItems = "";
  switch (e.type) {
    case "paragraph":
      text = e.data.text;
      align = e.tunes.textAlignment.alignment;
      content = `<p style ="text-align:${align}">${text}</p>`;
      break;
    case "header":
      text = e.data.text;
      let level = e.data.level;
      align = e.tunes.textAlignment.alignment;
      content = `<h${level} style ="text-align:${align}">${text}</h${level}>`;
      break;
    case "alert":
      text = e.data.message;
      align = e.data.align;

      const type = e.data.type;
      content = `<div style ='text-${align} backgroundcolor-${type}'>${text}</div>`;
      break;
    case "list":
      const style = e.data.style;
      e.data.items.map((item) => {
        listItems += `<li>${item}</li>`;
      });

      style === "unordered"
        ? (content = `<ul>${listItems}</ul>`)
        : (content = `<ol>${listItems}</ol>`);
      break;
    case "checkList":
      e.data.items.map(
        (item) =>
          (listItems += `<li>
                             <input type ="checkbox" ${
                               item.checked && "checked"
                             }/>
                             <label>${item.text}</label>
                       </li>`)
      );
      content = `<ul>${listItems}</ul>`;
      break;
    case "image":
      console.log("image can't save here");
      break;
    case "embed":
      const caption = e.data.caption;
      const embed = e.data.embed;

      let embedTag = `<iframe src = "${embed}">
      </iframe>
      <small>${caption}</small>
      `;
      content = `<div>${embedTag}</div>`;
      break;
    default:
      break;
  }

  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
};

export default Content;
