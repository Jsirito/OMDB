import React from "react";
import { useSelector } from "react-redux";

function Movie() {
  const movie = useSelector((state) => state.movie);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h2 className="mb-4">{movie.Title}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Genre:</strong> {movie.Genre}
            </li>
            <li className="list-group-item">
              <strong>Released:</strong> {movie.Released}
            </li>
            <li className="list-group-item">
              <strong>Rated:</strong> {movie.Rated}
            </li>
            <li className="list-group-item">
              <strong>IMDB Rating:</strong> {movie.imdbRating}
            </li>
            <li className="list-group-item">
              <strong>Director:</strong> {movie.Director}
            </li>
            <li className="list-group-item">
              <strong>Writer:</strong> {movie.Writer}
            </li>
            <li className="list-group-item">
              <strong>Actors:</strong> {movie.Actors}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="card card-body my-5">
          <div className="col-md-12">
            <h3>About </h3>
            {movie.Plot}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Movie;

/* PODRIA USAR useEfect EN VEZ DE SETEAR EL ESTADO CON EL onClick DE Card */
// const dispatch = useDispatch();
// const { id } = useParams();
// React.useEffect(() => {
//   dispatch(getSingleMovieRequest(id));
// },[]);

// <div className="col-md-4 card card-body">
// <img src={movie.Poster} className="thumbnail" alt="Poster" />
// </div>
