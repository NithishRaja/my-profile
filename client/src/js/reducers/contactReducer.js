
export default function(state=null, action){

  switch(action.type){
    case "UPDATE_CONTACT":
      return action.payload;
    default:
      return state;
  }
}
