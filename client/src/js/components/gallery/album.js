import React, {Component} from "react";

export default class Album extends Component{

  constructor(props){
    super(props);

    this._fetchingImagesAlertJSX = <div className="alert alert-info" role="alert">fetching images...</div>;

    this._componentLayoutJSX = <div>{this._fetchingImagesAlertJSX}</div>;

  }

  componentWillMount(){
    if(this.props.selectedAlbum===null||this.props.selectedAlbum.id!==this.props.selectedAlbumId){
      this.props.startSelectedAlbumUpdate(this.props.selectedAlbumId);
    }
  }

  render(){

    if(this.props.selectedAlbum!==null){
      this._albumHeadingJSX = <header className="page-header col-md-12"><h2>{this.props.selectedAlbum.title}</h2></header>;

      this._imagesJSX = this.props.selectedAlbum.images.map((image, index) =>
        <div key={`image ${index}`} className="panel">
          <div className="panel-body">
            <img src={image} alt={`album ${this.props.selectedAlbum.title}`} />
          </div>
        </div>);

      this._componentLayoutJSX = <div className="well">{this._albumHeadingJSX}{this._imagesJSX}</div>;
    }

    return(
      this._componentLayoutJSX
    );

  }

}
