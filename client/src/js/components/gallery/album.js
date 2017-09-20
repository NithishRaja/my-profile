import React, {Component} from "react";

export default class Album extends Component{

  constructor(props){
    super(props);

    console.log(this.props);

    this._componentLayoutJSX = <h1>{"One for All"}</h1>;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
