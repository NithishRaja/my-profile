
export default function(state="Home", action){

  switch(action.type){
    case "UPDATE_CURRENT_PAGE":
      return action.payload;
    default:
      return state;
  }

}
