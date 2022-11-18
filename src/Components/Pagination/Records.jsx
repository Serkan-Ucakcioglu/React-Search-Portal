import React from "react";

function Records({ data }) {
  console.log(data);
  const content = data?.map((user) => {
    return <span>{user["Name Surname"]}</span>;
  });

  return <>{content}</>;
}

export default Records;
