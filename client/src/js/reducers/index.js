import {combineReducers} from "redux";
import bio from "./bioReducer";
import featuredImage from "./featuredImageReducer";
import albumCover from "./albumCoverReducer";
import blogContent from "./blogContentReducer";
import contact from "./contactReducer";
import about from "./aboutReducer";

const allReducers = combineReducers({
  bio,
  featuredImage,
  albumCover,
  blogContent,
  contact,
  about
});

export default allReducers;
