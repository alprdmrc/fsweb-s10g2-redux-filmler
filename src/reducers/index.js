import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favReducer from "./favMovieReducer";

const reducers = combineReducers({
  movieState: movieReducer,
  favState: favReducer,
});

export default reducers;
