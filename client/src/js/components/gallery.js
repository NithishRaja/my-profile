import React, {Component} from "react";
import FeaturedImage from "./gallery/featuredImage";
import AlbumCover from "./gallery/albumCover";

export default class Gallery extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <div>
                                <FeaturedImage img={this.props.featuredImage} alt={"image"} />
                                <div className="well">
                                  {this.props.albumCover.map((link, index) => <AlbumCover key={index} cover={link} alt={"image"} />)}
                                </div>
                              </div>;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
