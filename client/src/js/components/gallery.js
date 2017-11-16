import React, {Component} from "react";
import AlbumCover from "./gallery/albumCover";

export default class Gallery extends Component{

  constructor(props){
    super(props);

    // initializing variable to JSX for alert
    this._fetchingAlbumCoversAlertJSX = <div className="alert alert-info" role="alert">fetching album covers...</div>;

    // initializing variable to contain layout for entire component
    this._componentLayoutJSX = <div>{this._fetchingFeaturedImageAlertJSX}{this._fetchingAlbumCoversAlertJSX}</div>;

  }

  componentWillMount(){
    if(this.props.albumCover===null){
      // update album cover if it is not passed as props
      this.props.startAlbumCoverUpdate();
      this._componentLayoutJSX = <div>{this._fetchingAlbumCoversAlertJSX}</div>;
    }else{
      // if album cover is sent, initialize JSX to display album cover
      this._albumCoverJSX = <div className="container">
        {this.props.albumCover.map((link, index) =>
          <AlbumCover
          updateSelectedAlbumId={this.props.updateSelectedAlbumId}
          key={index} id={index} cover={link} alt={"image"} />)}
      </div>;
      this._componentLayoutJSX = <div>
                                  {this._albumCoverJSX}
                                </div>;
    }
  }

  componentWillUpdate(newProps){
    if(newProps.albumCover!==null){
      // if album cover is sent, initialize JSX to display album cover
      this._albumCoverJSX = <div className="container">
        {newProps.albumCover.map((link, index) =>
          <AlbumCover
          updateSelectedAlbumId={newProps.updateSelectedAlbumId}
          key={index} id={index} cover={link} alt={"image"} />)}
      </div>;
      this._componentLayoutJSX = <div>
                                  {this._albumCoverJSX}
                                </div>;
    }
  }

  render(){
    return(
      this._componentLayoutJSX
    );

  }

}
