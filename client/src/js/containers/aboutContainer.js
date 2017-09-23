import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import About from "./../components/about.js";
import startAboutUpdate from "./../actions/startAboutUpdate";

const mapStateToProps = (state) => {
  return {
    about: state.about
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({startAboutUpdate}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(About);
