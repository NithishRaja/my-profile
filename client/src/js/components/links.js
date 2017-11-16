import React, {Component} from "react";
import {Link} from "react-router-dom";
import Rx from "rxjs/Rx";

export default class Links extends Component{

  constructor(props){
    super(props);

    // initializing variable to contain JSX for links
    this._linkJSX = <ul className="link-nav nav nav-tabs">
                      <li className={this.props.currentPage==="Home"?`nav-item active col-md-offset-5`:`nav-item col-md-offset-5`} role="presentation"><Link id="home" className="nav-link" to="/">Home</Link></li>
                      <li className={this.props.currentPage==="Blog"?`nav-item active`:`nav-item`} role="presentation"><Link id="blog" className="nav-link" to="/blog">Blog</Link></li>
                      <li className={this.props.currentPage==="Gallery"?`nav-item active`:`nav-item`} role="presentation"><Link id="gallery" className="nav-link" to="/gallery">Gallery</Link></li>
                    </ul>;

    // initializing variable to contain layout for entire component
    this._componentLayoutJSX = this._linkJSX;

  }

  componentWillUpdate(newProps){
    this._linkJSX = <ul className="link-nav nav nav-tabs">
                      <li className={newProps.currentPage==="Home"?`nav-item active col-md-offset-5`:`nav-item col-md-offset-5`} role="presentation"><Link id="home" className="nav-link" to="/">Home</Link></li>
                      <li className={newProps.currentPage==="Blog"?`nav-item active`:`nav-item`} role="presentation"><Link id="blog" className="nav-link" to="/blog">Blog</Link></li>
                      <li className={newProps.currentPage==="Gallery"?`nav-item active`:`nav-item`} role="presentation"><Link id="gallery" className="nav-link" to="/gallery">Gallery</Link></li>
                    </ul>;

    this._componentLayoutJSX = this._linkJSX;
  }

  render(){
    return (
      this._componentLayoutJSX
    );

  }

  componentDidMount(){

    // listener for "home" button clicks
    Rx.Observable.fromEvent(document.querySelector("#home"), "click")
      .subscribe({
        next: (event) => {
          this.props.updateCurrentPage(document.querySelector("#home").innerHTML);
        }
      });

    // listener for "blog" button clicks
    Rx.Observable.fromEvent(document.querySelector("#blog"), "click")
      .subscribe({
        next: (event) => {
          this.props.updateCurrentPage(document.querySelector("#blog").innerHTML);
        }
      });

    // listener for "gallery" button clicks
    Rx.Observable.fromEvent(document.querySelector("#gallery"), "click")
      .subscribe({
        next: (event) => {
          this.props.updateCurrentPage(document.querySelector("#gallery").innerHTML);
        }
      });

  }

}
