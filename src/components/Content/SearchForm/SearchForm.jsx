import React from "react";
import { useDispatch } from "react-redux";
import { getMoviesRequest } from "../../../state/actions/movies";

function SearchForm() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(getMoviesRequest(value));
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
      <div className="container">
        <h1 className="display-4 mb-3">
          <i className="fa fa-search" /> Let's find a movie
        </h1>
        <form id="searchForm" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            name="searchText"
            placeholder="Type Movies or TV Series ..."
            value={value}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary btn-lg mt-3">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
export default SearchForm;
