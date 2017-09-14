import React, {Component} from "react";
import FeaturedImage from "./gallery/featuredImage";
import AlbumCover from "./gallery/albumCover";

export default class Gallery extends Component{

  constructor(props){
    super(props);

    this._featuredImageLink = "https://spark.adobe.com/images/landing/examples/hiking-fb-cover.jpg";

    this._albumCoverLinks = [
      "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/1186671_419534531485543_857767581_n.jpg?oh=cef8fca5f2f158bf5861fe17f6c1b13b&oe=5A543B52",
      "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/943044_482271998560193_423635541_n.jpg?oh=1c071c38c3b255ccecbadd57023840d5&oe=5A4BA11A",
      "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/1235250_419538778151785_393666073_n.jpg?oh=856f70afc87a42de45f38ead55dd2a42&oe=5A16DE9D"
    ];

    this._componentLayoutJSX = <div>
                                <FeaturedImage img={this._featuredImageLink} alt={"image"} />
                                <div className="well">
                                  {this._albumCoverLinks.map((link, index) => <AlbumCover key={index} cover={link} alt={"image"} />)}
                                </div>
                              </div>;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
