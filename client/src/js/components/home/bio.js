import React, {Component} from "react";

export default class Bio extends Component{

  constructor(props){
    super(props);

    this._bioJSX = <div className="container well card">
                    <img className="img-thumbnail rounded-float-left" width="250" height="auto" alt="me" src="https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-9/10440859_601474259958235_8977662972349909950_n.jpg?oh=964e56b70d249079890ba84db6426c08&oe=5A4EC500"/>
                    <p>
                      {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget massa nec turpis congue bibendum. Integer nulla felis, porta suscipit nulla et, dignissim commodo nunc. Morbi a semper nulla."}
                    </p>
                    <p>
                      {"Proin mauris odio, pharetra quis ligula non, vulputate vehicula quam. Nunc in libero vitae nunc ultricies tincidunt ut sed leo. Sed luctus dui ut congue consequat. Cras consequat nisl ante, nec malesuada velit pellentesque ac. Pellentesque nec arcu in ipsum iaculis convallis."}
                    </p>
                  </div>;

    this._componentLayoutJSX = this._bioJSX;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
