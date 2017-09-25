import React, {Component} from "react";
import Preview from "./blog/preview";

export default class Blog extends Component{

  constructor(props){
    super(props);

    // initializing variable to contain JSX for alert
    this._fetchingBlogContentJSX = <div className="alert alert-info" role="alert">fetching blogs...</div>;

    // initializing variable to contain layout for entire component
    this._componentLayoutJSX = <div>{this._fetchingBlogContentJSX}</ div>;

  }

  componentWillMount(){
    if(this.props.blogContent===null){
      // update blog content whne it is not passes as props
      this.props.startBlogContentUpdate();
    }
  }

  render(){

    if(this.props.blogContent!==null){
      // whnn blog content is passed as props, initialize JSX to display blog content
      this._blogContentJSX = this.props.blogContent.map((article, index) =>
                                <Preview key={index} id={article.id}
                                updateSelectedArticleId={this.props.updateSelectedArticleId}
                                topic={article.topic} firstPara={article.content[0].paragraph} />);

      if(this.props.blogContent!==null){
        this._componentLayoutJSX = <div>{this._blogContentJSX}</div>;
      }
    }

    return(
      this._componentLayoutJSX
    );

  }
}
