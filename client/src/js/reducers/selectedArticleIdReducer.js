
export default function(state=0, action){

  switch(action.type){
    case "UPDATE_SELECTED_ARTICLE_ID":
      return action.payload;
    default:
      return state;
  }
}
