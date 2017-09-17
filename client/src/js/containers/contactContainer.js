import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Contact from "./../components/contact";

const mapStateToProps = (state) => {
  return {
    contact: state.contact
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Contact);
