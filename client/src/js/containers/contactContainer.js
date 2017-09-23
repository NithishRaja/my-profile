import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Contact from "./../components/contact";
import startContactUpdate from "./../actions/startContactUpdate";

const mapStateToProps = (state) => {
  return {
    contact: state.contact
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({startContactUpdate}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Contact);
