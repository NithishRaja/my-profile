import React, {Component} from "react";

export default class Contact extends Component{

  constructor(props){
    super(props);

    this._sendEmailJSX = <div className="alert alert-info"><strong>{"Email:"}</strong>{"nithishraja@ymail.com, f20160388@hyderabad.bits-pilani.ac.in"}</div>;

    this._mobileNumberJSX = <div className="alert alert-info"><strong>{"Mobile: "}</strong>{"9500666287"}</div>;

    this.socialMediaInfo = [
      ["facebook", "https://www.facebook.com/nithish.raja.94"],
      ["linkedIn", "https://www.linkedin.com/in/nithish-raja-1a81ba140/"]
    ];

    this._socialMediaJSX = this.socialMediaInfo.map((media, index) => <div className="alert alert-info"><strong>{media[0]}: </strong>{media[1]}</div>);

    this._locationJSX = <div className="alert alert-default">
                          <div className="alert alert-info"><strong>{"lattitude"}: </strong>17.5449703</div>
                          <div className="alert alert-info"><strong>{"longitude"}: </strong>78.5716459</div>
                          <div className="alert alert-info"><strong>{"address"}: </strong>{"Shameerpet Mandal, Jawahar Nagar, Hyderabad, Telangana 500078, India"}</div>
                        </div>;

    this._componentLayoutJSX = <div className="well">{this._sendEmailJSX}{this._mobileNumberJSX}{this._socialMediaJSX}{this._locationJSX}</div>;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
