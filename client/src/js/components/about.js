import React, {Component} from "react";

export default class About extends Component{

  constructor(props){
    super(props);

    this._nameJSX = <ul className="list-inline">
                      <li className="list-inline-item"><div className="alert alert-info"><strong>{"first"}: </strong>{"nithish"}</div></li>
                      <li className="list-inline-item"><div className="alert alert-info"><strong>{"middle"}: </strong></div></li>
                      <li className="list-inline-item"><div className="alert alert-info"><strong>{"last"}: </strong>{"raja"}</div></li>
                    </ul>;

    this._birthJSX = <div className="alert alert-info"><strong>{"DOB"}: </strong>{"05, may, 1998 Tuesday"}</div>;

    this._ageJSX = <div className="alert alert-info"><strong>{"age"}: </strong>{20}</div>;

    this._genderJSX = <div className="alert alert-info"><strong>{"sex"}: </strong>{"male"}</div>;

    this._knownLanguagesJSX = <div className="alert alert-info"><strong>{"known languages"}: </strong>{"tamil ,english, hindi"}</div>;

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
