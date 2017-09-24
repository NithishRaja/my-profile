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
import selectedAlbumId from "./selectedAlbumIdReducer";
import selectedArticleId from "./selectedArticleIdReducer";

const allReducers = combineReducers({
  bio,
  featuredImage,
  albumCover,
  blogContent,
  contact,
  about,
  currentPage,
  selectedArticle,
  selectedAlbum,
  selectedAlbumId,
  selectedArticleId
});

export default allReducers;
