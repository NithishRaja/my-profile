import React, {Component} from "react";

export default class Blog extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <h1>blog</h1>;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }
}
