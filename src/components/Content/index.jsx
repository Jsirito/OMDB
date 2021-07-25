import React from "react";

import SearchForm from "./SearchForm/SearchForm";
// import Footer from "../Footer/Footer";
import { MoviesGrid } from "./MoviesGrid";

function Content() {
  return (
    <div>
      <SearchForm />
      <MoviesGrid />
      {/* <Footer /> */}
    </div>
  );
}

export default Content;
