import React from "react";
import EditNote from "../../components/EditNote";
import { useSelector } from "react-redux";

const EditPersonalNote = () => {
  const { notes } = useSelector((store) => store.notes);

  return (
    <div className="container">
      <EditNote children={notes} />
    </div>
  );
};

export default EditPersonalNote;
