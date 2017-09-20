import React, {Component} from "react";

export default class Album extends Component{

  constructor(props){
    super(props);

    this._albumHeadingJSX = <header className="page-header col-md-12"><h2>{this.props.selectedAlbum.title}</h2></header>;

    this._imagesJSX = this.props.selectedAlbum.images.map((image, index) =>
      <div key={`image ${index}`} className="panel">
        <div className="panel-body">
          <img src={image} alt={`album ${this.props.selectedAlbum.title}`} />
        </div>
      </div>);

    this._componentLayoutJSX = <div className="well">{this._albumHeadingJSX}{this._imagesJSX}</div>;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
