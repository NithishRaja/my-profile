import React, {Component} from "react";

export default class Contact extends Component{

  constructor(props){
    super(props);

        console.log(this.props);

    this._sendEmailJSX = <div className="alert alert-info"><strong>{"Email:"}</strong>{this.props.contact.email.map(email => {return ` ${email}`})}</div>;

    this._mobileNumberJSX = <div className="alert alert-info"><strong>{"Mobile: "}</strong>{this.props.contact.mobile.map(mobile => mobile)}</div>;

    this._socialMediaJSX = this.props.contact.socialMedia.map((media, index) => <div key={index} className="alert alert-info"><strong>{media[0]}: </strong>{media[1]}</div>);

    this._locationJSX = <div className="alert alert-default">
                          <div className="alert alert-info"><strong>{"lattitude"}: </strong>{this.props.contact.location.lattitude}</div>
                          <div className="alert alert-info"><strong>{"longitude"}: </strong>{this.props.contact.location.longitude}</div>
                          <div className="alert alert-info"><strong>{"address"}: </strong>{this.props.contact.location.address}</div>
                        </div>;

    this._componentLayoutJSX = <div className="well">{this._sendEmailJSX}{this._mobileNumberJSX}{this._socialMediaJSX}{this._locationJSX}</div>;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
