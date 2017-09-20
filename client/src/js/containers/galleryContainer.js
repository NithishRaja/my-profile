import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Gallery from "./../components/gallery";
import updateSelectedAlbum from "./../actions/updateSelectedAlbum";

const mapStateToProps = (state) => {
  return {
    featuredImage: state.featuredImage,
    albumCover: state.albumCover
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({updateSelectedAlbum}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Gallery);
