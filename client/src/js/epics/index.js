import { combineEpics, createEpicMiddleware } from "redux-observable";
import updateSelectedAlbumEpic from "./updateSelectedAlbumEpic";
import updateSelectedArticleEpic from "./updateSelectedArticleEpic";
import updateAlbumCoverEpic from "./updateAlbumCoverEpic";

const allEpics = combineEpics(
  updateSelectedAlbumEpic,
  updateSelectedArticleEpic,
  updateAlbumCoverEpic
);

const epicMiddleware = createEpicMiddleware(
  allEpics
);

export default epicMiddleware;
