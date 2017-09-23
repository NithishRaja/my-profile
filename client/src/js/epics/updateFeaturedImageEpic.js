
export default function(action$){

  const featuredImage = "https://spark.adobe.com/images/landing/examples/hiking-fb-cover.jpg";

  return action$.ofType("START_FEATURED_IMAGE_UPDATE")
    .map(action => {
      return {type:"UPDATE_FEATURED_IMAGE", payload:featuredImage};
    });
}
