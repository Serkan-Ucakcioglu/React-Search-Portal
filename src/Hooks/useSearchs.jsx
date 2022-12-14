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
    if (value?.length > 2) {
      dispatch(
        search(
          data.filter((user) =>
            cols.some((key) =>
              user[key]?.toLowerCase().includes(value.trim()?.toLowerCase())
            )
          )
        )
      );
    }
  };
  return { onChanges, lastSearch };
}

export default useSearchs;
