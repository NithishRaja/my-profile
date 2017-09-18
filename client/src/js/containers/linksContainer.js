import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Links from "./../components/links";
import updateCurrentPage from "./../actions/updateCurrentPage";

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({updateCurrentPage}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Links);
