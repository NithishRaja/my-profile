import React, {Component} from "react";

export default class PageCover extends Component{

  constructor(props){
    super(props);

    // initializing variable to contain JSX for page cover
    this._pageCoverJSX = <div width="100%"><img alt="page-cover" width="100%" src="https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-9/10600553_567941083311553_2842855397995345965_n.jpg?oh=ef0a727753361a3cbf21d1d3b5d87333&oe=5AAF7F98" /></div>;

    // initializing variable to contain layout for entire component
    this._componentLayoutJSX = this._pageCoverJSX;

  }

  render(){

    return (
      this._componentLayoutJSX
    );

  }

}
