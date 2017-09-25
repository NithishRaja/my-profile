import React, {Component} from "react";
import {Link} from "react-router-dom";
import Rx from "rxjs/Rx";

export default class Navbar extends Component{

  constructor(props){
    super(props);

    // initializing variable to JSX for navbar
    this._navbarJSX = <nav className="navbar navbar-inverse navbar-static-top">
                        <div className="container">
                          <div className="navbar-header">
                            <Link className="navbar-brand" to="/">Nithish Raja</Link>
                          </div>
                          <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                              <li><Link id="about" to="/about">About</Link></li>
                              <li><Link id="contact" to="/contact">Contact</Link></li>
                            </ul>
                          </div>
                        </div>
                      </nav>;

    // initializing variable to contain layout for entire component
    this._componentLayoutJSX = this._navbarJSX;

  }

  render(){

    return (
      this._componentLayoutJSX
    );

  }

  componentDidMount(){

    // listener for "about" button clicks
    Rx.Observable.fromEvent(document.querySelector("#about"), "click")
      .subscribe({
        next: (event) => {
          this.props.updateCurrentPage(document.querySelector("#about").innerHTML);
        }
      });

    // listener for "contact" button clicks
    Rx.Observable.fromEvent(document.querySelector("#contact"), "click")
      .subscribe({
        next: (event) => {
          this.props.updateCurrentPage(document.querySelector("#contact").innerHTML);
        }
      });

  }

}
