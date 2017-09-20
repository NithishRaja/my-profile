import React, {Component} from "react";
import Preview from "./blog/preview";

export default class Blog extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <div>{this.props.blogContent.map((article, index) => <Preview key={index} id={article.id} updateSelectedArticle={this.props.updateSelectedArticle} topic={article.topic} firstPara={article.content[0].paragraph} />)}</ div>;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }
}
