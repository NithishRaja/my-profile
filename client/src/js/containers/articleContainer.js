import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Article from "./../components/blog/article";
import startSelectedArticleUpdate from "./../actions/startSelectedArticleUpdate";

const mapStateToProps = (state) => {
  return {
    selectedArticleId: state.selectedArticleId,
    selectedArticle: state.selectedArticle
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({startSelectedArticleUpdate}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Article);
