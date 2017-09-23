
export default function(state=null, action){

  switch(action.type){
    case "UPDATE_BLOG_CONTENT":
      return action.payload;
    default:
      return state;
  }
}
