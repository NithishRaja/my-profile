import React, {Component} from "react";

export default class Gallery extends Component{

  constructor(props){
    super(props);

    this._featuredImage = <img alt="img" src="https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/1186671_419534531485543_857767581_n.jpg?oh=cef8fca5f2f158bf5861fe17f6c1b13b&oe=5A543B52" />

    this._albumCovers = <div className="well">
                          <img className="img-thumbnail" src="https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/1186671_419534531485543_857767581_n.jpg?oh=cef8fca5f2f158bf5861fe17f6c1b13b&oe=5A543B52" alt="album1" />
                          <img className="img-thumbnail" src="https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/10429851_696932123695665_253734662921625520_n.jpg?oh=e6917bf9d005d72de703d9c3cf2db5bb&oe=5A603048" alt="album1" />
                          <img className="img-thumbnail" src="https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/62847_493843140671232_135075184_n.jpg?oh=5cc4b3c572c49a1e88ff5ecd7f2e45e3&oe=5A5B66F8" alt="album1" />
                        </div>;

    this._componentLayoutJSX = <div>{this._featuredImage}{this._albumCovers}</div>;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
