import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./reducers/moviesReducer";
import singleMovieReducer from "./reducers/singleMovieReducer";
import userReducer from "./reducers/usersReducer";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movie: singleMovieReducer,
    user: userReducer,
  },
});

export default store;
