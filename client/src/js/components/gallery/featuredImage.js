import React, {Component} from "react";

export default class FeaturedImage extends Component{

  constructor(props){
    super(props);

    this._featuredImage = <img alt={this.props.alt} src={this.props.img} />;

    this._componentLayoutJSX = this._featuredImage;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
