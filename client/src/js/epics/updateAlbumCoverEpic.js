import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("START_ALBUM_COVER_UPDATE")
    .mergeMap(action => Rx.Observable.ajax({url:"api/albumCover.json", responseType:"json"}))
    .pluck("response")
    .map(response => {
      return {type:"UPDATE_ALBUM_COVER", payload: response};
    });
}
