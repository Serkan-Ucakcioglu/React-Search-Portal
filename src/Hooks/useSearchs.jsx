import { useDispatch, useSelector } from "react-redux";
import {
  lastSearchs,
  search,
  selectedData,
  selectedLast,
} from "../Features/dataSlice";
import dbjson from "../db.json";

function useSearchs() {
  const dispatch = useDispatch();
  const cols = dbjson.cols;
  const data = useSelector(selectedData);
  const lastSearch = useSelector(selectedLast);

  const onChanges = (e) => {
    const { value } = e.target;
    dispatch(lastSearchs(value));
    dispatch(
      search(
        data.filter((user) =>
          cols.some((key) =>
            user[key].toUpperCase().includes(value.trim().toUpperCase())
          )
        )
      )
    );
  };
  return { onChanges, lastSearch };
}

export default useSearchs;
