import React, {Component} from "react";
import FeaturedImage from "./gallery/featuredImage";
import AlbumCover from "./gallery/albumCover";

export default class Gallery extends Component{

  constructor(props){
    super(props);

    this._fetchingFeaturedImageAlertJSX = <div className="alert alert-info" role="alert">fetching featured image...</div>;

    this._fetchingAlbumCoversAlertJSX = <div className="alert alert-info" role="alert">fetching album covers...</div>;

    this._componentLayoutJSX = <div>{this._fetchingFeaturedImageAlertJSX}{this._fetchingAlbumCoversAlertJSX}</div>;

  }

  componentWillMount(){
    if(this.props.albumCover===null){
      this.props.startAlbumCoverUpdate();
    }

    if(this.props.featuredImage===null){
      this.props.startFeaturedImageUpdate();
    }

  }

  render(){

    if(this.props.featuredImage!==null){
      this._featuredImageJSX = <FeaturedImage img={this.props.featuredImage} alt={"image"} />;
    }

    if(this.props.albumCover!==null){
      this._albumCoverJSX = <div className="well">
        {this.props.albumCover.map((link, index) =>
          <AlbumCover
          startSelectedAlbumUpdate={this.props.startSelectedAlbumUpdate}
          key={index} id={index} cover={link} alt={"image"} />)}
      </div>;
    }

    if(this.props.albumCover===null&&this.props.featuredImage!==null){
      this._componentLayoutJSX = <div>{this._featuredImageJSX}{this._fetchingAlbumCoversAlertJSX}</div>;
    }else if(this.props.featuredImage===null&&this.props.albumCover!==null){
      this._componentLayoutJSX = <div>{this._fetchingFeaturedImageAlertJSX}{this._albumCoverJSX}</div>;
    }else if(this.props.featuredImage!==null&&this.props.albumCover!==null){
      this._componentLayoutJSX = <div>
                                  {this._featuredImageJSX}
                                  {this._albumCoverJSX}
                                </div>;
    }

    return(
      this._componentLayoutJSX
    );

  }

}
