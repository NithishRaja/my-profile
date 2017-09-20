import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Blog from "./../components/blog";
import updateSelectedArticle from "./../actions/updateSelectedArticle";

const mapStateToProps = (state) => {
  return {
    blogContent: state.blogContent
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({updateSelectedArticle}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Blog);
