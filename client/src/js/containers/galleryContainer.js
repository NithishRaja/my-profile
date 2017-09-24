import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Gallery from "./../components/gallery";
import startAlbumCoverUpdate from "./../actions/startAlbumCoverUpdate";
import startFeaturedImageUpdate from "./../actions/startFeaturedImageUpdate";
import updateSelectedAlbumId from "./../actions/updateSelectedAlbumId";

const mapStateToProps = (state) => {
  return {
    featuredImage: state.featuredImage,
    albumCover: state.albumCover
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({startAlbumCoverUpdate, startFeaturedImageUpdate, updateSelectedAlbumId}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Gallery);
