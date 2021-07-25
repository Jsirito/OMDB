import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getSingleMovieRequest } from "../../state/actions/singleMovie";

export const Card = (props) => {
  const dispatch = useDispatch();

  const { img, title, imdbID, year, type } = props;

  const handleClick = (evt) => {
    dispatch(getSingleMovieRequest(imdbID));
  };

  return (
    <div className="col-md-4" style={{ width: "18rem" }}>
      <div className="card animated fadeInUp">
        <img src={img} alt={title} className="card-img-top" width="100" />
        <div className="card-body">
          <h4>{title}</h4>
          <h5>{year}</h5>
          <p>{`Type: ${type}`}</p>
          <Link
            className="btn btn-primary"
            to={`/movie/${imdbID}`}
            onClick={handleClick}
          >
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};
