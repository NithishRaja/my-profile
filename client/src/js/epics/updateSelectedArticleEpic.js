import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("START_SELECTED_ARTICLE_UPDATE")
    .mergeMap(action => Rx.Observable.ajax({url:"../api/blogContent", responseType:"json", payload:action.payload}))
    .map(ajax => {
      return {type:"UPDATE_SELECTED_ARTICLE", payload:ajax.response[ajax.request.payload]};
    });
}
