import React, {Component} from "react";
import {Link} from "react-router-dom";
export default class Navbar extends Component{

  render(){

    return (
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Nithish Raja</Link>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    );

  }

}
