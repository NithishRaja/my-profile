import {combineReducers} from "redux";
import bio from "./bioReducer";
import featuredImage from "./featuredImageReducer";
import albumCover from "./albumCoverReducer";
import blogContent from "./blogContentReducer";

const allReducers = combineReducers({
  bio,
  featuredImage,
  albumCover,
  blogContent
});

export default allReducers;
