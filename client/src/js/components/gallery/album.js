import React, {Component} from "react";

export default class Album extends Component{

  constructor(props){
    super(props);

    // initializing variable to contain alert for fetching images
    this._fetchingImagesAlertJSX = <div className="alert alert-info" role="alert">fetching images...</div>;

    // initializing variable to contain layout for entire component
    this._componentLayoutJSX = <div>{this._fetchingImagesAlertJSX}</div>;

  }

  componentWillMount(){
    if(this.props.selectedAlbum===null||this.props.selectedAlbum.id!==this.props.selectedAlbumId){
      // update album if no album is sent as props or wrong album is sent
      this.props.startSelectedAlbumUpdate(this.props.selectedAlbumId);
    }
  }

  render(){

    if(this.props.selectedAlbum!==null){
      // if album is sent as props, initializing JSX to display album
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
