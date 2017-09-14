import React, {Component} from "react";

export default class AlbumCover extends Component{

  constructor(props){
    super(props);

    this._albumCoversJSX = <img className="img-thumbnail" width="200px" height="auto" src={this.props.cover} alt={this.props.alt} />;

    this._componentLayoutJSX = this._albumCoversJSX;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
