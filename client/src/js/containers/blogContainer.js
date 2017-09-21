import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Blog from "./../components/blog";
import startSelectedArticleUpdate from "./../actions/startSelectedArticleUpdate";

const mapStateToProps = (state) => {
  return {
    blogContent: state.blogContent
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({startSelectedArticleUpdate}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Blog);
