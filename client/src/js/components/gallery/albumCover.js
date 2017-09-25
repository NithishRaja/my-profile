import React, {Component} from "react";
import {Link} from "react-router-dom";
import Rx from "rxjs/Rx";

export default class AlbumCover extends Component{

  constructor(props){
    super(props);

    // initializing variable to contain JSX for album cover
    this._albumCoversJSX = <div className="panel">
                            <div className="panel-body">
                              <img className="card-img-top" width="200px" height="auto" src={this.props.cover} alt={this.props.alt} />
                            </div>
                            <div className="panel-footer">
                              <Link to={`/gallery/${this.props.id}`} id={`album-${this.props.id}`} className="btn btn-default">View Album</Link>
                            </div>
                          </div>;

    // initializing variable to contain layout for entire component
    this._componentLayoutJSX = this._albumCoversJSX;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

  componentDidMount(){

    // listener for "view album" button clicks
    Rx.Observable.fromEvent(document.querySelector(`#album-${this.props.id}`), "click")
      .subscribe({
        next: () => {
          this.props.updateSelectedAlbumId(this.props.id);
        }
      });
  }

}
