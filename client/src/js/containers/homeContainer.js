import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Home from "./../components/home";

const mapStateToProps = (state) => {
  return {
    bio: state.bio
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Home);
