import React, {Component} from "react";

export default class About extends Component{

  constructor(props){
    super(props);

    // initializing variable to contain JSX for fetching info alert
    this._fetchingInfoJSX = <div className="alert alert-info">fetching info...</div>;

    // initializing variable to contain layout for entire component
    this._componentLayoutJSX = <div>{this._fetchingInfoJSX}</div>;

  }

  componentWillMount(){
    if(this.props.about===null){
      // update about when it is not passed as props
      this.props.startAboutUpdate();
    }
  }

  render(){

    if(this.props.about!==null){
      // initializing variable to contain JSX for about when about is passed as props
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

    return(
      this._componentLayoutJSX
    );

  }

}
