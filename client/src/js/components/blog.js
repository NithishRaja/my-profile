import React, {Component} from "react";
import Preview from "./blog/preview";

export default class Blog extends Component{

  constructor(props){
    super(props);

    this._fetchingBlogContentJSX = <div className="alert alert-info" role="alert">fetching blogs...</div>;

    this._componentLayoutJSX = <div>{this._fetchingBlogContentJSX}</ div>;

  }

  componentWillMount(){
    if(this.props.blogContent===null){
      this.props.startBlogContentUpdate();
    }
  }

  render(){

    if(this.props.blogContent!==null){
      this._blogContentJSX = this.props.blogContent.map((article, index) =>
                                <Preview key={index} id={article.id}
                                startSelectedArticleUpdate={this.props.startSelectedArticleUpdate}
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
