
export default function(state=null, action){
  switch(action.type){
    case "UPDATE_SELECTED_ARTICLE":
      return action.payload;
      // return {
      //   "id": 1,
      //   "topic": "Has the LHC found any practical uses for the Higgs boson?",
      //   "content": [
      //     {
      //       "heading": null,
      //       "paragraph": "In July 2012, the announcement came that the Large Hadron Collider had found evidence for the Higgs boson. Scientists rejoiced. Researchers applauded. Physicists wept. Hardcore fans of the LHC wept, too, but everyone else mostly stood around the coffee maker at work and said, \"So, we can travel through time now, right?\""
      //     },
      //     {
      //       "heading": null,
      //       "paragraph": "From just a glimpse of the breathless media coverage and the images of physicists in Switzerland popping champagne, the layperson could easily figure out that finding the Higgs was a Big Deal. But what exactly that Big Deal had to do with our Little Lives was a little trickier to answer. Exactly what does it mean, from a practical sense?"
      //     }
      //   ]
      // };
    default:
      return state;
  }
}
