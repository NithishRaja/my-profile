import React, {Component} from "react";
import Bio from "./home/bio";

export default class Home extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <Bio />;

  }

  render(){

    return (
      this._componentLayoutJSX
    );

  }

}
