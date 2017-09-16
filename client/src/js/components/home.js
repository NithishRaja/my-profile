import React, {Component} from "react";
import Bio from "./home/bio";

export default class Home extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <Bio para alt={"image"} img={this.props.bio.image} intro={this.props.bio.intro} />;

  }

  render(){

    return (
      this._componentLayoutJSX
    );

  }

}
