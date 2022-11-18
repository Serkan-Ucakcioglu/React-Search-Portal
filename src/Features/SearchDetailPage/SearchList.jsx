import Location from "../../Svg/Location.svg";

function SearchList({ user }) {
  return (
    <div className="item">
      <div className="info">
        <img src={Location} alt="" />
        <div className="info_text">
          <span className="names">{user?.Country}</span>
          <span className="city">{user?.City}</span>
        </div>
      </div>
      <div className="name">
        <span>{user && user["Name Surname"]}</span>
        <span>{user?.Date}</span>
      </div>
    </div>
  );
}

export default SearchList;
