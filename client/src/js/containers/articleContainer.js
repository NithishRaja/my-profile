import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Article from "./../components/blog/article";

const mapStateToProps = (state) => {
  return {
    selectedArticle: state.selectedArticle
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Article);
