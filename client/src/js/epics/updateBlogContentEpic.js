
export default function(action$){

  const blogContent = [
    {
      "id": 0,
      "topic": "Yes, Some Questions Are Better Than Others",
      "content": [
        {
          "heading": null,
          "paragraph": "To appreciate that some questions are better than others, it helps to consider a few examples of questions that are bad."
        },
        {
          "heading": null,
          "paragraph": "To find them, try playing Twenty Questions with a young child. In trying to guess an animal, a young child might ask: Is it a koala? Is it an elephant? (Not: Is it a mammal? Does it live in Africa?) These are bad questions in the sense that they're unlikely to yield an efficient solution to the problem of discovering the animal one's adversary has chosen."
        },
        {
          "heading": null,
          "paragraph": "In the simplified world of Twenty Questions, it's relatively easy to evaluate what makes a question good or bad. Unfortunately, generating good questions in the real world is often a more complicated affair."
        }
      ]
    },
    {
      "id": 1,
      "topic": "Has the LHC found any practical uses for the Higgs boson?",
      "content": [
        {
          "heading": null,
          "paragraph": "In July 2012, the announcement came that the Large Hadron Collider had found evidence for the Higgs boson. Scientists rejoiced. Researchers applauded. Physicists wept. Hardcore fans of the LHC wept, too, but everyone else mostly stood around the coffee maker at work and said, \"So, we can travel through time now, right?\""
        },
        {
          "heading": null,
          "paragraph": "From just a glimpse of the breathless media coverage and the images of physicists in Switzerland popping champagne, the layperson could easily figure out that finding the Higgs was a Big Deal. But what exactly that Big Deal had to do with our Little Lives was a little trickier to answer. Exactly what does it mean, from a practical sense?"
        }
      ]
    }
  ];

  return action$.ofType("START_BLOG_CONTENT_UPDATE")
    .map(action => {
      return {type:"UPDATE_BLOG_CONTENT", payload: blogContent};
    });
}
