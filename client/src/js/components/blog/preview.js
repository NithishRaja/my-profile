import React, {Component} from "react";
import {Link} from "react-router-dom";
import Rx from "rxjs/Rx";

export default class Preview extends Component{

  constructor(props){
    super(props);

    // initializing variable to JSX for preview
    this._previewJSX = <div className="panel panel-info">
                        <div className="panel-heading blog-heading">
                          {this.props.article.topic}
                        </div>
                        <div className="panel-body">
                          <p>{this.props.article.content[0].paragraph}</p>
                        </div>
                        <div className="panel-footer">
                          <Link id={`read-article-${this.props.article.id}`} className="btn btn-primary col-md-offset-10" to={"/blog/"+this.props.article.id} >Read article</Link>
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
    Rx.Observable.fromEvent(document.querySelector(`#read-article-${this.props.article.id}`), "click")
      .subscribe({
        next: (event) => {
          this.props.updateSelectedArticleId(this.props.article.id);
        }
      });

  }

}
