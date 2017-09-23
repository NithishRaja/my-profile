import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Home from "./../components/home";
import startBioUpdate from "./../actions/startBioUpdate";

const mapStateToProps = (state) => {
  return {
    bio: state.bio
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({startBioUpdate}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Home);
