
export default function(state=null, action){

  switch (action.type){
    case "UPDATE_SELECTED_ALBUM":
      return action.payload;
    default:
    return state;
  }
}
