import {combineReducers} from "redux";
import bio from "./bioReducer";
import featuredImage from "./featuredImageReducer";
import albumCover from "./albumCoverReducer";

const allReducers = combineReducers({
  bio,
  featuredImage,
  albumCover
});

export default allReducers;
