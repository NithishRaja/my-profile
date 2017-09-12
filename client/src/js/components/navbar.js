import React, {Component} from "react";
import {Link} from "react-router-dom";
export default class Navbar extends Component{

  constructor(props){
    super(props);

    this._navbarJSX = <nav className="navbar navbar-inverse navbar-static-top">
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
                      </nav>;

    this._linkJSX = <ul className="nav nav-tabs">
  <li role="presentation"><Link to="/">Home</Link></li>
  <li role="presentation"><Link to="/about">about</Link></li>
  <li role="presentation"><Link to="/contact">contact</Link></li>
  <li role="presentation"><Link to="/blog">blog</Link></li>
  <li role="presentation"><Link to="/gallery">gallery</Link></li>
</ul>;

  this._componentLayoutJSX = <div>{this._navbarJSX}{this._linkJSX}</div>

  }

  render(){

    return (
      this._componentLayoutJSX
    );

  }

}
