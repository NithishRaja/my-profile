import React, {Component} from "react";

export default class Bio extends Component{

  constructor(props){
    super(props);

    this._bioJSX = <div className="container well card">
                    <img className="img-thumbnail rounded-float-left" width="250" height="auto" alt={this.props.alt} src={this.props.img}/>
                    <p>
                      {this.props.intro}
                    </p>
                  </div>;

    this._componentLayoutJSX = this._bioJSX;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
