import React, {Component} from "react";

export default class Article extends Component{

  constructor(props){
    super(props);

    // initializing variable for rendering alert
    this._fetchingArticleAlertJSX = <div className="alert alert-info">fetching article...</div>;

    // initializing variable to hold entire layout of component
    this._componentLayoutJSX = <div>{this._fetchingArticleAlertJSX}</div>;

  }

  componentWillMount(){
    if(this.props.selectedArticle===null||this.props.selectedArticle.id!==this.props.selectedArticleId){
      // article is updated if no article is sent as prop or wrong article is sent
      this.props.startSelectedArticleUpdate(this.props.selectedArticleId);
    }
  }

  render(){

    if(this.props.selectedArticle!==null){
      // if article is sent, initialize JSX
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
