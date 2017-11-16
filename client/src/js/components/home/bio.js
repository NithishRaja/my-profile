import React, {Component} from "react";

export default class Bio extends Component{

  constructor(props){
    super(props);

    // initializing variable to contain JSX for bio
    this._bioJSX = <div className="container well card">
                    <img className="col-md-4" width="250" height="auto" alt={this.props.alt} src={this.props.img}/>
                    <p className="col-md-8">
                      {this.props.intro}
                    </p>
                  </div>;

    // initializing variable to contain layout for entire component
    this._componentLayoutJSX = this._bioJSX;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
