
export default function(action$){

  const bio = {
    intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget massa nec turpis congue bibendum. Integer nulla felis, porta suscipit nulla et, dignissim commodo nunc. Morbi a semper nulla. Proin mauris odio, pharetra quis ligula non, vulputate vehicula quam. Nunc in libero vitae nunc ultricies tincidunt ut sed leo. Sed luctus dui ut congue consequat. Cras consequat nisl ante, nec malesuada velit pellentesque ac. Pellentesque nec arcu in ipsum iaculis convallis.",
    image: "https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-9/10440859_601474259958235_8977662972349909950_n.jpg?oh=964e56b70d249079890ba84db6426c08&oe=5A4EC500"
  };

  return action$.ofType("START_BIO_UPDATE")
    .map(action => {
      return {type:"UPDATE_BIO", payload:bio};
    });
}
