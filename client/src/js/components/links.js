import React, {Component} from "react";
import {Link} from "react-router-dom";
import Rx from "rxjs/Rx";

export default class Links extends Component{

  constructor(props){
    super(props);

    this._linkJSX = <ul className="nav nav-tabs">
                      <li className="nav-item" role="presentation"><Link id="home" className={"nav-link"} to="/">Home</Link></li>
                      <li className="nav-item" role="presentation"><Link id="blog" className={"nav-link"} to="/blog">Blog</Link></li>
                      <li className="nav-item" role="presentation"><Link id="gallery" className={"nav-link"} to="/gallery">Gallery</Link></li>
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
