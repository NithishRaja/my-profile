import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("START_BIO_UPDATE")
    .mergeMap(action => Rx.Observable.ajax({url:"api/bio.json", responseType:"json"}))
    .pluck("response")
    .map(response => {
      return {type:"UPDATE_BIO", payload:response};
    });
}
