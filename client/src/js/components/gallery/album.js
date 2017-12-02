import React, {Component} from "react";

export default class Album extends Component{

  constructor(props){
    super(props);

    // id, images. title
    this.state = {
      activeImage: 0
    };

    // initializing variable to contain alert for fetching images
    this._fetchingImagesAlertJSX = <div className="alert alert-info" role="alert">fetching images...</div>;

    // initializing variable to contain layout for entire component
    this._componentLayoutJSX = <div className="container">{this._fetchingImagesAlertJSX}</div>;

    // initialize variable for panel footer
    this._panelFooterJSX = <div className="panel-footer">
                              <button id={`previous-${this.state.activeImage}`} className="btn btn-primary disabled" onClick={this.previousClicked.bind(this)}>{"previous"}</button>
                              <button id={`next-${this.state.activeImage}`} className="btn btn-primary col-md-offset-10" onClick={this.nextClicked.bind(this)}>{"next"}</button>
                            </div>;
  }

  // handler for previous button
  previousClicked(){
    this.setState({
      activeImage: this.state.activeImage-1
    });
  }

  // handler for next button
  nextClicked(){
    this.setState({
      activeImage: this.state.activeImage+1
    });
  }

  componentWillMount(){
    if(this.props.selectedAlbum===null||this.props.selectedAlbum.id!==this.props.selectedAlbumId){
      // update album if no album is sent as props or wrong album is sent
      this.props.startSelectedAlbumUpdate(this.props.selectedAlbumId);
    }else{
      // if album is sent as props, initializing JSX to display album
      this._imageDisplayJSX = <div className="panel panel-info album-panel">
                                <div className="panel-heading album-panel-heading">
                                  {this.props.selectedAlbum.title}
                                </div>
                                <img className="album-image" src={this.props.selectedAlbum.images[this.state.activeImage]} alt={this.props.selectedAlbum.title} />
                                {this._panelFooterJSX}
                              </div>;

      this._componentLayoutJSX = <div className="container">{this._imageDisplayJSX}</div>;
    }
  }

  componentWillUpdate(newProps, newState){
    if(newProps.selectedAlbum!==null){
      if(newProps.selectedAlbum.images.length===1){
        this._panelFooterJSX = <div className="panel-footer">
                                  <button id={`previous-${newState.activeImage}`} className="btn btn-primary disabled" onClick={this.previousClicked.bind(this)}>{"previous"}</button>
                                  <button id={`next-${newState.activeImage}`} className="btn btn-primary disabled col-md-offset-10" onClick={this.nextClicked.bind(this)}>{"next"}</button>
                                </div>;
      }else if(newState.activeImage===0){
        this._panelFooterJSX = <div className="panel-footer">
                                  <button id={`previous-${newState.activeImage}`} className="btn btn-primary disabled" onClick={this.previousClicked.bind(this)}>{"previous"}</button>
                                  <button id={`next-${newState.activeImage}`} className="btn btn-primary col-md-offset-10" onClick={this.nextClicked.bind(this)}>{"next"}</button>
                                </div>;
      }else if(newState.activeImage===newProps.selectedAlbum.images.length-1){
        this._panelFooterJSX = <div className="panel-footer">
                                  <button id={`previous-${newState.activeImage}`} className="btn btn-primary" onClick={this.previousClicked.bind(this)}>{"previous"}</button>
                                  <button id={`next-${newState.activeImage}`} className="btn btn-primary disabled col-md-offset-10" onClick={this.nextClicked.bind(this)}>{"next"}</button>
                                </div>;
      }else{
        this._panelFooterJSX = <div className="panel-footer">
                                  <button id={`previous-${newState.activeImage}`} className="btn btn-primary" onClick={this.previousClicked.bind(this)}>{"previous"}</button>
                                  <button id={`next-${newState.activeImage}`} className="btn btn-primary col-md-offset-10" onClick={this.nextClicked.bind(this)}>{"next"}</button>
                                </div>;
      }
      // if album is sent as props, initializing JSX to display album
      this._imageDisplayJSX = <div className="panel panel-info album-panel">
                                <div className="panel-heading album-panel-heading">
                                  {newProps.selectedAlbum.title}
                                </div>
                                <img className="album-image" src={newProps.selectedAlbum.images[newState.activeImage]} alt={newProps.selectedAlbum.title} />
                                {this._panelFooterJSX}
                              </div>;

      this._componentLayoutJSX = <div className="container">{this._imageDisplayJSX}</div>;
    }
  }

  render(){
    return(
      this._componentLayoutJSX
    );

  }
}
