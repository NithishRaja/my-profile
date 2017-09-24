import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("START_ABOUT_UPDATE")
    .mergeMap(action => Rx.Observable.ajax({url:"/api/about.json", responseType:"json"}))
    .pluck("response")
    .map(response => {
      return {type:"UPDATE_ABOUT", payload: response};
    });
}
