import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <>
      <h1>Böyle Bir Sayfa Bulunamadı.</h1>
      <Link to="/">Anasayfa dön</Link>
    </>
  );
}

export default Page404;
