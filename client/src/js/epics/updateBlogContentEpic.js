import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("START_BLOG_CONTENT_UPDATE")
    .mergeMap(action => Rx.Observable.ajax({url:"api/blogContent", responseType:"json"}))
    .pluck("response")
    .map(response => {
      return {type:"UPDATE_BLOG_CONTENT", payload: response};
    });
}
