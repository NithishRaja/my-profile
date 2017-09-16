import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Blog from "./../components/blog";

const mapStateToProps = (state) => {
  return {
    blogContent: state.blogContent
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Blog);
