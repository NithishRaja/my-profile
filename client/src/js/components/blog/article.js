import React, {Component} from "react";

export default class Article extends Component{

  constructor(props){
    super(props);

    this._fetchingArticleAlertJSX = <div className="alert alert-info">fetching article...</div>;

    this._componentLayoutJSX = <div>{this._fetchingArticleAlertJSX}</div>;

  }

  componentWillMount(){
    if(this.props.selectedArticle===null||this.props.selectedArticle.id!==this.props.selectedArticleId){
      this.props.startSelectedArticleUpdate(this.props.selectedArticleId);
    }
  }

  render(){

    if(this.props.selectedArticle!==null){
      this._articleTitleJSX = <header>
                                <h1 className="page-header col-md-12">{this.props.selectedArticle.topic}</h1>
                              </header>;

      this._articleContentJSX = <article>{this.props.selectedArticle.content.map((set, index) => {
        if(set.heading!==null){
          return <div key={`para ${index}`}><h2>{set.heading}</h2><p className="text-justify">{set.paragraph}</p></div>;
        }else{
          return <div key={`para ${index}`}><p className="text-justify">{set.paragraph}</p></div>;
        }
      })}</article>;

      this._articleJSX = <div className="container">{this._articleTitleJSX}{this._articleContentJSX}</div>;

      this._componentLayoutJSX = this._articleJSX;
    }

    return(
      this._componentLayoutJSX
    );

  }

}
