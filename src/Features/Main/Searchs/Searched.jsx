import Location from "../../../Svg/Location.svg";
import { Link } from "react-router-dom";

function Searched({ searchs }) {
  const content = searchs.length && (
    <div className="search_result">
      {searchs?.slice(0, 3)?.map((user) => {
        return (
          <div className="item">
            <img src={Location} alt="Location-svg" />
            <div className="item_text">
              <span>Name : {user["Name Surname"]}</span>
              <span className="item_head_title">Country : {user.Country}</span>
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
  );
  return content;
}

export default Searched;
