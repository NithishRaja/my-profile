
export default function(state=null, action){
  switch(action.type){
    case "UPDATE_SELECTED_ARTICLE":
      return action.payload;
    default:
      return state;
  }
}
