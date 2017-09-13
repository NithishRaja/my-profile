import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Links extends Component{

  constructor(props){
    super(props);

    this._linkJSX = <ul className="nav nav-tabs">
                      <li role="presentation"><Link to="/">Home</Link></li>
                      <li role="presentation"><Link to="/about">about</Link></li>
                      <li role="presentation"><Link to="/contact">contact</Link></li>
                      <li role="presentation"><Link to="/blog">blog</Link></li>
                      <li role="presentation"><Link to="/gallery">gallery</Link></li>
                    </ul>;

    this._componentLayoutJSX = this._linkJSX;

  }

  render(){

    return (
      this._componentLayoutJSX
    );

  }

}
