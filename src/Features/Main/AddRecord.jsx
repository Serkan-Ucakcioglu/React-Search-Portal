import React from "react";
import { Link, useLocation } from "react-router-dom";

function AddRecord() {
  const location = useLocation();
  return (
    <Link to="/add-users" state={location}>
      <button className="new_record">Add new record</button>
    </Link>
  );
}

export default AddRecord;
