import Logo from "../../Svg/Logo.svg";
import { useSelector } from "react-redux";
import { selectedSearch } from "../dataSlice";
import { Link } from "react-router-dom";
import AddRecord from "../Main/AddRecord";
import SearchInput from "../Main/Searchs/SearchInput";

function SearchDetail() {
  const searchs = useSelector(selectedSearch);
  return (
    <div className="container search_detail">
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo" />
      </Link>
      <div className="search">
        <SearchInput />
        <button disabled={!searchs?.length} className="search_btn">
          Search
        </button>
      </div>
      <div className="record">
        <AddRecord />
      </div>
    </div>
  );
}

export default SearchDetail;
