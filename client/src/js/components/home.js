import React, {Component} from "react";
import Bio from "./home/bio";

export default class Home extends Component{

  constructor(props){
    super(props);

    // initializing variable to contain JSX for alert
    this._fetchingBioAlertJSX = <div className="alert alert-info" role="alert">fetching bio...</div>

    // initializing JSX to contain layout for entire component
    this._componentLayoutJSX = <div>{this._fetchingBioAlertJSX}</div>;

  }

  componentWillMount(){
    if(this.props.bio===null){
      // update bio if it is not passed as props
      this.props.startBioUpdate();
    }
  }

  render(){

    if(this.props.bio!==null){
      // if bio is passed as props, initializing JSX to display bio
      this._bioJSX = <Bio para alt={"image"} img={this.props.bio.image} intro={this.props.bio.intro} />;

      this._componentLayoutJSX = <div>{this._bioJSX}</div>;
    }

    return (
      this._componentLayoutJSX
    );

  }

}
