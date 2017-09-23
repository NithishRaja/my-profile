
export default function(action$){

  const aboutInfo = {
    "name": {
      "first": "nithish",
      "middle": null,
      "last": "raja"
    },
    "age": 20,
    "sex": "male",
    "birth": {
      "year": 1998,
      "month": "may",
      "date": 5,
      "day": "tuesday"
    },
    "languages": [
      "tamil",
      "english",
      "hindi"
    ]
  };

  return action$.ofType("START_ABOUT_UPDATE")
    .map(action => {
      return {type:"UPDATE_ABOUT", payload: aboutInfo};
    });
}
