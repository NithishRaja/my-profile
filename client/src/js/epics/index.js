import { combineEpics, createEpicMiddleware } from "redux-observable";
import updateSelectedAlbumEpic from "./updateSelectedAlbumEpic";
import updateSelectedArticleEpic from "./updateSelectedArticleEpic";
import updateAlbumCoverEpic from "./updateAlbumCoverEpic";
import updateFeaturedImageEpic from "./updateFeaturedImageEpic";
import updateBlogContentEpic from "./updateBlogContentEpic";
import updateContactEpic from "./updateContactEpic";
import updateAboutEpic from "./updateAboutEpic";
import updateBioEpic from "./updateBioEpic";

const allEpics = combineEpics(
  updateSelectedAlbumEpic,
  updateSelectedArticleEpic,
  updateAlbumCoverEpic,
  updateFeaturedImageEpic,
  updateBlogContentEpic,
  updateContactEpic,
  updateAboutEpic,
  updateBioEpic
);

const epicMiddleware = createEpicMiddleware(
  allEpics
);

export default epicMiddleware;
