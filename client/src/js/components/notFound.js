import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class NotFound extends Component{

  render(){

    // JSX for not found messages
    return (
      <div className="jumbotron">
        <h1 className="display-3">{"404. Not found!"}</h1>
        <p className="lead">{"the page you requested for does not exists or has been relocated"}</p>
        <hr className="my-4" />
        <p>{"click on the button to go back to the home page"}</p>
        <p className="lead">
          <Link to="/" className="btn btn-primary">{"HOME"}</Link>
        </p>
      </div>
    );

  }

}
