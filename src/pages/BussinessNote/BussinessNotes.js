import React from "react";
import { getBussinessNotes } from "../../Redux_thunk/noteSlice";
import { useSelector } from "react-redux";
import Home from "../Home";
import Button from "../../components/button/Button";

const BussinessNotes = () => {
  const { bussinessNotes } = useSelector((store) => store.notes);

  return (
    <div className="container min-h-full">
      <div className="">
        <Home
          children={bussinessNotes}
          getNotes={getBussinessNotes()}
          link={"/bussinessNote/"}
        />
      </div>
      <div className="w-[20%] fixed bottom-0 end-0 m-4 z-2">
        <Button
          variant="primary"
          children="CreateNote"
          link="/createBussinessNote"
        />
      </div>
    </div>
  );
};

export default BussinessNotes;
