import * as Io5 from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../Redux_thunk/noteSlice";

const Searchbar = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((store) => store.notes);

  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
  };
  return (
    <div className="flex border-b-2 w-[80%] gap-2 mx-auto mt-6  border-zinc-500">
      <Io5.IoSearchOutline className="w-5 h-5 m-[2px] mb-2" />
      <input
        type="search"
        value={search}
        onChange={handleChange}
        placeholder="Search Notes"
        className="focus:outline-none mb-2"
      />
    </div>
  );
};

export default Searchbar;
