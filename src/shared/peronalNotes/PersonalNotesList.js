import React from "react";
import Searchbar from "../../components/Searchbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PersonalNotesDetails from "./PersonalNotesDetails";

const PersonalNotesList = () => {
  const { notes } = useSelector((store) => store.notes);
  console.log(notes);

  return (
    <div>
      <div>
        <Searchbar />
      </div>
      <ul>
        {Boolean(notes) && notes.length ? (
          notes.map((item, index) => {
            return (
              <>
                {Boolean(item) && (
                  <>
                    <div>
                      <li key={index}>
                        <Link to={`/personalNotes/${item._id}`}>
                          <div>{item.date}</div>
                          <h1>{item.title}</h1>
                          <div>{`${item.content.slice(0, 5)} ...`}</div>
                        </Link>
                      </li>
                    </div>
                  </>
                )}
              </>
            );
          })
        ) : (
          <p>welcome</p>
        )}
      </ul>
    </div>
  );
};

export default PersonalNotesList;
