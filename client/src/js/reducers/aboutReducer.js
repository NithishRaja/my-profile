
export default function(state=null, action){

  switch(action.type){
    case "UPDATE_ABOUT":
      return action.payload;
    default:
      return state;
  }
}
