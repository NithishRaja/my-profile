import React, {Component} from "react";
import Preview from "./blog/preview";

export default class Blog extends Component{

  constructor(props){
    super(props);

    // initializing variable to contain JSX for alert
    this._fetchingBlogContentJSX = <div className="alert alert-info container" role="alert">fetching blogs...</div>;

    // initializing variable to contain layout for entire component
    this._componentLayoutJSX = <div>{this._fetchingBlogContentJSX}</ div>;

  }

  componentWillMount(){
    if(this.props.blogContent===null){
      // update blog content whne it is not passes as props
      this.props.startBlogContentUpdate();
    }else{
      this._blogContentJSX = this.props.blogContent.map((article, index) =>
                                <Preview key={index}
                                 updateSelectedArticleId={this.props.updateSelectedArticleId}
                                 article={article} />);
      this._componentLayoutJSX = <div className="container blog-container">{this._blogContentJSX}</div>;
    }
  }

  componentWillUpdate(newProps){
    if(newProps.blogContent!==null){
      // when blog content is passed as props, initialize JSX to display blog content
      this._blogContentJSX = newProps.blogContent.map((article, index) =>
                                <Preview key={index}
                                 updateSelectedArticleId={newProps.updateSelectedArticleId}
                                 article={article} />);
      this._componentLayoutJSX = <div className="container blog-container">{this._blogContentJSX}</div>;
    }
  }

  render(){
    return(
      this._componentLayoutJSX
    );

  }
}
