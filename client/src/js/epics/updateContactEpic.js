import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("START_CONTACT_UPDATE")
    .mergeMap(action => Rx.Observable.ajax({url:"api/contactInfo.json", responseType:"json"}))
    .pluck("response")
    .map(response => {
      return {type:"UPDATE_CONTACT", payload:response};
    });
}
