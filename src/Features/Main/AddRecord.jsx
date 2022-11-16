import React from "react";
import { Link } from "react-router-dom";

function AddRecord() {
  return (
    <Link to="/add-users">
      <button className="new_record">Add new record</button>
    </Link>
  );
}

export default AddRecord;
