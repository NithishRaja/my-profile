import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Blog from "./../components/blog";
import startSelectedArticleUpdate from "./../actions/startSelectedArticleUpdate";
import startBlogContentUpdate from "./../actions/startBlogContentUpdate";

const mapStateToProps = (state) => {
  return {
    blogContent: state.blogContent
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({startSelectedArticleUpdate, startBlogContentUpdate}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Blog);
