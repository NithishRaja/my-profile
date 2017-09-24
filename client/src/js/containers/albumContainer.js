import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Album from "./../components/gallery/album";
import startSelectedAlbumUpdate from "./../actions/startSelectedAlbumUpdate";

const mapStateToProps = (state) => {
  return {
    selectedAlbumId: state.selectedAlbumId,
    selectedAlbum: state.selectedAlbum
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({startSelectedAlbumUpdate}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Album);
