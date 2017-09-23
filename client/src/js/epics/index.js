import { combineEpics, createEpicMiddleware } from "redux-observable";
import updateSelectedAlbumEpic from "./updateSelectedAlbumEpic";
import updateSelectedArticleEpic from "./updateSelectedArticleEpic";
import updateAlbumCoverEpic from "./updateAlbumCoverEpic";
import updateFeaturedImageEpic from "./updateFeaturedImageEpic";
import updateBlogContentEpic from "./updateBlogContentEpic";

const allEpics = combineEpics(
  updateSelectedAlbumEpic,
  updateSelectedArticleEpic,
  updateAlbumCoverEpic,
  updateFeaturedImageEpic,
  updateBlogContentEpic
);

const epicMiddleware = createEpicMiddleware(
  allEpics
);

export default epicMiddleware;
