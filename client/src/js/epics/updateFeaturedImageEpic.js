import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("START_FEATURED_IMAGE_UPDATE")
    .mergeMap(action => Rx.Observable.ajax({url:"api/featuredImage.json", responseType:"json"}))
    .pluck("response")
    .map(response => {
      return {type:"UPDATE_FEATURED_IMAGE", payload:response};
    });
}
