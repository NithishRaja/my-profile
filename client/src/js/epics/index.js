import { combineEpics, createEpicMiddleware } from "redux-observable";
import updateSelectedAlbumEpic from "./updateSelectedAlbumEpic";
import updateSelectedArticleEpic from "./updateSelectedArticleEpic";

const allEpics = combineEpics(
  updateSelectedAlbumEpic,
  updateSelectedArticleEpic
);

const epicMiddleware = createEpicMiddleware(
  allEpics
);

export default epicMiddleware;
