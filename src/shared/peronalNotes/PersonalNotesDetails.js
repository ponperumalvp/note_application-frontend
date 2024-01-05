import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PersonalNotesDetails = () => {
  const { id } = useParams();
  const { notes } = useSelector((store) => store.notes);
  console.log(notes);

  const personalNotesDetail = notes.filter((item) => item._id === id);
  console.log("personalNotesDetail:", personalNotesDetail);

  return (
    <div>
      <ul className="col-span-3">
        {Boolean(personalNotesDetail) && personalNotesDetail.length ? (
          personalNotesDetail.map((item, index) => {
            return (
              <>
                {Boolean(item) && (
                  <>
                    <div className="flex">
                      <li key={index}>
                        <div>{item.date}</div>
                        <h1>{item.title}</h1>
                        <div>{item.content}</div>
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

export default PersonalNotesDetails;
