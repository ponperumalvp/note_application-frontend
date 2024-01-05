import React from "react";
import PersonalNotesList from "../shared/peronalNotes/PersonalNotesList";
import PersonalNotesDetails from "../shared/peronalNotes/PersonalNotesDetails";

const PersonalNotes = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <PersonalNotesList />
        </div>
        <div className="col-span-2">
          <PersonalNotesDetails />
        </div>
      </div>
    </div>
  );
};

export default PersonalNotes;
