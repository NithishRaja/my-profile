import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Blog from "./../components/blog";
import startBlogContentUpdate from "./../actions/startBlogContentUpdate";
import updateSelectedArticleId from "./../actions/updateSelectedArticleId";

const mapStateToProps = (state) => {
  return {
    blogContent: state.blogContent
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({updateSelectedArticleId, startBlogContentUpdate}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Blog);
