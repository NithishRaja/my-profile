import React, {Component} from "react";

export default class About extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <h1>World</h1>;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
