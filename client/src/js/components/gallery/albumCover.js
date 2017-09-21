import React, {Component} from "react";
import {Link} from "react-router-dom";
import Rx from "rxjs/Rx";

export default class AlbumCover extends Component{

  constructor(props){
    super(props);

    this._albumCoversJSX = <div className="panel">
                            <div className="panel-body">
                              <img className="card-img-top" width="200px" height="auto" src={this.props.cover} alt={this.props.alt} />
                            </div>
                            <div className="panel-footer">
                              <Link to={`/gallery/${this.props.id}`} id={`view-album${this.props.id}`} className="btn btn-default">View Album</Link>
                            </div>
                          </div>;

    this._componentLayoutJSX = this._albumCoversJSX;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

  componentDidMount(){

    Rx.Observable.fromEvent(document.querySelector(`#view-album${this.props.id}`), "click")
      .subscribe({
        next: (event) => {
          this.props.startSelectedAlbumUpdate(this.props.id);
        }
      });

  }

}
