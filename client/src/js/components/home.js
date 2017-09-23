import React, {Component} from "react";
import Bio from "./home/bio";

export default class Home extends Component{

  constructor(props){
    super(props);

    this._fetchingBioAlertJSX = <div className="alert alert-info" role="alert">fetching bio...</div>

    this._componentLayoutJSX = <div>{this._fetchingBioAlertJSX}</div>;

  }

  componentWillMount(){
    if(this.props.bio===null){
      this.props.startBioUpdate();
    }
  }

  render(){

    if(this.props.bio!==null){
      this._bioJSX = <Bio para alt={"image"} img={this.props.bio.image} intro={this.props.bio.intro} />;

      this._componentLayoutJSX = <div>{this._bioJSX}</div>;
    }

    return (
      this._componentLayoutJSX
    );

  }

}
