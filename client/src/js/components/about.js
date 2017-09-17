import React, {Component} from "react";

export default class About extends Component{

  constructor(props){
    super(props);

    this._nameJSX = <ul className="list-inline">
                      <li className="list-inline-item"><div className="alert alert-info"><strong>{"first"}: </strong>{this.props.about.name.first?this.props.about.name.first:""}</div></li>
                      <li className="list-inline-item"><div className="alert alert-info"><strong>{"middle"}: </strong>{this.props.about.name.middle?this.props.about.name.middle:""}</div></li>
                      <li className="list-inline-item"><div className="alert alert-info"><strong>{"last"}: </strong>{this.props.about.name.last?this.props.about.name.last:""}</div></li>
                    </ul>;

    this._birthJSX = <div className="alert alert-info"><strong>{"DOB"}: </strong>{`${this.props.about.birth.date} ${this.props.about.birth.month} ${this.props.about.birth.year}, ${this.props.about.birth.day}`}</div>;

    this._ageJSX = <div className="alert alert-info"><strong>{"age"}: </strong>{this.props.about.age}</div>;

    this._genderJSX = <div className="alert alert-info"><strong>{"sex"}: </strong>{this.props.about.sex}</div>;

    this._knownLanguagesJSX = <div className="alert alert-info"><strong>{"known languages"}: </strong>{this.props.about.languages.map(language => {return ` ${language}`})}</div>;

    this._componentLayoutJSX = <div className="well">{this._nameJSX}{this._birthJSX}{this._ageJSX}{this._genderJSX}{this._knownLanguagesJSX}</div>;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
// <li className="list-inline-item"><div className="alert alert-info"><strong></strong></div></li>
// "name": {
//   "first": "nithish",
//   "middle": null,
//   "last": "raja"
// },
// "age": 20,
// "sex": "male",
// "birth": {
//   "year": 1998,
//   "month": "may",
//   "date": 5,
//   "day": "tuesday"
// },
// "languages": {
//   "motherTongue": "tamil",
//   "others": [
//     "english",
//     "hindi"
//   ]
// }
