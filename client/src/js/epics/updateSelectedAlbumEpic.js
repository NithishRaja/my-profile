import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("START_SELECTED_ALBUM_UPDATE")
    .mergeMap(action => Rx.Observable.ajax({url:"../api/albumImages.json", responseType:"json", payload:action.payload}))
    .map(ajax => {
      return {type:"UPDATE_SELECTED_ALBUM", payload:ajax.response[ajax.request.payload]};
    });
}
