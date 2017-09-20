import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Album from "./../components/gallery/album";

const mapStateToProps = (state) => {
  return {
    selectedAlbum: state.selectedAlbum
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Album);
