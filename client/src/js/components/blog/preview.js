import React, {Component} from "react";
import {Link} from "react-router-dom";
import Rx from "rxjs/Rx";

export default class Preview extends Component{

  constructor(props){
    super(props);

    // initializing variable to JSX for preview
    this._previewJSX = <div className="panel panel-default">
                        <div className="panel-heading">
                          {this.props.topic}
                        </div>
                        <div className="panel-body">
                          {this.props.firstPara}
                        </div>
                        <div className="panel-footer">
                          <Link id={`read-article-${this.props.id}`} className="btn btn-default" to={"/blog/"+this.props.id} >Read article</Link>
                        </div>
                      </div>;

    // initializing variable to contain layout for entire component
    this._componentLayoutJSX = this._previewJSX;
  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

  componentDidMount(){

    // listener for "read-article" button clicks
    Rx.Observable.fromEvent(document.querySelector(`#read-article-${this.props.id}`), "click")
      .subscribe({
        next: (event) => {
          this.props.updateSelectedArticleId(this.props.id);
        }
      });

  }

}
