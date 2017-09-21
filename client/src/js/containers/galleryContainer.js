import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Gallery from "./../components/gallery";
import startSelectedAlbumUpdate from "./../actions/startSelectedAlbumUpdate";

const mapStateToProps = (state) => {
  return {
    featuredImage: state.featuredImage,
    albumCover: state.albumCover
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({startSelectedAlbumUpdate}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Gallery);
