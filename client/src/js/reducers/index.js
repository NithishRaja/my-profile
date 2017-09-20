import {combineReducers} from "redux";
import bio from "./bioReducer";
import featuredImage from "./featuredImageReducer";
import albumCover from "./albumCoverReducer";
import blogContent from "./blogContentReducer";
import contact from "./contactReducer";
import about from "./aboutReducer";
import currentPage from "./currentPageReducer";
import selectedArticle from "./selectedArticleReducer";
import selectedAlbum from "./selectedAlbumReducer";

const allReducers = combineReducers({
  bio,
  featuredImage,
  albumCover,
  blogContent,
  contact,
  about,
  currentPage,
  selectedArticle,
  selectedAlbum
});

export default allReducers;
