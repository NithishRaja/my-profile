import React, {Component} from "react";
import {Link} from "react-router-dom";
import Rx from "rxjs/Rx";

export default class Links extends Component{

  constructor(props){
    super(props);

    this._linkJSX = <ul className="nav nav-tabs">
                      <li role="presentation"><Link id="home" to="/">Home</Link></li>
                      <li role="presentation"><Link id="blog" to="/blog">Blog</Link></li>
                      <li role="presentation"><Link id="gallery" to="/gallery">Gallery</Link></li>
                    </ul>;

    this._componentLayoutJSX = this._linkJSX;

  }

  render(){

    return (
      this._componentLayoutJSX
    );

  }

  componentDidMount(){

    Rx.Observable.fromEvent(document.querySelector("#home"), "click")
      .subscribe({
        next: (event) => {
          this.props.updateCurrentPage(document.querySelector("#home").innerHTML);
        }
      });

    Rx.Observable.fromEvent(document.querySelector("#blog"), "click")
      .subscribe({
        next: (event) => {
          this.props.updateCurrentPage(document.querySelector("#blog").innerHTML);
        }
      });

    Rx.Observable.fromEvent(document.querySelector("#gallery"), "click")
      .subscribe({
        next: (event) => {
          this.props.updateCurrentPage(document.querySelector("#gallery").innerHTML);
        }
      });

  }

}
