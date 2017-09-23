import { combineEpics, createEpicMiddleware } from "redux-observable";
import updateSelectedAlbumEpic from "./updateSelectedAlbumEpic";
import updateSelectedArticleEpic from "./updateSelectedArticleEpic";
import updateAlbumCoverEpic from "./updateAlbumCoverEpic";
import updateFeaturedImageEpic from "./updateFeaturedImageEpic";

const allEpics = combineEpics(
  updateSelectedAlbumEpic,
  updateSelectedArticleEpic,
  updateAlbumCoverEpic,
  updateFeaturedImageEpic
);

const epicMiddleware = createEpicMiddleware(
  allEpics
);

export default epicMiddleware;
