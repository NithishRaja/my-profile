import React, {Component} from "react";

export default class PageCover extends Component{

  constructor(props){
    super(props);

    // initializing variable to contain JSX for page cover
    this._pageCoverJSX = <div width="100%"><img alt="page-cover" width="100%" src="http://fb-timeline-cover.com/covers-images/download/This%20is%20a%20Test%20Off%20Page.jpg" /></div>;

    // initializing variable to contain layout for entire component
    this._componentLayoutJSX = this._pageCoverJSX;

  }

  render(){

    return (
      this._componentLayoutJSX
    );

  }

}
