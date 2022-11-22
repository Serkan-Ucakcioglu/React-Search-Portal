import Location from "../../../Svg/Location.svg";
import { Link } from "react-router-dom";
import useSearchs from "../../../Hooks/useSearchs";
import { useSelector } from "react-redux";
import { selectedSearch } from "../../dataSlice";

function Searched({ searchs }) {
  const { lastSearch } = useSearchs();
  const search = useSelector(selectedSearch);
  const content =
    lastSearch.length > 2 && search.length ? (
      <div className="search_result">
        {searchs?.slice(0, 3)?.map((user) => {
          return (
            <div className="item">
              <img src={Location} alt="Location-svg" />
              <div className="item_text">
                <span>Name : {user["Name Surname"]}</span>
                <span className="item_head_title">
                  Country : {user.Country}
                </span>
              </div>
            </div>
          );
        })}
        {searchs?.length >= 3 && (
          <Link to="search-result" className="show_text">
            Show more...
          </Link>
        )}
      </div>
    ) : null;

  return content;
}

export default Searched;
