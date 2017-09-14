import React, {Component} from "react";

export default class Gallery extends Component{

  constructor(props){
    super(props);

    this._featuredImage = <img alt="img" src="https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/1186671_419534531485543_857767581_n.jpg?oh=cef8fca5f2f158bf5861fe17f6c1b13b&oe=5A543B52" />

    this._componentLayoutJSX = this._featuredImage;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
