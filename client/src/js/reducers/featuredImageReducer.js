
export default function(state=null, action){

  switch(action.type){
    case "UPDATE_FEATURED_IMAGE":
      return action.payload;
    default:
      return state;
  }
}
