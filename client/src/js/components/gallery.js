import React, {Component} from "react";
import FeaturedImage from "./gallery/featuredImage";
import AlbumCover from "./gallery/albumCover";

export default class Gallery extends Component{

  constructor(props){
    super(props);

    if(this.props.albumCover===null){
      console.log("component");
      console.log(this.props);
      this.props.startAlbumCoverUpdate("constructor");
    }

    if(this.props.albumCover===null){
      this._componentLayoutJSX = <h1>one for all</h1>;
    }else{
      this._componentLayoutJSX = <div>
                                  <FeaturedImage img={this.props.featuredImage} alt={"image"} />
                                  <div className="well">
                                    {this.props.albumCover.map((link, index) =>
                                      <AlbumCover
                                      startSelectedAlbumUpdate={this.props.startSelectedAlbumUpdate}
                                      key={index} id={index} cover={link} alt={"image"} />)}
                                  </div>
                                </div>;
    }

  }

  componentWillMount(){
    if(this.props.albumCover===null){
      this.props.startAlbumCoverUpdate("componentWillMount");
    }
  }

  render(){

    if(this.props.albumCover===null){
      this._componentLayoutJSX = <h1>one for all</h1>;
    }else{
      this._componentLayoutJSX = <div>
                                  <FeaturedImage img={this.props.featuredImage} alt={"image"} />
                                  <div className="well">
                                    {this.props.albumCover.map((link, index) =>
                                      <AlbumCover
                                      startSelectedAlbumUpdate={this.props.startSelectedAlbumUpdate}
                                      key={index} id={index} cover={link} alt={"image"} />)}
                                  </div>
                                </div>;
    }

    return(
      this._componentLayoutJSX
    );

  }

}
