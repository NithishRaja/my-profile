import React, {Component} from "react";

export default class FeaturedImage extends Component{

  constructor(props){
    super(props);

    // initializing variable to contain JSX for featured image
    this._featuredImage = <img alt={this.props.alt} src={this.props.img} />;

    // initializing variable to contain layout for entire component
    this._componentLayoutJSX = this._featuredImage;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
