import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import About from "./../components/about.js";

const mapStateToProps = (state) => {
  return {
    about: state.about
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(About);
